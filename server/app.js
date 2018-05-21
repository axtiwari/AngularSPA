const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())


// points express() to the individual routes  files
var posts = require('./routes/posts.js');
app.use('/posts', posts);


// SERVER
app.listen(process.env.PORT || 8081)
