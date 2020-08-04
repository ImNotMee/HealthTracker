'use strict';
const { mongoose } = require('../db/mongoose');
mongoose.set('bufferCommands', false);
const { Login } = require('../models/Login');
const { User } = require('../models/User');
const express = require('express');
const router = express.Router();
const log = console.log;

/**
 * Login user
 */
router.post('/login', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  Login.findByEmailPassword(email, password)
    .then((login) => {
      req.session.login_id = login._id;
      return login;
    })
    .then((login) => {
      User.findOne({ email: login.email })
        .then((user) => {
          const activeUser = { email: login.email, type: user.type };
          req.session.activeUser = activeUser;
          req.session.user_id = user._id;
          console.log(activeUser);
          res.send({ activeUser: activeUser });
        })
        .catch((e) => {
          res.status(500).send('Cannot find user');
        });
    })
    .catch((e) => {
      res.status(400).send('Invalid login');
    });
});

/**
 * Logout user
 */
router.get('/logout', (req, res) => {
  // destory the session
  req.session.destroy((error) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.send();
    }
  });
});

/**
 * User session id
 */
router.get('/session', (req, res) => {
  if (req.session.activeUser) {
    res.send({ activeUser: req.session.activeUser });
  } else {
    res.status(401).send('No valid session found');
  }
});

module.exports = router;
