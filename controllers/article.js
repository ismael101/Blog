const Articles = require('../models').Article
const { Op } = require('sequelize');
var Sequelize = require('sequelize')

exports.getArticles = (req,res,next) => {
    const search = req.query.search
    if(search){
        Articles.findAll({where: {
            [Op.or]: [
              'title', 'content', 'author', 'category'
            ].map(key => ({
              [key]: {
                [Op.like]: `%${search}%`
              }
            }))
          }})
          .then(articles => {
            if(articles){
                res.status(200).send(articles)
            }else{
                res.status(404).send('Articles Not Found')
            }
          })
          .catch(err => {
              res.status(404).send(err)
          })
    }else{
        Articles.findAll({order: [['date', 'DESC']], limit:3})
            .then(articles => {
                if(articles){
                    res.status(200).send(articles)
                }else{
                    res.status(404).send('Articles Not Found')
                }
            })
            .catch(err => {
                res.status(400).send(err)
            })
    }
}

exports.getArticle = (req,res,next) => {
    Articles.findByPk(req.params.id)
        .then(article => {
            if(article){
                res.status(200).send(article)
            }else{
                res.status(404).send('Article Not Found')
            }
        })
        .catch(err => {
            res.status(400).send(err)
        })
}

exports.getPopular = (req,res,next) => {
    Articles.findAll({order: [['views', 'DESC']], limit:3})
        .then(articles => {
            if(articles){
                res.status(200).send(articles)
            }else{
                res.status(404).send('Articles Not Found')
            }
        })
        .catch(err => {
            res.status(400).send(err)
        })
}

exports.getCategory = (req,res,next) => {
    Articles.findAll({where: {category: req.body.category},limit:5})
        .then(articles => {
            if(articles){
                res.status(200).send(articles)
            }else{
                res.status(404).send('Articles Not Found')
            }
        })
        .catch(err => {
            res.status(400).send(err)
        })
}
