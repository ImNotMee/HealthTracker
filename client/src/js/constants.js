export const APP_NAME = 'Health Tracker';

export const ADMIN_ACCOUNT_TYPE = 'admin';
export const USER_ACCOUNT_TYPE = 'user';
export const ACCOUNT_TYPES = {
  admin: ADMIN_ACCOUNT_TYPE,
  user: USER_ACCOUNT_TYPE,
};

export const HEALTH_CATEGORIES = {
  phsycial: 'Physical Health',
  mental: 'Mental Health',
  medical: 'Medical Health',
};

export const HEALTH_SUB_CATEGORIES = {
  [HEALTH_CATEGORIES.phsycial]: ['BMI', 'Hydration', 'Calories'],
  [HEALTH_CATEGORIES.mental]: ['Mood', 'Sleep', 'Stress'],
  [HEALTH_CATEGORIES.medical]: ['Medication', 'Symptoms', 'Appointments'],
};

export const REMINDER_STATUS = {
  active: 'active',
  completed: 'completed',
  overdue: 'overdue',
};

export const NOTIFICATION_TYPE = {
  alert: 'Alert',
  reminder: 'Reminder',
};

export const ADMIN_REMINDER_TYPES = {
  task: 'Tasks',
};

export const USERS = {
  useruser: {
    firstName: 'Ben',
    lastName: 'John',
    hash: 'useruser',
    sex: 'male',
    email: 'user',
    type: USER_ACCOUNT_TYPE,
    timers: [],
    checkInHistory: [],
    reminders: {
      [HEALTH_CATEGORIES.medical]: [
        {
          id: 'r01',
          category: HEALTH_CATEGORIES.medical,
          subCategory: 'Appointments',
          name: 'Annual Check Up',
          time: '2020-07-27T10:15',
          note: 'Call Dr.Jones 1hr before',
          status: REMINDER_STATUS.active,
        },
      ],
      [HEALTH_CATEGORIES.mental]: [],
      [HEALTH_CATEGORIES.phsycial]: [],
      otherReminders: null,
    },
    notifications: [
      {
        id: 'unique',
        type: NOTIFICATION_TYPE.alert,
        title: 'Welcome Explor The Check-In Alert System =D',
        message: 'explor our app',
      },
    ],
    trends: {
      weight: [120, 119, 119, 120, 122, 119, 117],
      sleep: [5, 6, 6, 7, 9, 10, 7],
      calories: [1800, 1899, 2100, 2000, 1789, 1987, 1788],
      stress: [2, 3, 2, 1, 4, 6, 5],
    },
  },
  adminadmin: {
    firstName: 'IAmAdmin',
    lastName: 'John',
    email: 'admin',
    hash: 'adminadmin',
    timers: [],
    type: ADMIN_ACCOUNT_TYPE,
    reminders: {
      [ADMIN_REMINDER_TYPES.task]: [
        {
          id: 'r0',
          category: ADMIN_REMINDER_TYPES.task,
          subCategory: undefined,
          name: 'Complete important admin work',
          time: '2020-07-12T21:15',
          note: 'call Jack to check if he wants to come help',
          status: REMINDER_STATUS.active,
        },
      ],
    },
    notifications: [],
  },
};

export const USER_CARD = {
  BMI: {
    value: 22.0,
    height: 160,
    weight: 60,
    unit: 'metric', // metric and standard
  },
  Water: {
    completed: 800,
    remaining: 1200,
    unit: 'ml',
  },
  Calories: {
    completed: 300,
    remaining: 1700,
    unit: 'Calories',
  },
  Mood: {
    value: 'happy',
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
  Sickness: [
    //
  ],
};

export const PAGE_ADDRESS = [
  '/settings',
  '/overview',
  '/trends',
  '/reminders',
  '/calendar',
  '/check-in',
  '/overview/logWeight',
  '/overview/logWater',
  '/overview/logCalories',
  '/overview/logMood',
  '/overview/logSleep',
  '/overview/logStress',
  '/overview/logMedical',
  '/overview/logSick',
  '/reminders/add/:cat?/:sub?/:name?/:time?/:note?/:id?',
  '/manage-users',
  '/trends/admin',
  '/alert-system',
  '/locations/add',
  '/user-profile/:id?',
  '/alert-system/add/:name?/:addr?/:img?/:maxOcc?/:desc?',
];

export const LOCATIONS = {
  "Queen's Park": {
    id: "Queen's Park",
    name: "Queen's Park",
    isAvaliable: true,
    address: '111 Wellesley St W, Toronto, ON',
    country: 'Canada',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Looking_down_University_Avenue_Toronto_August_2012.jpg/1200px-Looking_down_University_Avenue_Toronto_August_2012.jpg',
    maxOccupancy: 53,
    currOccupancy: 52,
    description: 'some information about the park',
  },
};

export const PHYSICAL_TIP = [
  'Eat a high protein breakfast',
  'Lower Carbohydrates',
  'Avoid sugary drinks and fruit juice',
  'Drink sufficient water every day',
  'Choose weight-loss-friendly foods',
  'Eat slowly, Chew slowly',
  'Weigh your self every day',
  'Lift weights at least three times per week',
  'Cardiovascular exercise every day',
  'Get good quality of Sleep',
];

export const MENTAL_TIP = [
  'Avoid alcohol, smoking, and drugs',
  'Get enough of sunlight',
  'Do something fun or enjoyable',
  'Build self-confidence',
  'Socialize with others',
  'Ask for help if you need one',
  'Relax and take a break',
  'Exercise may help you get rid of worries',
  'Learn how to deal with Stress',
  'Set goals, describe to yourself what you really want',
  'Start today',
];

export const MOODLIST = [
  { value: 'angry', icon: 'https://image.flaticon.com/icons/svg/3084/3084520.svg' },
  { value: 'sad', icon: 'https://image.flaticon.com/icons/svg/3084/3084540.svg' },
  { value: 'thoughtful', icon: 'https://image.flaticon.com/icons/svg/3084/3084437.svg' },
  { value: 'soso', icon: 'https://image.flaticon.com/icons/svg/3084/3084473.svg' },
  { value: 'happy', icon: 'https://image.flaticon.com/icons/svg/3084/3084424.svg' },
  { value: 'lovely', icon: 'https://image.flaticon.com/icons/svg/3084/3084622.svg' },
];

export const DAYSOFWEEK = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

export const SYMPTOM_OPTION = [
  'Fever or chills',
  'Cough',
  'Difficulty breathing',
  'Fatigue',
  'Muscle or body aches',
  'Headaches',
  'Sore throat',
  'Congestion or runny nose',
  'Nausea or vomiting',
  'Diarrhea',
  'Bluish lips or face',
];

export const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const API = {
  login: 'http://localhost:5000/auth/login',
  siginup: 'http://localhost:5000/account/signup',
  addReminder: 'http://localhost:5000/reminder/add',
  deleteReminder: (cat, id) => {
    return `http://localhost:5000/reminder/${cat}/${id}`;
  },
  updateReminder: (cat, id) => {
    return `http://localhost:5000/reminder/update/${cat}/${id}`;
  },
};
