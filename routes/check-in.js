'use strict';
const { mongoose } = require('../db/mongoose');
mongoose.set('bufferCommands', false);
const { Locations } = require('../models/Locations');
const { CheckInItem } = require('../models/CheckInItem');
const { User } = require('../models/User');
const { isMongoError } = require('../db/utils');
const Constants = require('../constants');
const { authenticate } = require("../utils.js");
const express = require('express');
const router = express.Router();
const log = console.log;

const _isAvaliable = (location) => {
  return location.maxOccupancy > location.currOccupancy;
};

/**
 * checkin user
 */
router.patch('/checkin/:l_id',authenticate, (req, res) => {
  const lid = req.params.l_id;

  User.findById(req.session.user_id)
    .then((user) => {
      log('USERER', user, req.session.user_id);
      Locations.findById(lid)
        .then((loc) => {
          log('Check-in location \n', loc);
          loc.currOccupancy += 1;
          loc.isAvaliable = _isAvaliable(loc);
          const checkInItem = new CheckInItem({ location: loc, time: new Date().toISOString() });
          user.checkInHistory.push(checkInItem);
          user.checkedInLocation = loc;
          return { user, loc };
        })
        .then(({ user, loc }) => {
          user
            .save()
            .then((result) => {
              loc
                .save()
                .then((resultLoc) => {
                  log('User checked-in\n', result, resultLoc);
                  res.status(200).send({ user: result, location: resultLoc });
                })
                .catch((error) => {
                  if (isMongoError(error)) {
                    log('Internal server error updating lcoation when checking in user:\n', error);
                    res.status(500).send('Internal server error updating location');
                  } else {
                    log('Bad request:\n', error);
                    res.status(400).send('Bad Request for location ');
                  }
                });
            })
            .catch((error) => {
              if (isMongoError(error)) {
                log('Internal server error checking in user:\n', error);
                res.status(500).send('Internal server error');
              } else {
                log('Bad request:\n', error);
                res.status(400).send('Bad Request for user');
              }
            });
        })
        .catch((error) => {
          if (isMongoError(error)) {
            log('Internal server error checking-in user:\n', error);
            res.status(500).send('Internal server error updating user');
          } else {
            log('Bad request:\n', error);
            res.status(400).send('Bad Request given');
          }
        });
    })
    .catch((error) => {
      log(error);
      res.status(500).send('Internal Server Error');
    });
});

/**
 * checkout user
 */
router.patch('/checkout/:l_id',authenticate, (req, res) => {
  const lid = req.params.l_id;
  User.findById(req.session.user_id)
    .then((user) => {
      log('USER CHECKOUT', user, req.session.user_id);
      Locations.findById(lid)
        .then((loc) => {
          log('Check-in location \n', loc);
          loc.currOccupancy -= 1;
          loc.isAvaliable = _isAvaliable(loc);
          user.checkedInLocation = undefined;
          return { user, loc };
        })
        .then(({ user, loc }) => {
          user
            .save()
            .then((result) => {
              loc
                .save()
                .then((resultLoc) => {
                  log('User checked-out\n', result, resultLoc);
                  res.status(200).send({ user: result, location: resultLoc });
                })
                .catch((error) => {
                  if (isMongoError(error)) {
                    log('Internal server error updating lcoation when checking out user:\n', error);
                    res.status(500).send('Internal server error updating location during checkout');
                  } else {
                    log('Bad request:\n', error);
                    res.status(400).send('Bad Request for location during checkout ');
                  }
                });
            })
            .catch((error) => {
              if (isMongoError(error)) {
                log('Internal server error checking out user:\n', error);
                res.status(500).send('Internal server error');
              } else {
                log('Bad request:\n', error);
                res.status(400).send('Bad Request for user');
              }
            });
        })
        .catch((error) => {
          if (isMongoError(error)) {
            log('Internal server error checking-out user:\n', error);
            res.status(500).send('Internal server error updating user when checkout');
          } else {
            log('Bad request:\n', error);
            res.status(400).send('Bad Request given');
          }
        });
    })
    .catch((error) => {
      log(error);
      res.status(500).send('Internal Server Error');
    });
});

module.exports = router;
