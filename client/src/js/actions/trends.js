const log = console.log;

export const getAllUserTrends = (json) => {
  // const url = 'http://localhost:5000/trends/getAll';
  // let data = [];
  // fetch(url)
  //   .then((res) => {
  //     if (res.status === 200) {
  //       log("reading resss")
  //       return res.json();
  //     }
  //     else {
  //       log("a");
  //     }
  //   })
  //   .then((json) => {
  //      data.push(avgWeight(json));
  //      data.push(avgStress(json));
  //      data.push(avgSleep(json));
  //      data.push(avgCalories(json));
  //      log(data);
  //      return data;
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });
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
  let sum = 0;
  //for (let x in allUserData) {
  allUserData['weight'].forEach((r) => {
    log(r.length);
    for (let i = 0; i < 7; i++) {
      weekTotal[day] = weekTotal[day] + r[i].value;
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
  let sum = 0;
  //for (let x in allUserData) {
  allUserData['stress'].forEach((r) => {
    log(r.length);
    for (let i = 0; i < 7; i++) {
      weekTotal[day] = weekTotal[day] + r[i].value;
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
  let sum = 0;
  //for (let x in allUserData) {
  allUserData['sleep'].forEach((r) => {
    log(r.length);
    for (let i = 0; i < 7; i++) {
      weekTotal[day] = weekTotal[day] + r[i].value;
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
  let sum = 0;
  //for (let x in allUserData) {
  allUserData['calories'].forEach((r) => {
    log(r.length);
    for (let i = 0; i < 7; i++) {
      weekTotal[day] = weekTotal[day] + r[i].value;
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

export const getData = (user, type) => {
  const url = 'http://localhost:5000/trends/' + type;
  log(url);
  // fetch(url)
  //    .then((res) => {
  //      if (res.status === 200) {
  //        return res.json();
  //      }
  //    })
  //    .catch((error) => {
  //      console.log(error);
  //    });
};
