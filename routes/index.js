const router = require('express').Router();
const apiRoutes = require('./api');
const path = require('path');

// API Routes
router.use('/api', apiRoutes);

module.exports = router;
