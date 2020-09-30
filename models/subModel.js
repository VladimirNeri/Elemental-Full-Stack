const mongoose = require('mongoose');

const subscriberSchema = new mongoose.Schema({
  firstname: {
    type: String, 
    required: true
  },
  lastname: {
    type: String, 
    required: true
  }, 
  email: {
    type: String, 
    unique: true,
    required: [true, 'You must have an email']
  }
});

const Subscriber = mongoose.model('Subscriber', subscriberSchema); 

module.exports = Subscriber; 