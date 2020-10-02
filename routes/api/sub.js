const express = require('express');
const router = express.Router();
const path = require('path');
const subController = require(path.join(__dirname, '../../controllers/subcontroller'));

router
  .route('/')
  .post(subController.create);

module.exports = router;
