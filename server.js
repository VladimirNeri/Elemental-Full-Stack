/* Required External Modules */
const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
// const routes = require('./routes');
const subRoutes = require('./routes/api/sub')
const app = express();

dotenv.config({ path: './config.env' });
const PORT = process.env.PORT || 8000;

// Configure body parsing for AJAX requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

// Add routes, both API and view
app.use('/api', subRoutes);
// router.use('/api/post', postRoutes);

app.use(function (req, res) {
  res.sendFile(path.join(__dirname, './client/build/index.html'));
});

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);
mongoose
  .connect(DB, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log('DB connection successful'));

// Start the API server
app.listen(PORT, () =>
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
);
