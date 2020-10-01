const db = require('../models');

module.exports = {
  create: function (req, res) {
    db.Sub.create(req.body)
    .then((dbSub) => res.json(dbSub))
    .catch((err) => res.status(422).json(err));
  },
};

