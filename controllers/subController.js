const Subscriber = require('../models/submodel');
const catchAsync = require('./../utils/catchAsync');

exports.create = catchAsync(async (req, res) => {
  try {
    const Subscribers = await Subscriber.create(req.body);
    res.status(201).json({
      status: 'success',
      data: {
        Subscribers
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
});