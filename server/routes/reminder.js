'use strict';
const { mongoose } = require('../db/mongoose');
mongoose.set('bufferCommands', false);
const { ReminderItem } = require('../models/ReminderItem');
//const { Reminder } = require('../models/Reminders');
const { User } = require('../models/User');
const { mongoChecker, isMongoError } = require('../db/utils');
const { authenticate } = require('../utils');
const express = require('express');
const router = express.Router();

const log = console.log;

/**
 * Add a reminders of a category to user of current session
 */
router.post('/add', mongoChecker,authenticate, (req, res) => {
  const { id, category, subCategory, name, time, note, status } = req.body;
  console.log(req.user);
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
          log('New reminder created\n', result);
          res.status(200).send({ user: result });
        })
        .catch((error) => {
          if (isMongoError(error)) {
            log('Internal server error saving new reminder:\n', error);
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

/**
 * Remove a reminder of a category for user of current session
 * using the reminder's id
 */
router.delete('/:cat/:r_id', mongoChecker,authenticate, (req, res) => {
  const cat = decodeURI(req.params.cat);
  const rid = req.params.r_id;
  User.findById(req.session.user_id)
    .then(async (user) => {
      const reminder = await user.reminders[cat].filter((rem) => {
        if (rem.id === rid) {
          return true;
        }
      })[0];
      await reminder.remove();
      return user;
    })
    .then((user) => {
      user
        .save()
        .then((result) => {
          log('Old reminder deleted\n', result);
          res.status(200).send({ user: result });
        })
        .catch((error) => {
          if (isMongoError(error)) {
            log('Internal server error saving deleting reminder:\n', error);
            res.status(500).send('Internal server error');
          } else {
            log('Bad request:\n', error);
            res.status(400).send('Bad Request');
          }
        });
    })
    .catch((error) => {
      log(error);
      res.status(500).send('Internal Server Error');
    });
});

/**
 * Update status of a reminder of a category for user
 * of current session using the reminder's id
 */
router.patch('/update/:cat/:r_id/', mongoChecker,authenticate,(req, res) => {
  const cat = decodeURI(req.params.cat);
  const rid = req.params.r_id;
  const { newReminder } = req.body;

  User.findById(req.session.user_id)
    .then(async (user) => {
      const reminders = user.reminders[cat];
      const index = await reminders.map((rem, i) => {
        if (rem.id === rid) {
          return i;
        }
      })[0];
      user.reminders[cat][index] = newReminder;
      return user;
    })
    .then((user) => {
      user
        .save()
        .then((result) => {
          log('Original reminder updated\n', result);
          res.status(200).send({ user: result });
        })
        .catch((error) => {
          if (isMongoError(error)) {
            log('Internal server error updating reminder:\n', error);
            res.status(500).send('Internal server error');
          } else {
            log('Bad update request:\n', error);
            res.status(400).send('Bad Request');
          }
        });
    })
    .catch((error) => {
      log(error);
      res.status(500).send('Internal Server Error');
    });
});

module.exports = router;
