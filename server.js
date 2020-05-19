const express = require('express')
const cors = require('cors')
const uuid = require('uuid')
const morgan = require('morgan')
const Articles = require('./models').Article
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('61c9060ada974bcc90dcc341096b3f18');
const path = require('path')
const articles = require('./routes/articles')
const app = express()

app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

newsapi.v2.everything({
    q: 'cryptocurrency',
    language: 'en',
  }).then(response => {
        response.articles.forEach(res => {
            let article = {
                id:uuid.v4(),
                source:res.source.name,
                author:res.author,
                title:res.title,
                description:res.description,
                url:res.url,
                image:res.urlToImage,
                published:res.publishedAt,
                content:res.content,
                createdAt: new Date(),
                updatedAt: new Date()
        } 
        Articles.create(article)
            .then(() => {
                console.log('added article')
            })
            .catch(err => {
                console.log(err)     
            })
    })
  }).catch(err => {
      console.log(err)
  })

setInterval(() => {
    newsapi.v2.everything({
        q: 'cryptocurrency',
        language: 'en',
      }).then(response => {
        response.article.forEach(res => {
            let article = {
                id:uuid.v4(),
                source:res.source.name,
                author:res.author,
                title:res.title,
                description:res.description,
                url:res.url,
                image:res.urlToImage,
                published:res.publishedAt,
                content:res.content,
                createdAt: new Date(),
                updatedAt: new Date()
            } 
            Articles.create(article)
                .then(() => {
                    console.log('added new article')
                })
                .catch(() => {
                    console.log('failed to add article')     
                })
        })
      })
      .catch(err => {
          console.log(err)
      })
},3600000)

app.use('/api/articles', articles)

//static build folder
app.use(express.static(path.join(__dirname, 'client', 'build')))

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

// Error handlers - for not found, and app errors 
app.use(function(req, res, next){
    res.status(404).send('Not found')
})

app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Server error')
})

// Start server running 
var server = app.listen(process.env.PORT || 4000, function() {
    console.log('app running on port', server.address().port)
})
