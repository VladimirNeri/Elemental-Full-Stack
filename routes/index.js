const express = require('express');
const router = express.Router();
const subcontroller = require('../controllers/subcontroller');

router
    .route('/sub')
    .post(subcontroller.create);

module.exports = router;
