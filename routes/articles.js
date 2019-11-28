const articleController = require('../controllers/articles')
const express = require('express')
const router = express.Router()
const multer = require('multer')

const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null, './images')
    },
    filename: function(req,file,cb){
        cb(null, file.originalname)
    }
})

const upload = multer({
    storage:storage
})


router.get('/',articleController.get)
router.get('/:id', articleController.getId)
router.post('/',upload.single('image'),articleController.create)
router.delete('/:id',articleController.delete)

module.exports = router