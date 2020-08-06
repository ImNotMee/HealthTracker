'use strict';
const { mongoose } = require('../db/mongoose');
mongoose.set('bufferCommands', false);
const { ReminderItem } = require('../models/ReminderItem');
//const { Reminder } = require('../models/Reminders');
const { User } = require('../models/User');
const { mongoChecker, isMongoError } = require('../db/utils');
const express = require('express');
const router = express.Router();

const log = console.log;

/**
 * Add a reminders of a category to user of current session
 */
router.post('/add', mongoChecker, (req, res) => {
  const { id, category, subCategory, name, time, note, status } = req.body;
  User.findById(req.session.user_id)
    .then((user) => {
      const reminderItem = new ReminderItem({
        id, // TODO: overwrite _id instead of making a duplicate
        category,
        subCategory,
        name,
        time,
        note,
        status,
      });
      user.reminders[category].push(reminderItem);
      return user;
    })
    .then((user) => {
      user
        .save()
        .then((result) => {
          log('New user reminder created\n', result);
          res.status(200).send({ user: result });
        })
        .catch((error) => {
          if (isMongoError(error)) {
            log('Internal server error saving new resturant:\n', error);
            res.status(500).send('Internal server error');
          } else {
            log('Bad request:\n', error);
            res.status(400).send('Bad Request');
          }
        });
    })
    .catch((e) => {
      log('Cannot find user\n', e);
      res.status(500).send('Cannot find user');
    });
});

module.exports = router;
