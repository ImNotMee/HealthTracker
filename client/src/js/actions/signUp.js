import { API, HEALTH_CATEGORIES, USER_ACCOUNT_TYPE } from '../constants';
const log = console.log;

export const signUpUser = (landingPage, signUpCtx) => {
  log('Creating user...');
  if (_signUpInputValidate(signUpCtx)) {
    const inputs = signUpCtx.state;
    const { first, last, email, password, sex } = inputs;
    const request = new Request(API.siginup, {
      method: 'post',
      body: JSON.stringify({ firstName: first, lastName: last, email, password, sex }),
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
    });

    // Send the request with fetch()
    fetch(request)
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        }
      })
      .then((res) => {
        // check login attempt
        if (res === undefined || res.activeUser === null || res.activeUser === undefined) {
          landingPage.setState({
            invalidLogin: true,
          });
          log('Invalid aogin attempt. Try again');
        } else {
          landingPage.props.setActiveUserHandler(res.activeUser);
          log('User successfully added');
        }
      })
      .catch((error) => {
        log('Signup failed', error);
      });
  } else {
    log('Unsuccessful in adding user');
  }
  _clearSignUpInputs(signUpCtx);
};

const _signUpInputValidate = (signUpCtx) => {
  log('Validating sign-up inputs...');
  const isFirstValid = _isInvalid(signUpCtx.state.first);
  const isLastValid = _isInvalid(signUpCtx.state.last);
  const isEmailValid =
    _isInvalid(signUpCtx.state.email) &&
    _isEmailValid(signUpCtx.props.users, signUpCtx.state.email);
  const isPassValid = _isInvalid(signUpCtx.state.password);
  const isSexValid = _isInvalid(signUpCtx.state.sex);

  signUpCtx.setState({
    isFirstValid: isFirstValid,
    isLastValid: isLastValid,
    isEmailValid: isEmailValid,
    isPassValid: isPassValid,
    isSexValid: isSexValid,
  });

  return isFirstValid && isLastValid && isEmailValid && isPassValid && isSexValid;
};

const _isEmailValid = (users, email) => {
  for (let key in users) {
    if (users[key].email === email) {
      return false;
    }
  }
  return true;
};

const _isInvalid = (value) => {
  return value !== null && value !== undefined && value !== '' && value !== 'select';
};

const _clearSignUpInputs = (ctx) => {
  ctx.setState({
    first: '',
    last: '',
    email: '',
    password: '',
    sex: '',
  });
};
