const log = console.log;

export const saveUserInfoHandler = (ctx, setCtx) => {
  log('Upating user info...');
  if (_UserInputValidate(setCtx)) {
    const previousEmail = ctx.state.activeUser.email;
    _saveUserInfo(ctx, setCtx);
    setCtx.setState(
      {
        newInfoSet: true,
      },
      () => {
        log('Successfully saved user info', ctx.state.activeUser);
      },
    );
    const newInfo = {
      prevEmail: previousEmail,
      firstName: setCtx.state.first,
      lastName: setCtx.state.last,
      email: setCtx.state.email,
      password: setCtx.state.pass,
      sex: setCtx.state.sex,
    };
    const request = new Request('http://localhost:5000/manageUser/setUserInfo', {
      method: 'post',
      body: JSON.stringify(newInfo),
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
    });
    fetch(request)
      .then((res) => {
        if (res.status === 200) {
          res
            .json()
            .then((json) => {
              console.log`user Info sent: ${json}`;
            })
            .catch((error) => {
              console.log('sent Failed: ', error);
            });
        }
      })
      .catch((error) => {
        console.log('sent Failed: ', error);
      });
  } else {
    alert('email already exists');
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
  const isEmailValid = _isValidEmail(setCtx.state.userList, setCtx.state.email);
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

const _isValidEmail = (list, email) => {
  const exist = list.some((element) => element['email'] === email);
  if (!exist) {
    return true;
  } else {
    return false;
  }
};
