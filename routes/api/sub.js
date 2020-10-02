const router = require('express').Router();
const subcontroller = require('../../controllers/subcontroller');

router
  .route('/')
  .post(subcontroller.create);

module.exports = router;
