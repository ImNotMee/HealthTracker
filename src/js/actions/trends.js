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
