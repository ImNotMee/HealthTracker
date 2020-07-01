const log = console.log;

export const renderData = (ctx, data) => {
  log("loading user's data for this week");
  ctx.setState({
    trends: data,
  });
};

export class Trends {
  constructor(title, data, type) {
    this.title = title;
    this.data = data;
    this.type = type;
  }
}

export const avgWeight = () => {
  let weekAvg = [];
  for (let i = 0; i < 7; i++) {
    let sum = 0;
    for (let j = 0; j < this.state.userDB.length; j++) {
      sum = sum + this.state.userDB.trends.weight[i];
    }
    weekAvg.push(sum / this.state.userDB.length);
  }
};
