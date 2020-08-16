const mongoose = require('mongoose');

const Notification = mongoose.model('Notification', {
  type: {
    type: String,
    required: true,
    minlegth: 1,
    trim: true,
  },
  title: {
    type: String,
    require: true,
    minlegth: 1,
    trim: true,
  },
  message: {
    type: String,
    require: true,
    minlegth: 1,
    trim: true,
  },
});

module.exports = { Notification };
