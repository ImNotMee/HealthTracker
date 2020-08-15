'use strict';
const { mongoose } = require('../db/mongoose');
mongoose.set('bufferCommands', false);
const { Login } = require('../models/Login');
//const { Trends } = require('../models/Trends');
const { Locations } = require('../models/Locations');
const { Reminders } = require('../models/Reminders');
const { User } = require('../models/User');
const { CardData } = require('../models/CardData')
const { isMongoError } = require('../db/utils');
const Constants = require('../constants');
const express = require('express');
const router = express.Router();
const log = console.log;

/**
 * Login user
 */
router.post('/signup', (req, res) => {
    User.findOne({ email: req.body.email }).then((user) => {
        if (!user) {
            const user = createNewUser(req.body.firstName, req.body.lastName, req.body.email, req.body.password, req.body.sex);
            const login = createNewLogin(req.body);
            user.save()
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
                            Locations.find({})
                                .then((locations) => {
                                    log('All locations \n', locations);
                                    res.status(200).send({ activeUser: user, locations });
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
        }
        else {
            res.status(404).send('user email already exists')
        }
    }).catch((error) => {
        if (isMongoError(error)) {
            log('Internal server error saving new user:\n', error);
            res.status(500).send('Internal server error');
        } else {
            log('Bad request:\n', error);
            res.status(400).send('Bad Request');
        }
    });
});

const createNewUser = (firstName, lastName, email, password, sex ) => {
  
  // to do add card data 
  let reminders = new Reminders({
    [Constants.HEALTH_CATEGORIES.medical]: [],
    [Constants.HEALTH_CATEGORIES.mental]: [],
    [Constants.HEALTH_CATEGORIES.phsycial]: [],
  });

  const defaultCard = new CardData({
    BMI: {
      // need to take previous data
      value: 0,
      height: 0,
      weight: 0,
      unit: 'metric', // metric and standard
      streak: false,
    },
    Water: {
      completed: 0,
      remaining: 2000,
      unit: 'ml',
      streak: false,
    },
    Calories: {
      completed: 0,
      remaining: 2000,
      unit: 'calories',
      streak: false,
    },
    Mood: {
      value: 'happy',
      streak: false,
    },
    Sleep: {
      hours: 0,
      quality: 'Good', // 3 levels bad, okay, good
      streak: false,
    },
    Stress: {
      value: 1,
      streak: false,
    },
    Sickness: [],
  });

  let user = new User({
    firstName: firstName,
    lastName: lastName,
    hash: email + password,
    sex: sex,
    email: email,
    type: Constants.ACCOUNT_TYPES.user,
    timers: [],
    checkedInLocation: '',
    checkInHistory: [],
    notification: [],
    reminders: reminders,
    trends: [],
    user_card: defaultCard,
  });
  return user;
};

const createNewLogin = ({ email, password }) => {
  const login = new Login({ email, password });
  return login;
};

module.exports = router;
