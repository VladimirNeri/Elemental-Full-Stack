const router = require('express').Router();
const subController = require('../../controllers/subController');

router
  .route('/')
  .post(subController.create);

module.exports = router;
