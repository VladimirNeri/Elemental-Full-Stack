const db = require('../models/submodel');

module.exports = {
  create: function (req, res) {
    db.Subscriber.create(req.body)
    .then((dbSub) => res.json(dbSub))
    .catch((err) => res.status(422).json(err));
  },
};

