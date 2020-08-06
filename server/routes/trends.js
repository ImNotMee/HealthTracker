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
  const id = req.session.user_id;
  User.findOne({_id: id}).then((data) => {
    let weightArr = data.trends.weight;
    res.send({weight: weightArr});
  }).catch((e) => {
    res.status(404).send('Cannot get weight trend');
  });
});

router.get('/sleep', (req, res) => {
  const id = req.session.user_id;
  User.findOne({_id: id}).then((data) => {
    let sleepArr = data.trends.sleep;
    res.send({sleep: sleepArr});
  }).catch((e) => {
    res.status(404).send('Cannot get sleep trend');
  });
});

router.get('/calories', (req, res) => {
  const id = req.session.user_id;
  User.findOne({_id: id}).then((data) => {
    let caloriesArr = data.trends.calories;
    res.send({calories: caloriesArr});
  }).catch((e) => {
    res.status(404).send('Cannot get calories trend');
  });
});

router.get('/stress', (req, res) => {
  const id = req.session.user_id;
  User.findOne({_id: id}).then((data) => {
    let sleepArr = data.trends.sleep;
    res.send({sleep: sleepArr});
  }).catch((e) => {
    res.status(404).send('Cannot get stress trend');
  });
});

router.get('/getAll', (req, res) => {
  let weight = [];
  let stress = [];
  let sleep = [];
  let calories = [];
  User.find({type: "user"}).then((data) => {
    data.forEach(user => {
      weight.push(user.trends.weight);
      stress.push(user.trends.stress);
      sleep.push(user.trends.sleep);
      calories.push(user.trends.calories);
    })
  }).then((d) => {
      res.send({weight: weight, stress: stress, sleep: sleep, calories: calories});
  }).catch((e) => {
    res.status(404).send('Cannot find all user data for trends');
  });
});

// Adding user data to trends
router.post('/updateWeight', (req, res) => {
  const val = req.body.value;
  const id = req.session.user_id;

  User.findOneAndUpdate({_id: id}, {"$push": { "trends.weight" : val}},{new: true}).then((user) => {
    if (!user) {
      res.status(404).send();
    } else {
      log(user.trends.weight);
      res.send({"updated": user.trends.weight});
    }
  }).catch((e) => {
    res.status(404).send('Cannot add weight data to trends');
  });
});

router.post('/updateSleep', (req, res) => {
  const val = req.body.value;
  const id = req.session.user_id;

  User.findOneAndUpdate({_id: id}, {"$push": { "trends.sleep" : val}},{new: true}).then((user) => {
    if (!user) {
      res.status(404).send();
    } else {
      res.send({"updated": user.trends.sleep});
    }
  }).catch((e) => {
    res.status(404).send('Cannot add sleep data to trends');
  });
});
router.post('/updateStress', (req, res) => {
  const val = req.body.value;
  const id = req.session.user_id;

  User.findOneAndUpdate({_id: id}, {"$push": { "trends.stress" : val}},{new: true}).then((user) => {
    if (!user) {
      res.status(404).send();
    } else {
      res.send({"updated": user.trends.stress});
    }
  }).catch((e) => {
    res.status(404).send('Cannot add stress data to trends');
  });
});
router.post('/updateCalories', (req, res) => {
  const val = req.body.value;
  const id = req.session.user_id;

  User.findOneAndUpdate({_id: id}, {"$push": { "trends.calories" : val}},{new: true}).then((user) => {
    if (!user) {
      res.status(404).send();
    } else {
      res.send({"updated": user.trends.calories});
    }
  }).catch((e) => {
    res.status(404).send('Cannot add calories data to trends');
  });
});

module.exports = router;
