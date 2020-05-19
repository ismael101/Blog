const express = require('express')
const controller = require('../controllers/article')
const router = express.Router()

router.get('/', controller.getArticles)
router.get('/:id', controller.getArticle)

module.exports = router