/* User mongoose model */
const mongoose = require('mongoose');

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
    match: '/^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/',
    minlegth: 1,
    trim: true,
  },
  type: {
    type: String,
    enum: ['male', 'female'],
    required: true,
    trim: true,
  },
  timers: {
    type: [Number],
    required: true,
  },
  checkedInLocation: {
    type: String,
    required: true,
    minlegth: 1,
    trim: true,
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
