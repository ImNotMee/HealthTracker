export const defaultCard = {
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
};

// lists of actions to change user_card state

export const resetToday = (card) => {
  const { user } = card.state;
  const card_date = new Date(user.user_card.date);
  const date = new Date();
  // check if it's a new day
  if (date.getMonth() !== card_date.getMonth() || date.getDate() !== card_date.getDate()) {
    let reset_card = defaultCard;
    reset_card['BMI']['value'] = user.user_card['BMI']['value'];
    reset_card['BMI']['height'] = user.user_card['BMI']['height'];
    reset_card['BMI']['weight'] = user.user_card['BMI']['weight'];
    reset_card['BMI']['unit'] = user.user_card['BMI']['unit'];
    reset_card['date'] = Date.now();

    user.trends.push(user.user_card);
    user.user_card = reset_card;

    const request = new Request('http://localhost:5000/logCardData/reset', {
      method: 'post',
      body: JSON.stringify(reset_card),
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
    });

    // Send the request with fetch()
    fetch(request)
      .then((res) => {
        if (res.status === 200) {
          res
            .json()
            .then((json) => {
              console.log`Reset user card: ${json}`;
            })
            .catch((error) => {
              console.log('Reset Failed: ', error);
            });
        }
      })
      .catch((error) => {
        console.log('Reset Failed: ', error);
      });
  }
};

export const setBMI = (card, newBMI, newHeight, newWeight, newUnit) => {
  resetToday(card); // check if it requires resetting
  const { user } = card.state;
  user.user_card['BMI']['value'] = newBMI;
  user.user_card['BMI']['height'] = newHeight;
  user.user_card['BMI']['weight'] = newWeight;
  user.user_card['BMI']['unit'] = newUnit;
  user.user_card['BMI']['streak'] = true;

  card.setState({
    user: user,
  });

  const BMIInfo = {
    value: user.user_card['BMI']['value'],
    height: user.user_card['BMI']['height'],
    weight: user.user_card['BMI']['weight'],
    unit: user.user_card['BMI']['unit'],
    streak: user.user_card['BMI']['streak'],
    date: Date.now(),
  };
  const request = new Request('http://localhost:5000/logCardData/logBMI', {
    method: 'post',
    body: JSON.stringify(BMIInfo),
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
    },
  });

  fetch(request)
    .then((res) => {
      if (res.status === 200) {
        return res.json();
      }
    })
    .catch((error) => {
      console.log('logging failed', error);
    });
};

export const setWater = (card, newWater) => {
  resetToday(card); // check if it requires resetting

  const { user } = card.state;
  let streak = false;
  user.user_card['Water']['completed'] += parseInt(newWater, 10);
  let remaining = 2000 - user.user_card['Water']['completed'];
  if (remaining <= 0) {
    remaining = 0;
    streak = true;
  }
  user.user_card['Water']['remaining'] = remaining;
  user.user_card['Water']['streak'] = streak;
  card.setState({
    user: user,
  });

  const waterInfo = {
    completed: user.user_card['Water']['completed'],
    remaining: user.user_card['Water']['remaining'],
    unit: 'ml',
    streak: streak,
    date: Date.now(),
  };
  const request = new Request('http://localhost:5000/logCardData/logWater', {
    method: 'post',
    body: JSON.stringify(waterInfo),
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
    },
  });

  fetch(request)
    .then((res) => {
      if (res.status === 200) {
        return res.json();
      }
    })
    .catch((error) => {
      console.log('logging failed', error);
    });
};

export const setCalories = (card, newCalories) => {
  resetToday(card); // check if it requires resetting

  const { user } = card.state;
  let streak = false;
  user.user_card['Calories']['completed'] += parseInt(newCalories, 10);
  let remaining = 2000 - user.user_card['Calories']['completed'];
  if (remaining <= 0) {
    remaining = 0;
    streak = true;
  }
  user.user_card['Calories']['remaining'] = remaining;

  card.setState({
    user: user,
  });

  const caloriesInfo = {
    completed: user.user_card['Calories']['completed'],
    remaining: user.user_card['Calories']['remaining'],
    unit: 'Calories',
    streak: streak,
    date: Date.now(),
  };
  const request = new Request('http://localhost:5000/logCardData/logCalories', {
    method: 'post',
    body: JSON.stringify(caloriesInfo),
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
    },
  });

  fetch(request)
    .then((res) => {
      if (res.status === 200) {
        return res.json();
      }
    })
    .catch((error) => {
      console.log('logging failed', error);
    });
};

export const setMood = (card, newMood) => {
  resetToday(card); // check if it requires resetting

  const { user } = card.state;
  user.user_card['Mood']['value'] = newMood;
  card.setState({
    user: user,
  });

  // updating server
  sendMood(newMood);
};

export const setSleep = (card, newSleepHours, newSleepQuality) => {
  console.log('updating Sleep to ');
  const today = new Date();
  const day = today.getDay();

  const { user } = card.state;
  user.user_card['Sleep']['hours'] = newSleepHours;
  user.user_card['Sleep']['quality'] = newSleepQuality;

  // do trend stuff here
  user.trends.sleep[day] = newSleepHours;

  card.setState({
    user: user,
  });
  console.log(user.user_card['Sleep']);

  sendSleep(newSleepHours, newSleepQuality);
};

export const setStress = (card, newStress) => {
  const { user } = card.state;
  user.user_card['Stress']['value'] = newStress;

  card.setState({
    user: user,
  });

  sendStress(newStress);
};

export const setSickness = (card, newSickness) => {
  console.log('updating Stress to ');
  const { user } = card.state;
  user.user_card['Sickness'] = newSickness;
  card.setState({
    user: user,
  });
  console.log(user.user_card['Sickness']);

  sendSickness(newSickness);
};

// TODO: add a reset for all the data
// TODO: add methods for trends

/////////////////////
// API REQUESTS BELOW
/////////////////////

const sendMood = (mood) => {
  const reqBody = {
    value: mood,
    streak: true,
    date: Date.now(),
  };

  const request = new Request('http://localhost:5000/logCardData/logMood', {
    method: 'post',
    body: JSON.stringify(reqBody),
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
    },
  });

  // Send the request with fetch()
  fetch(request)
    .then((res) => {
      if (res.status === 200) {
        res
          .json()
          .then((json) => {
            console.log`Updated Mood: ${json}`;
          })
          .catch((error) => {
            console.log('Mood Failed: ', error);
          });
      }
    })
    .catch((error) => {
      console.log('Mood Failed: ', error);
    });
};

const sendSleep = (hours, quality) => {
  const reqBody = {
    hours: hours,
    quality: quality,
    date: Date.now(),
    streak: true,
  };

  const request = new Request('http://localhost:5000/logCardData/logSleep', {
    method: 'post',
    body: JSON.stringify(reqBody),
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
    },
  });

  // Send the request with fetch()
  fetch(request)
    .then((res) => {
      if (res.status === 200) {
        res
          .json()
          .then((json) => {
            console.log`Updated Sleep: ${json}`;
          })
          .catch((error) => {
            console.log('Sleep Failed: ', error);
          });
      }
    })
    .catch((error) => {
      console.log('Sleep Failed: ', error);
    });
};

const sendStress = (value) => {
  const reqBody = {
    value: value,
    date: Date.now(),
    streak: true,
  };

  const request = new Request('http://localhost:5000/logCardData/logStress', {
    method: 'post',
    body: JSON.stringify(reqBody),
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
    },
  });

  // Send the request with fetch()
  fetch(request)
    .then((res) => {
      if (res.status === 200) {
        res
          .json()
          .then((json) => {
            console.log`Updated Stress: ${json}`;
          })
          .catch((error) => {
            console.log('Stress Failed: ', error);
          });
      }
    })
    .catch((error) => {
      console.log('Stress Failed: ', error);
    });
};

const sendSickness = (sickness) => {
  const reqBody = {
    sickness: sickness,
  };

  const request = new Request('http://localhost:5000/logCardData/logSickness', {
    method: 'post',
    body: JSON.stringify(reqBody),
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
    },
  });

  // Send the request with fetch()
  fetch(request)
    .then((res) => {
      if (res.status === 200) {
        res
          .json()
          .then((json) => {
            console.log`Updated Sickness: ${json}`;
          })
          .catch((error) => {
            console.log('Sickness Failed: ', error);
          });
      }
    })
    .catch((error) => {
      console.log('Sickness Failed: ', error);
    });
};
