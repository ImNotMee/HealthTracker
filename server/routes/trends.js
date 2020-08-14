'use strict';
const { mongoose } = require('../db/mongoose');
mongoose.set('bufferCommands', false);
const { CardData } = require('../models/CardData')
const { User } = require('../models/User');
const express = require('express');
const router = express.Router();
const log = console.log;

// helper function 
function date_range_helper (card, days) {
  let date = new Date()
  let date_range = new Date(date);
  date_range.setDate(date_range.getDate() - days)
  let card_date = new Date(card.date)

  return card_date < date && card.date >= date_range
}


router.post('/weight', (req, res) => {
  const id = req.session.user_id;
  let result = [];
	User.findById(id).then((user) => {
		if (!user) {
			res.status(404).send("User not found")
		} else {
      user.trends.filter((card) => date_range_helper(card, 7)).forEach(
        (card) => {
          result.push(card.BMI.value)
      }) 
      result.push(user.user_card.BMI.value)
      res.send(result)
		}
	}).catch((error) => {
		res.status(500).send('Internal Server Error')  // server error
	});
});


router.post('/calories', (req, res) => {
  const id = req.session.user_id;
  let result = [];
	User.findById(id).then((user) => {
		if (!user) {
			res.status(404).send("User not found")
		} else {
      user.trends.filter((card) => date_range_helper(card, 7)).forEach(
        (card) => {
          result.push(card.Calories.completed)
        })
      result.push(user.user_card.Calories.completed)
      res.send(result)
		}
	}).catch((error) => {
		res.status(500).send('Internal Server Error')  // server error
	});
});


router.post('/sleep', (req, res) => {
  const id = req.session.user_id;
  let result = [];
	User.findById(id).then((user) => {
		if (!user) {
			res.status(404).send("User not found")
		} else {
      user.trends.filter((card) => date_range_helper(card, 7)).forEach(
        (card) => {
          result.push(card.Sleep.hours)
        })
      result.push(user.user_card.Sleep.hours)
      res.send(result)
		}
	}).catch((error) => {
		res.status(500).send('Internal Server Error')  // server error
	});
});


router.post('/stress', (req, res) => {
  const id = req.session.user_id;
  let result = [];
	User.findById(id).then((user) => {
		if (!user) {
			res.status(404).send("User not found")
		} else {
      user.trends.filter((card) => date_range_helper(card, 7)).forEach(
        (card) => {
          result.push(card.Stress.value)
        })
      result.push(user.user_card.Stress.value)
      res.send(result)
		}
	}).catch((error) => {
		res.status(500).send('Internal Server Error')  // server error
	});
});


router.post('/getAllUser', (req, res) => {
  const id = req.session.user_id;
  let result = [];
	User.findById(id).then((user) => {
		if (!user) {
			res.status(404).send("User not found")
		} else {
      result = user.trends.filter((card) => date_range_helper(card, 7)) 
      result.push(user.user_card)
      res.send(result)
		}
	}).catch((error) => {
		res.status(500).send('Internal Server Error')  // server error
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
  const value = parseInt(req.body.value, 10);
  const date = req.body.date;
  const id = req.body.user_id;

  //User.findOneAndUpdate({_id: id}, {"$push": { "trends.weight" : data}},{new: true}).then((user) => {
  User.findById(id).then((user) => {
    if (!user) {
      res.status(404).send();
    } else {
      const selected = user.trends.weight.filter(history => history.date != date);
      selected.push({"date": date, "value": value})
      user.trends.weight = selected;
      user.save().then(r => {
        res.send({"updated": selected });
      }).catch((e) => {
          res.status(404).send('Cannot add weight data to trends');
      })
    }
  })
});

router.post('/updateSleep', (req, res) => {
  const value = parseInt(req.body.value, 10);
  const date = req.body.date;
  const id = req.session.user_id;

  User.findById(id).then((user) => {
    if (!user) {
      res.status(404).send();
    } else {
      const selected = user.trends.sleep.filter(history => history.date != date);
      selected.push({"date": date, "value": value})
      user.trends.sleep = selected;
      user.save().then(r => {
        res.send({"updated": selected });
      }).catch((e) => {
          res.status(404).send('Cannot add sleep data to trends');
      })
    }
  })
});


router.post('/updateStress', (req, res) => {
  const value = parseInt(req.body.value, 10);
  const date = req.body.date;
  const id = req.session.user_id;

  User.findById(id).then((user) => {
    if (!user) {
      res.status(404).send();
    } else {
      const selected = user.trends.stress.filter(history => history.date != date);
      selected.push({"date": date, "value": value})
      user.trends.stress = selected;
      user.save().then(r => {
        res.send({"updated": selected });
      }).catch((e) => {
          res.status(404).send('Cannot add stress data to trends');
      })
    }
  })
});

router.post('/updateCalories', (req, res) => {
  const value = parseInt(req.body.value, 10);
  const date = req.body.date;
  const id = req.session.user_id;

  User.findById(id).then((user) => {
    if (!user) {
      res.status(404).send();
    } else {
      const selected = user.trends.calories.filter(history => history.date != date);
      selected.push({"date": date, "value": value})
      user.trends.calories = selected;
      user.save().then(r => {
        res.send({"updated": selected });
      }).catch((e) => {
          res.status(404).send('Cannot add calories data to trends');
      })
    }
  })
});

module.exports = router;
