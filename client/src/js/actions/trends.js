const log = console.log;

export const getAllUserTrends = (json) => {
  let data = [];
  data.push(avgWeight(json));
  data.push(avgStress(json));
  data.push(avgSleep(json));
  data.push(avgCalories(json));
  return data;
};

// admin trend functions
export const avgWeight = (allUserData) => {
  let weekTotal = [0, 0, 0, 0, 0, 0, 0];
  let day = 0; // 0 = sun -> 6 = sat
  let count = 0;

  //for (let x in allUserData) {
  allUserData['weight'].forEach((r) => {
    for (let i = 0; i < 7; i++) {
      weekTotal[day] = weekTotal[day] + r[i];
      day = day + 1;
    }
    day = 0;
  });
  count = count + 1;
  //}
  const weekAvg = weekTotal.map((x) => x / count);
  return weekAvg;
};

export const avgStress = (allUserData) => {
  let weekTotal = [0, 0, 0, 0, 0, 0, 0];
  let day = 0; // 0 = sun -> 6 = sat
  let count = 0;

  //for (let x in allUserData) {
  allUserData['stress'].forEach((r) => {
    log(r.length);
    for (let i = 0; i < 7; i++) {
      weekTotal[day] = weekTotal[day] + r[i];
      day = day + 1;
    }
    day = 0;
  });
  count = count + 1;
  //}
  const weekAvg = weekTotal.map((x) => x / count);
  log('average stress  loaded');
  return weekAvg;
};

export const avgSleep = (allUserData) => {
  let weekTotal = [0, 0, 0, 0, 0, 0, 0];
  let day = 0; // 0 = sun -> 6 = sat
  let count = 0;

  //for (let x in allUserData) {
  allUserData['sleep'].forEach((r) => {
    log(r.length);
    for (let i = 0; i < 7; i++) {
      weekTotal[day] = weekTotal[day] + r[i];
      day = day + 1;
    }
    day = 0;
  });
  count = count + 1;
  //}
  const weekAvg = weekTotal.map((x) => x / count);
  log('average sleep loaded');
  return weekAvg;
};

export const avgCalories = (allUserData) => {
  let weekTotal = [0, 0, 0, 0, 0, 0, 0];
  let day = 0; // 0 = sun -> 6 = sat
  let count = 0;

  //for (let x in allUserData) {
  allUserData['calories'].forEach((r) => {
    log(r.length);
    for (let i = 0; i < 7; i++) {
      weekTotal[day] = weekTotal[day] + r[i];
      day = day + 1;
    }
    day = 0;
  });
  count = count + 1;
  //}
  const weekAvg = weekTotal.map((x) => x / count);
  log('average calories loaded');
  return weekAvg;
};
