export const logoutUser = (ctx) => {
  ctx.setState({
    activeUser: null,
  });
};
