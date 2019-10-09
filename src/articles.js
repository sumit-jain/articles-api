const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
            message: 'Articles list'
        });
});

router.post('/', (req, res, next) => {
    const article = {
        title: req.body.title,
        desc: req.body.desc,
        postedBy: req.body.postedBy
    };

    res.status(201).json({
        message: 'Article added successfully',
        createdArticle: article
    })
});

router.get('/:articleId', (req, res, next) => {
    const id = req.params.articleId;
    res.status(200).json({
            message: 'My first Article',
            articleId: id
        });
});

module.exports = router;