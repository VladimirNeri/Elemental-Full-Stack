const express = require('express');
const app = express();
const routes = require('./routes');
const path = require('path');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const passport = require('./config/passport');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const MongoDBStore = require('connect-mongodb-session')(session);
const db = mongoose.connection;
const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');

// Serve up static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(
  session({
    secret: process.env.SECRET,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7, // 1 week
    },
    store: new MongoDBStore({ mongooseConnection: db }),
    resave: true,
    saveUninitialized: true,
  })
);
app.use(cookieParser(process.env.SECRET));
app.use(passport.initialize());
app.use(passport.session());
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
