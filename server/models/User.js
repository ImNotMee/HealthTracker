/* User mongoose model */
const mongoose = require('mongoose');
const validator = require('validator');

const { Reminders } = require('./Reminders');
const { CheckInItem } = require('./CheckInItem');
const { Trends } = require('./Trends');
const { CardData } = require('./CardData');

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
    /** 
    validate: {
      validator: validator.isEmail, // custom validator
      message: 'Not valid email',
    },*/
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
    type: String,
    required: false,
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
  user_card: {
      type: CardData.schema,
      required: false,
    },
  trends: {
    type: [CardData.schema],
    required: false,
  }
});

module.exports = { User };
