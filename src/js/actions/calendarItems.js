import { MONTHS, USERS } from '../constants.js';
const log = console.log;

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

export const getMonthDay = (time) => {
  let d = new Date(time);
  return [d.getUTCMonth() + 1, d.getUTCDate()];
};

export const loadAppointments = (user) => {
  const appointments = [];
  let reminders = USERS[user].reminders;
  for (let i = 0; i < reminders['Medical Health'].length; i++) {
    if (reminders['Medical Health'][i].subCategory === 'Appointments') {
      appointments.push(reminders['Medical Health'][i]);
    }
  }
  return appointments;
};

export const findApps = (lists, date, month) => {
  const app = [];
  for (let i = 0; i < lists.length; i++) {
    let appTime = getMonthDay(lists[i].time);
    if (appTime[1] === date) {
      let d = new Date(lists[i].time);
      let formatTime = d.getHours() + ':' + d.getMinutes();
      app.push([lists[i].name, formatTime]);
    }
  }
  return app;
};

export const loadStreaks = (user) => {
  const streaks = [];
  return streaks;
};

export const findStreaks = (lists, date) => {
  const streaks = [];
  return streaks;
};
