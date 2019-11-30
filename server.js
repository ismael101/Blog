const express = require('express')
const cors = require('cors')
const articleRoutes = require('./routes/articles')
const morgan = require('morgan')
const app = express()
const path = require('path')

app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

app.use('/images', express.static('images/'))
app.use('/articles',articleRoutes)

app.use(express.static(path.join(__dirname, 'client', 'dist')))

app.use((req,res,next) => {
    res.status(400).json('Not Found')
})

app.use((err,req,res,next) => {
    console.error(err.stack)
    res.status(500).json(err)
})

let server = app.listen(process.env.PORT || 5000, () => {
    console.log(`server running on port ${server.address().port}`)
})
