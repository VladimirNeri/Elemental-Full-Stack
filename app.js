const express = require('express');
const app = express();
const router = express.Router()
const routes = require('./routes');
const path = require('path'); 
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

const subController = require('./controllers/subcontroller');

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
app.use('/api/sub', router)

router.post(subController.create);

app.use('/', (req, res) => {
  res.sendFile(path.join(__dirname, './client/build/index.html'));
});

module.exports = app;
