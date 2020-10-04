const express = require('express');
const router = express.Router();
const subController = require('../../controllers/subcontroller');

router.post('/sub', subController.create);

module.exports = router;
