const router = require('express').Router();
const subController = require('../../controllers/subController');

router
  .route('/sub')
  .post(subController.create);

module.exports = router;
