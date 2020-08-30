/* Required External Modules */
const express = require('express');
const path = require('path'); 

const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

/* App Variables */
const app = express();
const config = require('../webpack.config.js');
const compiler = webpack(config);
const port = process.env.PORT || 3000;

/* App Configuration */
app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
}));
// Serving static files
app.use(express.static(path.join(__dirname, './dist')));

/* Routes Definitions */
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

/* Server Activation */
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});









