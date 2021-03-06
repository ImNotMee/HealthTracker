const log = console.log;
export const logoutUser = (ctx) => {
  log('Logging out user and saving details...');
  ctx.setState(
    {
      activeUser: null,
    },
    () => {
      log(`User ${ctx.state.activeUser === null ? 'successfully' : 'unsuccessfully'} logged out`);
    },
  );
  const url = '/auth/logout';

  fetch(url).catch((error) => {
    console.log(error);
  });
};
