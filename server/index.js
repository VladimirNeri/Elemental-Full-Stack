// eslint-disable-next-line no-undef
const express = require('express');
// eslint-disable-next-line no-undef
const path = require('path'); 

const app = express();

// eslint-disable-next-line no-undef
const port = process.env.PORT || 3000;
// eslint-disable-next-line no-undef
const DIST_DIR = path.join(__dirname, '../dist'); 
// eslint-disable-next-line no-undef
const HTML_FILE = path.join(__dirname, '../public/index.html'); 

app.use(express.static(DIST_DIR)); 

app.get('/', (req, res) => {
 res.sendFile(HTML_FILE); 
});

app.listen(port, function () {
 // eslint-disable-next-line no-undef
 console.log('App listening on port: ' + port);
});