
/* Required External Modules */
const express = require('express');
const path = require('path'); 

const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');


/* App Variables */
const app = express();
const config = require('./webpack.config.js');
const compiler = webpack(config);
const port = process.env.PORT || 3000;

const HTML_FILE = path.join(__dirname, './public/index.html'); 

app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
}));

/* App Configuration */
app.use(express.static(path.join(__dirname, './dist')));

/* Routes Definitions */
app.get('/', (req, res) => {
  res.sendFile(HTML_FILE); 
 });

/* Server Activation */
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
})









