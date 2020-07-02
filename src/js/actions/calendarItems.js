import { MONTHS, USERS } from '../constants.js';
//const log = console.log;

export const getFirstDay = () => {
  let d = new Date();
  const firstDay = new Date(d.getFullYear(), d.getMonth(), 1);
  return firstDay.getDay();
};

export const getMonth = () => {
  let months = MONTHS;
  let d = new Date();
  return months[d.getMonth()];
};

export const loadAppointments = (user) => {
  const appointments = [];
  for (let i = 0; i < USERS[user].calendar.appointmentList.length; i++) {
    appointments.push(USERS[user].calendar.appointmentList[i]);
  }
  return appointments;
};

export const loadStreaks = (user) => {
  const streaks = [];
  for (let i = 0; i < USERS[user].calendar.streaksList.length; i++) {
    streaks.push(USERS[user].calendar.streaksList[i]);
  }
  return streaks;
};

export const findApps = (lists, date) => {
  const app = [];
  for (let i = 0; i < lists.length; i++) {
    if (lists[i].date === date) {
      app.push(lists[i].appointments);
    }
  }
  return app;
};

export const findStreaks = (lists, date) => {
  const streaks = [];
  for (let i = 0; i < lists.length; i++) {
    if (lists[i].date === date) {
      streaks.push(lists[i].streaks);
    }
  }
  return streaks;
};
