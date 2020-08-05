const ADMIN_ACCOUNT_TYPE = 'admin';
const USER_ACCOUNT_TYPE = 'user';
const ACCOUNT_TYPES = {
  admin: ADMIN_ACCOUNT_TYPE,
  user: USER_ACCOUNT_TYPE,
};

const HEALTH_CATEGORIES = {
  phsycial: 'Physical Health',
  mental: 'Mental Health',
  medical: 'Medical Health',
};

const HEALTH_SUB_CATEGORIES = {
  [HEALTH_CATEGORIES.phsycial]: ['BMI', 'Hydration', 'Calories'],
  [HEALTH_CATEGORIES.mental]: ['Mood', 'Sleep', 'Stress'],
  [HEALTH_CATEGORIES.medical]: ['Medication', 'Symptoms', 'Appointments'],
};

const REMINDER_STATUS = {
  active: 'active',
  completed: 'completed',
  overdue: 'overdue',
};

const NOTIFICATION_TYPE = {
  alert: 'Alert',
  reminder: 'Reminder',
};

const ADMIN_REMINDER_TYPES = {
  task: 'Tasks',
};

module.exports = {
  ADMIN_ACCOUNT_TYPE,
  USER_ACCOUNT_TYPE,
  ACCOUNT_TYPES,
  HEALTH_CATEGORIES,
  HEALTH_SUB_CATEGORIES,
  REMINDER_STATUS,
  NOTIFICATION_TYPE,
  ADMIN_REMINDER_TYPES,
};
