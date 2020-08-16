const mongoose = require('mongoose');
const { Locations } = require('./Locations');

const CheckInItem = mongoose.model('CheckInItem', {
  location: {
    type: Locations.schema,
    required: true,
  },
  time: {
    type: String,
    required: true,
    minlegth: 8,
    trim: true,
  },
});

module.exports = { CheckInItem };
