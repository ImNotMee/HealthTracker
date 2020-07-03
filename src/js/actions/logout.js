'use strict';
const log = console.log;
export const logoutUser = (ctx) => {
  log('Logging out user and saving details...');
  const users = ctx.state.userDB;
  const activeUser = ctx.state.activeUser;
  users[activeUser.hash] = activeUser;
  ctx.setState(
    {
      activeUser: null,
      userDB: users,
    },
    () => {
      log(`User ${ctx.state.activeUser === null ? 'successfully' : 'unsuccessfully'} logged out`);
    },
  );
};
