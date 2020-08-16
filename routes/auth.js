'use strict';
const { mongoose } = require('../db/mongoose');
mongoose.set('bufferCommands', false);
const { Login } = require('../models/Login');
const { Locations } = require('../models/Locations');
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
          req.session.user_id = user._id;
          // TODO: ask ta if we can pull all user data once
          // const activeUser = { email: login.email, type: user.type };
          // req.session.activeUser = activeUser;
          // res.send({ activeUser: activeUser });

          Locations.find({})
            .then(async (locations) => {
              const resLocs = {};
              await locations.forEach((loc) => {
                resLocs[loc.name] = loc;
              });
              //log('All locations \n', resLocs);
              res.status(200).send({ activeUser: user, locations: resLocs });
            })
            .catch((error) => {
              if (isMongoError(error)) {
                log('Internal server error getting all locations:\n', error);
                res.status(500).send('Internal server error');
              } else {
                log('Bad request:\n', error);
                res.status(400).send('Bad Request');
              }
            });
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
  if (req.session.user_id) {
    User.findById(req.session.user_id).then(user => {
      res.send({ activeUser: user });
    });
  } else {
    res.status(401).send('No valid session found');
  }
});

module.exports = router;
