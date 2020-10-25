const mongoose = require('mongoose');
const validator = require('validator');
var bcrypt   = require('bcryptjs');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    min: [1, 'Too few characters'],
    max: 100,
    required: [true, 'Please enter a username.'],
  },
  email: {
    type: String,
    min: [3, 'Please enter an email in the correct format'],
    required: [true, 'Please enter an email'],
  },
  password: {
    type: String,
    min: [8, 'Your password must be at least 8 characters large'],
    required: [true, 'Please enter a password.'],
  },
});
// methods ======================
// generating a hash
userSchema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};

const User = mongoose.model('User', userSchema);

module.exports = User;