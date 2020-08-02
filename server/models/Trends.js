const mongoose = require('mongoose');

const Trends = mongoose.model('Trends', {
  weight: {
    type: [Number],
    required: false,
  },
  sleep: {
    type: [Number],
    required: false,
  },
  calories: {
    type: [Number],
    required: false,
  },
  stress: {
    type: [Number],
    required: false,
  },
});

module.exports = { Trends };
