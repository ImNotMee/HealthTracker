'use strict';
const { mongoose } = require('../db/mongoose');
mongoose.set('bufferCommands', false);
const { Trends } = require('../models/Trends');
const { User } = require('../models/User');
const express = require('express');
const router = express.Router();
const log = console.log;

// Get data routes
router.get('/weight', (req, res) => {
  const name = "user"
  User.find({email: name}).then((data) => {
    // need to change later
    let weightArr = data[0].trends.weight;
    res.send({weight: weightArr});
  }).catch((e) => {
    res.status(500).send('Cannot find weight data');
  });
});

router.get('/sleep', (req, res) => {
  const name = "user"
  User.find({email: name}).then((data) => {
    // need to change later
    let sleepArr = data[0].trends.sleep;
    res.send({sleep: sleepArr});
  }).catch((e) => {
    res.status(500).send('Cannot find sleep data');
  });
});

router.get('/calories', (req, res) => {
  const name = "user"
  User.find({email: name}).then((data) => {
    // need to change later
    let caloriesArr = data[0].trends.calories;
    res.send({calories: caloriesArr});
  }).catch((e) => {
    res.status(500).send('Cannot find calories data');
  });
});

router.get('/stress', (req, res) => {
  const name = "user"
  User.find({email: name}).then((data) => {
    // need to change later
    let sleepArr = data[0].trends.sleep;
    res.send({sleep: sleepArr});
  }).catch((e) => {
    res.status(500).send('Cannot find sleep data');
  });
});

router.post('/updateWeight', (req, res) => {
  const newWeight = req.body.weight;
});


module.exports = router;
