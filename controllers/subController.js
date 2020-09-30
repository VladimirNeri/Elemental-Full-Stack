const Subscriber = require('./../models/subModel');

exports.createSub = async (req, res) => {
  try {
    const newSubscriber = await Subscriber.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        subscriber: newSubscriber,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

