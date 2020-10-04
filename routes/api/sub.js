const express = require('express');
const router = express.Router();
const subController = require('../../controllers/subcontroller');

router.route('/').post(subController.create);

module.exports = router;
