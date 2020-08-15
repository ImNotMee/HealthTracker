/* User mongoose model */
const mongoose = require('mongoose');
const validator = require('validator');

const { Locations } = require('./Locations');
const { Reminders } = require('./Reminders');
const { CheckInItem } = require('./CheckInItem');
const { Trends } = require('./Trends');

const User = mongoose.model('User', {
  firstName: {
    type: String,
    required: true,
    minlegth: 1,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    minlegth: 1,
    trim: true,
  },
  sex: {
    type: String,
    enum: ['male', 'female'],
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    minlegth: 1,
    trim: true,
    unique: true,
    // TODO: fix validation
  },
  type: {
    type: String,
    enum: ['user', 'admin'],
    required: true,
    trim: true,
  },
  timers: {
    type: [Number],
    required: true,
  },
  checkedInLocation: {
    type: Locations.schema,
    required: false,
  },
  checkInHistory: {
    type: [CheckInItem.schema],
    required: true,
  },
  reminders: {
    type: Reminders.schema,
    required: true,
  },
  trends: {
    type: Trends.schema,
    required: false,
  },
});

module.exports = { User };
