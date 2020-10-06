const express = require('express');
const router = express.Router();
const subController = require('../controllers/subcontroller');
const app = express();

app.post('/', subController.create);

module.exports = router;
