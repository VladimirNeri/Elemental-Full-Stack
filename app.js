const express = require('express');
const app = express();
// const subRoutes = require('./routes/sub');
const router = express.Router();
const path = require('path');
const Subscriber = require('./models/submodel');

// Configure body parsing for AJAX requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.use((req, res, next) => {
  console.log('Hello from the middleware 👋');
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  // console.log(req.headers);
  next();
});

// 3) ROUTES
app.route('/api/sub').post(async (req, res) => {
  try {
    const Subscribers = await Subscriber.create(req.body);
    res.status(201).json({
      status: 'success',
      data: {
        Subscribers,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './client/build/index.html'));
});

module.exports = app;
