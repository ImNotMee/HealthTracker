export const fetchCardData = (user) => {
  // it should call an endpoint to fetch user card data
  user_card = {
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
