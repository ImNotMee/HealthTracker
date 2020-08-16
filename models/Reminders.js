/* User mongoose model */
const { ReminderItem } = require('./ReminderItem');
const mongoose = require('mongoose');

const Reminders = mongoose.model('Reminders', {
  'Medical Health': {
    type: [ReminderItem.schema],
    required: false,
  },
  'Mental Health': {
    type: [ReminderItem.schema],
    required: false,
  },
  'Physical Health': {
    type: [ReminderItem.schema],
    required: false,
  },
  Tasks: {
    type: [ReminderItem.schema],
    required: false,
  },
});

module.exports = { Reminders };
