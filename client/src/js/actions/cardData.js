export const card_1 = {
  BMI: {
    // need to take previous data
    value: 0,
    height: 0,
    weight: 0,
    unit: 'metric', // metric and standard
    completed: false,
  },
  Water: {
    completed: 0,
    remaining: 2000,
    unit: 'ml',
    completed: false,
  },
  Calories: {
    completed: 0,
    remaining: 2000,
    unit: 'calories',
    completed: false,
  },
  Mood: {
    value: 'happy',
    completed: false,
  },
  Sleep: {
    hours: 0,
    quality: 'Good', // 3 levels bad, okay, good
    completed: false,
  },
  Stress: {
    value: 1,
    completed: false,
  },
  Sickness: [],
};

// lists of actions to change user_card state

export const setBMI = (card, newBMI, newHeight, newWeight, newUnit) => {
  console.log('updating BMI to ');
  const { user } = card.state;
  user.user_card['BMI']['value'] = newBMI;
  user.user_card['BMI']['height'] = newHeight;
  user.user_card['BMI']['weight'] = newWeight;
  user.user_card['BMI']['unit'] = newUnit;

  const today = new Date();
  const day = today.getDay();
  // conversion from standard to metric
  let trendWeight = newWeight;
  if (newUnit === 'metric') {
    trendWeight = newWeight * 2.205;
  }
  user.trends.weight[day] = trendWeight;

  card.setState({
    user: user,
  });
  console.log(user.user_card['BMI']['value']);

  const BMIInfo = {
    value: user.user_card['BMI']['value'],
    height: user.user_card['BMI']['height'],
    weight: user.user_card['BMI']['weight'],
    unit: user.user_card['BMI']['unit'],
  };
  const request = new Request('http://localhost:5000/logPhysical/logBMI', {
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
  console.log('updating Water to ');
  const { user } = card.state;
  user.user_card['Water']['completed'] += parseInt(newWater, 10);
  let remaining = 2000 - user.user_card['Water']['completed'];
  if (remaining < 0) {
    remaining = 0;
  }
  user.user_card['Water']['remaining'] = remaining;
  card.setState({
    user: user,
  });
  console.log(user.user_card['Water']);

  const waterInfo = {
    completed: user.user_card['Water']['completed'],
    remaining: user.user_card['Water']['remaining'],
    unit: 'ml',
  };
  const request = new Request('http://localhost:5000/logPhysical/logWater', {
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
  console.log('updating Calories to ');
  const { user } = card.state;
  user.user_card['Calories']['completed'] += parseInt(newCalories, 10);
  let remaining = 2000 - user.user_card['Calories']['completed'];
  if (remaining < 0) {
    remaining = 0;
  }
  user.user_card['Calories']['remaining'] = remaining;

  const today = new Date();
  const day = today.getDay();
  user.trends.calories[day] = newCalories;

  card.setState({
    user: user,
  });
  console.log(user.user_card['Calories']);

  const caloriesInfo = {
    completed: user.user_card['Calories']['completed'],
    remaining: user.user_card['Calories']['remaining'],
    unit: 'Calories',
  };
  const request = new Request('http://localhost:5000/logPhysical/logCalories', {
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
  console.log('updating Mood to ');
  const { user } = card.state;
  user.user_card['Mood']['value'] = newMood;
  card.setState({
    user: user,
  });
  console.log(user.user_card['Mood']['value']);

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
  user.user_card['Sleep']['date'] = Date.now();

  // do trend stuff here
  user.trends.sleep[day] = newSleepHours;

  card.setState({
    user: user,
  });
  console.log(user.user_card['Sleep']);

  sendSleep(newSleepHours, newSleepQuality, Date.now());
};

export const setStress = (card, newStress) => {
  console.log('updating Stress to ');
  const today = new Date();
  const day = today.getDay();

  const { user } = card.state;
  user.user_card['Stress']['value'] = newStress;
  user.user_card['Stress']['date'] = Date.now();

  user.trends.stress[day] = newStress;

  card.setState({
    user: user,
  });
  console.log(user.user_card['Stress']);

  sendStress(newStress, Date.now());
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

const sendSleep = (hours, quality, date = undefined) => {
  const reqBody = {
    hours: hours,
    quality: quality,
    date: date,
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

const sendStress = (value, date = undefined) => {
  const reqBody = {
    value: value,
    date: date,
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
