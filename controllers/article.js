const Articles = require('../models').Article
const { Op } = require('sequelize');
var Sequelize = require('sequelize')

exports.getArticles = (req,res,next) => {
    const search = req.query.search
    if(search){
        Articles.findAll({where: {
            [Op.or]: [
              'title', 'content'
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
        Articles.findAll({order: [['published', 'DESC']], limit:9})
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
