const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const path = require('path')
const articles = require('./routes/articles')
const app = express()

app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

app.use('/images', express.static('images/'));

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
