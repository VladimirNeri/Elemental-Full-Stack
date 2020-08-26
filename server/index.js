const express = require('express');
const mongoose = require('mongoose'); 
const bodyParser = require('body-parser'); 
const path = require('path'); 

// const posts = require('../src/data/posts');

const app = express();

// Bodyparser Middleware
app.use(bodyParser.json())

const port = process.env.PORT || 3000;

const DIST_DIR = path.join(__dirname, '../dist'); 
const HTML_FILE = path.join(__dirname, '../public/index.html'); 

app.use(express.static(DIST_DIR)); 

app.get('/', (req, res) => {
 res.sendFile(HTML_FILE); 
});

// Use routes
// app.use('/posts', posts)

app.listen(port, function () {
 console.log('App listening on port: ' + port);
});