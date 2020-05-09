const express = require('express')
const controller = require('../controllers/article')
const router = express.Router()

router.get('/', controller.getArticles)
router.get('/popular', controller.getPopular)
router.get('/:id', controller.getArticle)
router.post('/category', controller.getCategory)


module.exports = router