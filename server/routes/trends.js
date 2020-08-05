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
  const name = req.body.activeUser;
  User.findOne({email: name}).then((data) => {
    let weightArr = data.trends.weight.slice(data.trends.weight.length - 8,  data.trends.weight.length - 1);
    res.send({weight: weightArr});
  }).catch((e) => {
    res.status(404).send('Cannot find weight data');
  });
});

router.get('/sleep', (req, res) => {
  const name = req.body.activeUser;
  User.findOne({email: name}).then((data) => {
    let sleepArr = data.trends.sleep;
    res.send({sleep: sleepArr});
  }).catch((e) => {
    res.status(404).send('Cannot find sleep data');
  });
});

router.get('/calories', (req, res) => {
  const name = req.body.activeUser;
  User.findOne({email: name}).then((data) => {
    let caloriesArr = data.trends.calories;
    res.send({calories: caloriesArr});
  }).catch((e) => {
    res.status(404).send('Cannot find calories data');
  });
});

router.get('/stress', (req, res) => {
  const name = req.body.activeUser;
  User.findOne({email: name}).then((data) => {
    let sleepArr = data.trends.sleep;
    res.send({sleep: sleepArr});
  }).catch((e) => {
    res.status(404).send('Cannot find sleep data');
  });
});


// Setting data to trends
router.post('/updateWeight', (req, res) => {
  const val = req.body.value;
  const name = req.body.activeUser;

  User.findOneAndUpdate({email: name}, {"$push": { "trends.weight" : val}},{new: true}).then((user) => {
    if (!user) {
      res.status(404).send();
    } else {
      res.send({"updated": user.trends.weight});
    }
  }).catch((e) => {
    res.status(404).send('Cannot find data');
  });
});

router.post('/updateSleep', (req, res) => {
  const val = req.body.value;
  const name = req.body.activeUser;

  User.findOneAndUpdate({email: name}, {"$push": { "trends.sleep" : val}},{new: true}).then((user) => {
    if (!user) {
      res.status(404).send();
    } else {
      res.send({"updated": user.trends.sleep});
    }
  }).catch((e) => {
    res.status(404).send('Cannot find data');
  });
});
router.post('/updateStress', (req, res) => {
  const val = req.body.value;
  const name = req.body.activeUser;

  User.findOneAndUpdate({email: name}, {"$push": { "trends.stress" : val}},{new: true}).then((user) => {
    if (!user) {
      res.status(404).send();
    } else {
      res.send({"updated": user.trends.stress});
    }
  }).catch((e) => {
    res.status(404).send('Cannot find data');
  });
});
router.post('/updateCalories', (req, res) => {
  const val = req.body.value;
  const name = req.body.activeUser;

  User.findOneAndUpdate({email: name}, {"$push": { "trends.calories" : val}},{new: true}).then((user) => {
    if (!user) {
      res.status(404).send();
    } else {
      res.send({"updated": user.trends.calories});
    }
  }).catch((e) => {
    res.status(404).send('Cannot find data');
  });
});



module.exports = router;
