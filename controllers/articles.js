const Articles = require('../models').Articles
const { Op } = require('sequelize');

exports.get = (req,res,next) => {
    const search = req.query.search
    if(search){
        Articles.findAll({
            where: {
                [Op.or]: [
                  'title', 'author', 'content', 'category'
                ].map(key => ({
                  [key]: {
                    [Op.like]: `%${search}%`
                  }
                }))
              },
              order:['published']
        })
        .then(articles => {
            res.status(200).json(articles)
        })
    }else{
        Articles.findAll({order: ['published']})
            .then(articles => {
                res.status(200).json(articles)
            })
            .catch(error => {
                res.status(400).json(error)
            })
    }

}
exports.getId = (req,res,next) => {
    Articles.findOne({where:{id:req.params.id}})
            .then(article => {
                res.status(200).json(article)
            })
            .catch(error => {
                res.status(400).json(error)
            })
}


exports.create = (req,res,next) => {
    let body = {
        title:req.body.title,
        author:req.body.author,
        published:req.body.published,
        category:req.body.category,
        content:req.body.content,
        picture:req.file.path,
    }

    Articles.create(body)
            .then(article => {
                res.status(200).json(article)
            })
            .catch(error => {
                res.status(400).json(error)
            })
}
exports.delete = (req,res,next) => {
    Articles.find({where:{id:req.params.id}})
            .then(article => {
                article.destroy()
                res.status(200).json(article)
            })
            .catch(error => {
                res.status(400).json(error)
            })
}
