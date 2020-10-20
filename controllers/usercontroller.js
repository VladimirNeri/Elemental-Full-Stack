const User = require('../models/usermodel');

exports.create = async (req, res) => {
  try {
    const Users = await User.create(req.body);
    res.status(201).json({
      status: 'success',
      data: {
        Users
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
}
