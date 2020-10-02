const Subscriber = require('../models/submodel');
// const db = require('../models');

// module.exports = {
//   create: function (req, res) {
//     db.Subscriber.create(req.body)
//       .then((dbSub) => res.json(dbSub))
//       .catch((err) => res.status(422).json(err));
//   },
// };

// exports.create = (req, res) => {
//   db.Subscriber.create(req.body)
//     .then((dbSub) => res.json(dbSub))
//     .catch((err) => res.status(422).json(err));
// };

exports.create = async (req, res) => {
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
};
