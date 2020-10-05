const express = require('express');
const subController = require('../controllers/subcontroller');

const router = express.Router();

router.route('/').post(subController.create);

module.exports = router;
