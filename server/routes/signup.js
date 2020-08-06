'use strict';
const { mongoose } = require('../db/mongoose');
mongoose.set('bufferCommands', false);
const { Login } = require('../models/Login');
const { Trends } = require('../models/Trends');
const { Reminders } = require('../models/Reminders');
const { User } = require('../models/User');
const { isMongoError } = require('../db/utils');
const Constants = require('../constants');
const express = require('express');
const router = express.Router();
const log = console.log;

/**
 * Login user
 */
router.post('/signup', (req, res) => {
  const { firstName, lastName, email, password, sex } = req.body;
  const user = createNewUser(req.body);
  const login = createNewLogin(req.body);

  user
    .save()
    .then((result) => {
      log('New user added in DB', result);
      const activeUser = { email: login.email, type: user.type };
      req.session.activeUser = activeUser;
      req.session.user_id = result._id;
      return activeUser;
    })
    .then((activeUser) => {
      login
        .save()
        .then((result) => {
          log('New login added in DB', result);
          req.session.login_id = login._id;
          res.status(200).send({ activeUser: activeUser });
        })
        .catch((error) => {
          if (isMongoError(error)) {
            log('Internal server error saving new user:\n', error);
            res.status(500).send('Internal server error');
          } else {
            log('Bad request:\n', error);
            res.status(400).send('Bad Request');
          }
        });
    })
    .catch((error) => {
      if (isMongoError(error)) {
        log('Internal server error saving new user:\n', error);
        res.status(500).send('Internal server error');
      } else {
        log('Bad request:\n', error);
        res.status(400).send('Bad Request');
      }
    });
});

const createNewUser = ({ firstName, lastName, email, sex }) => {
  const trends = new Trends({
    weight: [],
    sleep: [],
    calories: [],
    stress: [],
  });

  // to do add card data 
  let reminders = new Reminders({
    [Constants.HEALTH_CATEGORIES.medical]: [],
    [Constants.HEALTH_CATEGORIES.mental]: [],
    [Constants.HEALTH_CATEGORIES.phsycial]: [],
  });

  let user = new User({
    firstName: firstName,
    lastName: lastName,
    sex: sex,
    email: email,
    type: Constants.ACCOUNT_TYPES.user,
    timers: [],
    checkedInLocation: '',
    checkInHistory: [],
    reminders: reminders,
    trends: trends,
  });

  return user;
};

const createNewLogin = ({ email, password }) => {
  const login = new Login({ email, password });
  return login;
};

module.exports = router;
