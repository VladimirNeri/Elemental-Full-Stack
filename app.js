const express = require('express');
const app = express();
const routes = require('./routes');
const path = require('path'); 
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const passport = require("passport");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

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

app.use('/', (req, res) => {
  res.sendFile(path.join(__dirname, './client/build/index.html'));
});

module.exports = app;
