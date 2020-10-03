const path = require('path');
const router = require('express').Router();
const subRoutes = require('./sub');
const postRoutes = require('./post');

// API Routes
router.use('/sub', subRoutes);
router.use('/post', postRoutes);

// If no API routes are hit, send the React app
router.use(function (req, res) {
  res.sendFile(path.join(__dirname, '../../client/build/index.html'));
});

module.exports = router;
