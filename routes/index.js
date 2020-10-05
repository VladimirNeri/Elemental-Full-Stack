const express = require('express');
const router = express.Router();
const path = require('path');
const apiRoutes = require('./api');

// // API Routes -- crashes here if no api routes are connected
router.use('/api', apiRoutes);

// If no API routes are hit, send the React app
router.use(function (req, res) {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

module.exports = router;
