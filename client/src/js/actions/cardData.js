export const fetchCardData = (user) => {
  // it should call an endpoint to fetch user card data
  const user_card = {
    Water: {
      completed: 0.8,
      remaining: 2,
      unit: 'L',
    },
    Calories: {
      completed: 300,
      remaining: 1700,
      unit: 'Calories',
    },
    Mood: {
      value: 'Happy',
    },
    Sleep: {
      hours: 8,
      quality: 'Good', // 3 levels bad, okay, good
    },
    Stress: {
      value: 1,
    },
    Medication: [
      {
        drug: 'Cold Medicine',
        completed: 1,
        remainging: 2,
      },
      {
        drug: 'Allergy Medicine',
        completed: 2,
        remainging: 4,
      },
    ],
    Sickness: {
      //
      sick: true,
    },
    Appointments: [
      // shows all appointments today
      {
        event: 'Annual Checkup',
        doctor: 'Dr. Zoudas',
        time: '16:00:00',
      },
      {
        event: 'Blood Donation',
        doctor: 'Dr. Dre',
        time: '10:00:00',
      },
      {
        event: 'Dentist',
        doctor: 'Dr. Teth',
        time: '12:00:00',
      },
    ],
  };

  return user_card;
};

// lists of actions to change user_card state

export const setBMI = (card, newBMI, newHeight, newWeight, newUnit) => {
  console.log('updating BMI to ');
  const { user_card, user } = card.state;
  user_card['BMI']['value'] = newBMI;
  user_card['BMI']['height'] = newHeight;
  user_card['BMI']['weight'] = newWeight;
  user_card['BMI']['unit'] = newUnit;

  const today = new Date();
  const day = today.getDay();
  // conversion from standard to metric
  let trendWeight = newWeight;
  if (newUnit === 'metric') {
    trendWeight = newWeight * 2.205;
  }
  user.trends.weight[day] = trendWeight;

  card.setState({
    user_card: user_card,
    user: user,
  });
  console.log(user_card['BMI']['value']);
};

export const setWater = (card, newWater) => {
  console.log('updating Water to ');
  const { user_card } = card.state;
  user_card['Water']['completed'] += parseInt(newWater, 10);
  let remaining = 2000 - user_card['Water']['completed'];
  if (remaining < 0) {
    remaining = 0;
  }
  user_card['Water']['remaining'] = remaining;
  card.setState({
    user_card: user_card,
  });
  console.log(user_card['Water']);

  const waterInfo = { completed: newWater, remaining: remaining, unit: 'ml' };
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
  const { user_card, user } = card.state;
  user_card['Calories']['completed'] += parseInt(newCalories, 10);
  let remainging = 2000 - user_card['Calories']['completed'];
  if (remainging < 0) {
    remainging = 0;
  }
  user_card['Calories']['remaining'] = remainging;

  const today = new Date();
  const day = today.getDay();
  user.trends.calories[day] = newCalories;

  card.setState({
    user_card: user_card,
    user: user,
  });
  console.log(user_card['Calories']['completed']);
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
  user.user_card['Sleep']['date'] = today.now();

  // do trend stuff here
  user.trends.sleep[day] = newSleepHours;

  card.setState({
    user: user,
  });
  console.log(user.user_card['Sleep']);

  sendSleep(newSleepHours, newSleepQuality, today.now());
};

export const setStress = (card, newStress) => {
  console.log('updating Stress to ');
  const today = new Date();
  const day = today.getDay();

  const { user } = card.state;
  user.user_card['Stress']['value'] = newStress;
  user.user_card['Stress']['date'] = today.now();

  user.trends.stress[day] = newStress;

  card.setState({
    user: user,
  });
  console.log(user_card['Stress']);

  sendSleep(newStress, today.now());
};

export const setSickness = (card, newSickness) => {
  console.log('updating Stress to ');
  const { user_card } = card.state;
  user_card['Sickness'] = newSickness;
  card.setState({
    user_card: user_card,
  });
  console.log(user_card['Sickness']);
};

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
