const log = console.log;

export const saveUserInfoHandler = (ctx, setCtx) => {
  log('Upating user info...');
  if (_UserInputValidate(setCtx)) {
    _saveUserInfo(ctx, setCtx);
    setCtx.setState(
      {
        newInfoSet: true,
      },
      () => {
        log('Successfully saved user info', ctx.state.activeUser);
      },
    );
  } else {
    log('Unsuccessful in saving user info');
  }
};

const _saveUserInfo = (ctx, setCtx) => {
  const user = ctx.state.activeUser;
  user.firstName = setCtx.state.first;
  user.lastName = setCtx.state.last;
  user.email = setCtx.state.email;
  user.password = setCtx.state.pass;
  user.sex = setCtx.state.sex;
  ctx.setState({
    activeUser: user,
  });
};

const _UserInputValidate = (setCtx) => {
  log('Validating reminder inputs...');
  const isFirstValid = _isInvalid(setCtx.state.first);
  const isLastValid = _isInvalid(setCtx.state.last);
  const isEmailValid = _isInvalid(setCtx.state.email);
  const isPassValid = _isInvalid(setCtx.state.pass);
  const isSexValid = _isInvalid(setCtx.state.sex);

  setCtx.setState({
    isFirstValid: isFirstValid,
    isLastValid: isLastValid,
    isEmailValid: isEmailValid,
    isPassValid: isPassValid,
    isSexValid: isSexValid,
  });

  return isFirstValid && isLastValid && isEmailValid && isPassValid && isSexValid;
};

const _isInvalid = (value) => {
  return value !== null && value !== undefined && value !== '' && value !== 'select';
};
