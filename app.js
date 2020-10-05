const express = require('express');
const app = express();
const subRoutes = require('./routes/sub');

// Configure body parsing for AJAX requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.use((req, res, next) => {
  // console.log('Hello from the middleware 👋');
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// 3) ROUTES
app.use('/api/sub', subRoutes);

app.use(function (req, res) {
  res.sendFile(path.join(__dirname, './client/build/index.html'));
});

module.exports = app;