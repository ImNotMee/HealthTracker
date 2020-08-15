'use strict';
const { mongoose } = require('../db/mongoose');
mongoose.set('bufferCommands', false);
const { Notification } = require('../models/Notification');
const { User } = require('../models/User');
const { isMongoError } = require('../db/utils');
const Constants = require('../constants');
const express = require('express');
const router = express.Router();
const log = console.log;

/**
 * Add new notificaiton to user
 */
router.patch('/alert-by-loc-history', (req, res) => {
  const { location, type, title, message } = req.body;
  const newNotif = new Notification({ type, title, message });
  const limitDate = new Date();
  limitDate.setDate(limitDate.getDate() + 14);

  User.find({ type: 'user' })
    .then(async (users) => {
      console.log('USERS MATCH', users);
      const resUsers = await users
        .filter(async (user) => {
          return (
            (await user.checkInHistory.filter((loc) => {
              return loc.location.name === location.name && new Date(loc.time) < limitDate;
            }).length) > 0
          );
        })
        .map(async (user) => {
          user.notifications.push(newNotif);
          await user
            .save()
            .then(console.log('Alert Sent'))
            .catch((error) => {
              if (isMongoError(error)) {
                log('Internal server error alerting user:\n', error);
                res.status(500).send('Internal server error');
              } else {
                log('Bad request:\n', error);
                res.status(400).send('Bad Request for alerting user');
              }
            });
          return user;
        });
      return resUsers;
    })
    .then((resUsers) => {
      res.status(200).send({ count: resUsers.length });
    })
    .catch((error) => {
      log(error);
      res.status(500).send('Internal Server Error');
    });
});

/**
 * Add new notificaiton to user
 */
router.patch('/add', (req, res) => {
  User.findById(req.session.user_id)
    .then((user) => {
      const { type, title, message } = req.body;
      const newNotif = new Notification({ type, title, message });
      user.notifications.push(newNotif);
      user
        .save()
        .then((result) => {
          res.status(200).send({ user: result });
        })
        .catch((error) => {
          if (isMongoError(error)) {
            log('Internal server error adding notification to user:\n', error);
            res.status(500).send('Internal server error');
          } else {
            log('Bad request:\n', error);
            res.status(400).send('Bad Request for user');
          }
        });
    })
    .catch((error) => {
      log(error);
      res.status(500).send('Internal Server Error');
    });
});

router.patch('/remove', (req, res) => {
  User.findById(req.session.user_id)
    .then((user) => {
      const notif = user.notifications.id(req.body._id);
      notif.remove();
      user
        .save()
        .then((result) => {
          res.status(200).send({ user: result });
        })
        .catch((error) => {
          if (isMongoError(error)) {
            log('Internal server error removeing notification from user:\n', error);
            res.status(500).send('Internal server error');
          } else {
            log('Bad request:\n', error);
            res.status(400).send('Bad Request for user');
          }
        });
    })
    .catch((error) => {
      log(error);
      res.status(500).send('Internal Server Error');
    });
});

module.exports = router;
