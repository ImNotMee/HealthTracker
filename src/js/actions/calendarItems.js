import { MONTHS } from '../constants.js';
const log = console.log;

export class CalendarItems {
  constructor(appointments, streaks, date) {
    this.appointments = appointments;
    this.streaks = streaks;
    this.date = date;
  }
}

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

export const loadData = (date) => {
  const apps = ['Doctor Appointment', ' Checkup Appointment'];
  const strs = ['💧', '🔥', '🛏️'];
};

export const setData = () => {
  let calItems = new CalendarItems([], [], 1);
  return calItems;
};
