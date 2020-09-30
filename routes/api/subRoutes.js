const router = require('express').Router();
const subController = require('../../controllers/subController');

router
  .route('/subscribers')
  .post(subController.createSub);

module.exports = router;
