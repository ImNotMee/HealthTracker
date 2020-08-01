const log = console.log;

export const setActiveUser = (app, user) => {
  app.setState(
    {
      activeUser: user,
    },
    () => {
      log(`${app.state.activeUser === user ? 'Successfully' : 'Unsuccessfully'} login`);
    },
  );
};

export const onLoginHandler = (landingPage, email, password) => {
  const authKey = _getUserHash(email, password);
  const user = landingPage.props.users[authKey];
  // check login attempt
  if (user === null || user === undefined) {
    landingPage.setState({
      invalidLogin: true,
    });
    log('Invalid aogin attempt. Try again');
  } else {
    landingPage.setState({
      userEmail: email,
      userPassword: password,
      invalidLogin: false,
    });
    landingPage.props.setActiveUserHandler(user);
  }
};

export const _getUserHash = (email, password) => {
  return email + password;
};

export const getUserByAuthKey = (ctx, authKey) => {
  const userId = ctx.state.loginUserIdMap[authKey];
  if (userId === undefined) {
    return userId;
  }
  return getUserById(ctx, userId);
};

export const getUserById = (ctx, id) => {
  return ctx.state.users[id];
};
