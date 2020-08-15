'use strict';
const { mongoose } = require('../db/mongoose');
mongoose.set('bufferCommands', false);
const { Locations } = require('../models/Locations');
const { ObjectID } = require('mongodb');
const { mongoChecker, isMongoError } = require('../db/utils');
const express = require('express');
const router = express.Router();

const log = console.log;

/**
 * Add a location to db
 */
router.get('/all', mongoChecker, (req, res) => {
  Locations.find({})
    .then((locations) => {
      res.status(200).send({ locations });
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
});

/**
 * Add a location to db
 */
router.post('/add', mongoChecker, (req, res) => {
  const {
    name,
    isAvaliable,
    address,
    country,
    imageUrl,
    maxOccupancy,
    currOccupancy,
    description,
  } = req.body;

  const location = new Locations({
    name,
    isAvaliable,
    address,
    country,
    imageUrl,
    maxOccupancy,
    currOccupancy,
    description,
  });

  location
    .save()
    .then((result) => {
      log('New location created\n', result);
      res.status(200).send({ newLoc: result });
    })
    .catch((error) => {
      if (isMongoError(error)) {
        log('Internal server error saving new location:\n', error);
        res.status(500).send('Internal server error');
      } else {
        log('Bad request:\n', error);
        res.status(400).send('Bad Request');
      }
    });
});

/**
 * Remove a locations from db
 */
router.delete('/delete/:l_id', mongoChecker, (req, res) => {
  const lid = req.params.l_id;

  if (!ObjectID.isValid(lid)) {
    res.status(404).send('Resource not found');
    return;
  }

  Locations.findByIdAndDelete(lid)
    .then((result) => {
      if (!result) {
        res.status(404).send('Location not found');
      } else {
        res.status(200).send({ deletedLocation: result });
      }
    })
    .catch((error) => {
      log(error);
      if (isMongoError(error)) {
        res.status(500).send('Internal server error');
      } else {
        log(error);
        res.status(400).send('Bad Request');
      }
    });
});

/**
 * Update status of a reminder of a category for user
 * of current session using the reminder's id
 */
router.put('/update/:l_id/', mongoChecker, (req, res) => {
  const lid = req.params.l_id;
  if (!ObjectID.isValid(lid)) {
    res.status(404).send('Resource not found');
    return;
  }

  const { newLocation } = req.body;

  Locations.findByIdAndUpdate(lid, newLocation, { new: true, useFindAndModify: false })
    .then((location) => {
      if (!location) {
        res.status(404).send('Location not found');
      } else {
        res.send({ updatedLocation: location });
      }
    })
    .catch((error) => {
      log(error);
      if (isMongoError(error)) {
        res.status(500).send('Internal server error');
      } else {
        log(error);
        res.status(400).send('Bad Request');
      }
    });
});

module.exports = router;
