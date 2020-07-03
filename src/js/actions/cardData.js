'use strict';
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

export const setBMI = (card, newBMI) => {
  console.log('updating BMI to ');
  const { user_card } = card.state;
  user_card['BMI']['value'] = newBMI;
  card.setState({
    user_card: user_card,
  });
  console.log(user_card['BMI']['value']);
};

export const setWater = (card, newWater) => {
  console.log('updating Water to ');
  const { user_card } = card.state;
  user_card['Water']['completed'] = newWater;
  let remainging = 2000 - newWater;
  if (remainging < 0) {
    remainging = 0;
  }
  user_card['Water']['remaining'] = remainging;
  card.setState({
    user_card: user_card,
  });
  console.log(user_card['Water']['completed']);
};

export const setCalories = (card, newCalories) => {
  console.log('updating Calories to ');
  const { user_card } = card.state;
  user_card['Calories']['completed'] = newCalories;
  let remainging = 2000 - newCalories;
  if (remainging < 0) {
    remainging = 0;
  }
  user_card['Calories']['remaining'] = remainging;

  card.setState({
    user_card: user_card,
  });
  console.log(user_card['Calories']['completed']);
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
  const { user_card } = card.state;
  user_card['Sleep']['hours'] = newSleepHours;
  user_card['Sleep']['quality'] = newSleepQuality;
  card.setState({
    user_card: user_card,
  });
  console.log(user_card['Sleep']['hours'], 'and ', user_card['Sleep']['quality']);
};

export const setStress = (card, newStress) => {
  console.log('updating Stress to ');
  const { user_card } = card.state;
  user_card['Stress']['value'] = newStress;
  card.setState({
    user_card: user_card,
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
