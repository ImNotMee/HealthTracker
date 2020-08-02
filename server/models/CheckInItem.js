const mongoose = require('mongoose');

const CheckInItem = mongoose.model('CheckInItem', {
  location: {
    type: String,
    required: true,
    minlegth: 1,
    trim: true,
  },
  time: {
    type: String,
    required: true,
    minlegth: 10,
    trim: true,
  },
});

module.exports = { CheckInItem };
