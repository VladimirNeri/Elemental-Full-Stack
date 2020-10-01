const mongoose = require('mongoose');

const subSchema = new mongoose.Schema({
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

const Sub = mongoose.model('Sub', subSchema); 

module.exports = Sub; 