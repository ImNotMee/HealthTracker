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

  const BMIInfo = {
    value: user_card['BMI']['value'],
    height: user_card['BMI']['height'],
    weight: user_card['BMI']['weight'],
    unit: user_card['BMI']['unit'],
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

  const waterInfo = {
    completed: user_card['Water']['completed'],
    remaining: user_card['Water']['remaining'],
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
  const { user_card, user } = card.state;
  user_card['Calories']['completed'] += parseInt(newCalories, 10);
  let remaining = 2000 - user_card['Calories']['completed'];
  if (remaining < 0) {
    remaining = 0;
  }
  user_card['Calories']['remaining'] = remaining;

  const today = new Date();
  const day = today.getDay();
  user.trends.calories[day] = newCalories;

  card.setState({
    user_card: user_card,
    user: user,
  });
  console.log(user_card['Calories']);

  const caloriesInfo = {
    completed: user_card['Calories']['completed'],
    remaining: user_card['Calories']['remaining'],
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
  const { user_card } = card.state;
  user_card['Mood']['value'] = newMood;
  card.setState({
    user_card: user_card,
  });
  console.log(user_card['Mood']['value']);
};

export const setSleep = (card, newSleepHours, newSleepQuality) => {
  console.log('updating Sleep to ');
  const { user_card, user } = card.state;
  user_card['Sleep']['hours'] = newSleepHours;
  user_card['Sleep']['quality'] = newSleepQuality;

  const today = new Date();
  const day = today.getDay();
  user.trends.sleep[day] = newSleepHours;

  card.setState({
    user_card: user_card,
    user: user,
  });
  console.log(user_card['Sleep']['hours'], 'and ', user_card['Sleep']['quality']);
};

export const setStress = (card, newStress) => {
  console.log('updating Stress to ');
  const { user_card, user } = card.state;
  user_card['Stress']['value'] = newStress;

  const today = new Date();
  const day = today.getDay();
  user.trends.stress[day] = newStress;

  card.setState({
    user_card: user_card,
    user: user,
  });
  console.log(user_card['Stress']['value']);
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
