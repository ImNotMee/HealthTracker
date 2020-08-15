const log = console.log;
export const logoutUser = (ctx) => {
  log('Logging out user and saving details...');
  const activeUser = ctx.state.activeUser;
  ctx.setState(
    {
      activeUser: null,
    },
    () => {
      log(`User ${ctx.state.activeUser === null ? 'successfully' : 'unsuccessfully'} logged out`);
    },
  );
};
