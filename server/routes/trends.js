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

// functions below will return an array
// [
//   {
//     date: date,
//     value: value you need 
//   }, 
//   {
//     date: date,
//     value: value you need 
//   }, 
// ]

router.get('/weight', (req, res) => {
  const id = req.session.user_id;
  let result = [];
	User.findById(id).then((user) => {
		if (!user) {
			res.status(404).send("User not found")
		} else {
      user.trends.filter((card) => date_range_helper(card, 7)).forEach(
        (card) => {
          const data = {
            date: card.date,
            value: card.BMI.weight
          }
          result.push(data)
      }) 
      const data = {
        date: user.user_card.date,
        value: user.user_card.BMI.weight,
      }
      result.push(data)
      res.send(result)
		}
	}).catch((error) => {
		res.status(500).send('Internal Server Error')  // server error
	});
});


router.get('/calories', (req, res) => {
  const id = req.session.user_id;
  let result = [];
	User.findById(id).then((user) => {
		if (!user) {
			res.status(404).send("User not found")
		} else {
      user.trends.filter((card) => date_range_helper(card, 7)).forEach(
        (card) => {
          const data = {
            date: card.date,
            value: card.Calories.completed,
          }
          result.push(data)
        })
        const data = {
          date: user.user_card.date,
          value: user.user_card.Calories.completed,
        }
      result.push(data)
      res.send(result)
		}
	}).catch((error) => {
		res.status(500).send('Internal Server Error')  // server error
	});
});


router.get('/sleep', (req, res) => {
  const id = req.session.user_id;
  let result = [];
	User.findById(id).then((user) => {
		if (!user) {
			res.status(404).send("User not found")
		} else {
      user.trends.filter((card) => date_range_helper(card, 7)).forEach(
        (card) => {
          const data = {
            date: card.date,
            value: card.Sleep.hours,
          }
          result.push(data)
        })
        const data = {
          date: user.user_card.date,
          value: user.user_card.Sleep.hours,
        }
      result.push(data)
      res.send(result)
		}
	}).catch((error) => {
		res.status(500).send('Internal Server Error')  // server error
	});
});


router.get('/stress', (req, res) => {
  const id = req.session.user_id;
  let result = [];
	User.findById(id).then((user) => {
		if (!user) {
			res.status(404).send("User not found")
		} else {
      user.trends.filter((card) => date_range_helper(card, 7)).forEach(
        (card) => {
          const data = {
            date: card.date,
            value: card.Stress.value,
          }
          result.push(data)
        })
        const data = {
          date: user.user_card.date,
          value: user.user_card.Stress.value,
        }
      result.push(data)
      res.send(result)
		}
	}).catch((error) => {
		res.status(500).send('Internal Server Error')  // server error
	});
});

router.post('/getAll', (req, res) => {
  let weight = [];
  let stress = [];
  let sleep = [];
  let calories = [];
  User.find({type: "user"}).then((data) => {
    data.forEach(user => {

      // for each user, get past trends in correct date range
      user.trends.filter((card) => date_range_helper(card, 7))
      .forEach((card) => {
        weight.push(card.BMI.weight);
        stress.push(card.Stress.value);
        sleep.push(card.Sleep.hours);
        calories.push(card.Calories.completed);
      })

      // for each user, get current card data
      weight.push(user.user_card.BMI.weight);
      stress.push(user.user_card.Stress.value);
      sleep.push(user.user_card.Sleep.hours);
      calories.push(user.user_card.Calories.completed);
    })

    // send all the data
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
