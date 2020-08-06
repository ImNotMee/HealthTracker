const log = console.log;

export const getAllUserTrends = () => {
  const url = 'http://localhost:5000/trends/getAll';
};

// admin trend functions
export const avgWeight = (allUser) => {
  let weekAvg = [];
  let count = 0;
  const a = getAllUserTrends(allUser);
  log('getting all users data');
  for (let i = 0; i < 7; i++) {
    let sum = 0;
    for (let x in allUser) {
      sum = sum + allUser[x].trends.weight[i];
      count = count + 1;
    }
    if (count !== 0) {
      weekAvg.push(sum / count);
    }
    count = 0;
  }
  log('average weight loaded');
  return weekAvg;
};

export const avgStress = (allUser) => {
  let weekAvg = [];
  let count = 0;
  for (let i = 0; i < 7; i++) {
    let sum = 0;
    for (let x in allUser) {
      if (allUser[x].type === 'user') {
        sum = sum + allUser[x].trends.stress[i];
        count = count + 1;
      }
    }
    if (count !== 0) {
      weekAvg.push(sum / count);
    }
    count = 0;
  }
  log('average stress  loaded');
  return weekAvg;
};

export const avgSleep = (allUser) => {
  let weekAvg = [];
  let count = 0;
  for (let i = 0; i < 7; i++) {
    let sum = 0;
    for (let x in allUser) {
      if (allUser[x].type === 'user') {
        sum = sum + allUser[x].trends.sleep[i];
        count = count + 1;
      }
    }
    if (count !== 0) {
      weekAvg.push(sum / count);
    }
    count = 0;
  }
  log('average sleep loaded');
  return weekAvg;
};

export const avgCalories = (allUser) => {
  let weekAvg = [];
  let count = 0;
  for (let i = 0; i < 7; i++) {
    let sum = 0;
    for (let x in allUser) {
      if (allUser[x].type === 'user') {
        sum = sum + allUser[x].trends.calories[i];
        count = count + 1;
      }
    }
    if (count !== 0) {
      weekAvg.push(sum / count);
    }
    count = 0;
  }
  log('average calories loaded');
  return weekAvg;
};
