const express = require('express');
const app = express();
const routes = require('./routes');
const path = require('path');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const bodyParser = require('body-parser');
const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');

// Serve up static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  console.log('Hello from the middleware 👋');
  next();
});
// 3) ROUTES
app.use(routes);
app.all('*', (req, res, next) => {
  next(new AppError(`Can't find the ${req.originalUrl} on this server`, 404));
});
app.use(globalErrorHandler);

app.use('/', (req, res) => {
  res.sendFile(path.join(__dirname, './client/build/index.html'));
});

module.exports = app;
