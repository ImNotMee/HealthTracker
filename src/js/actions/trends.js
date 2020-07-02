import { USERS } from '../constants.js';
const log = console.log;

export const avgWeight = () => {
  let weekAvg = [];
  //Object.keys(USERS).length to get the length
  for (let i = 0; i < 7; i++) {
    let sum = 0;
    for (let j = 0; j < 1; j++) {
      sum = sum + USERS['useruser'].trends.weight[i];
    }
    weekAvg.push(sum / 1);
  }
  console.log(weekAvg);
  return weekAvg;
};

export const avgStress = () => {
  let weekAvg = [];
  //Object.keys(USERS).length to get the length
  for (let i = 0; i < 7; i++) {
    let sum = 0;
    for (let j = 0; j < 1; j++) {
      sum = sum + USERS['useruser'].trends.stress[i];
    }
    weekAvg.push(sum / 1);
  }
  console.log(weekAvg);
  return weekAvg;
};

export const avgSleep = () => {
  let weekAvg = [];
  //Object.keys(USERS).length to get the length
  for (let i = 0; i < 7; i++) {
    let sum = 0;
    for (let j = 0; j < 1; j++) {
      sum = sum + USERS['useruser'].trends.sleep[i];
    }
    weekAvg.push(sum / 1);
  }
  console.log(weekAvg);
  return weekAvg;
};

export const avgCalories = () => {
  let weekAvg = [];
  //Object.keys(USERS).length to get the length
  for (let i = 0; i < 7; i++) {
    let sum = 0;
    for (let j = 0; j < 1; j++) {
      sum = sum + USERS['useruser'].trends.calories[i];
    }
    weekAvg.push(sum / 1);
  }
  console.log(weekAvg);
  return weekAvg;
};

export class Trends {
  constructor(title, data, type) {
    this.title = title;
    this.data = data;
    this.type = type;
  }
}
