'use-strict';
import { HEALTH_CATEGORIES, USER_ACCOUNT_TYPE } from '../constants';

const log = console.log;

export const addUserHandler = (ctx, newUser) => {
  log('Adding user...');
  const users = ctx.state.userDB;

  users[newUser.hash] = newUser;
  ctx.setState({
    userDB: users,
  });
  log(ctx.state.userDB);
};

export const signUpUser = (signUpCtx) => {
  log('Creating user...');
  if (_signUpInputValidate(signUpCtx)) {
    const inputs = signUpCtx.state;
    const newUser = new User(inputs.first, inputs.last, inputs.email, inputs.password, inputs.sex);
    signUpCtx.props.addUserHandler(newUser);
    log('User successfully added');
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

export class User {
  constructor(firstName, lastName, email, password, sex) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.type = USER_ACCOUNT_TYPE;
    this.sex = sex;
    this.hash = this.email + this.password;
    this.reminders = {
      [HEALTH_CATEGORIES.medical]: [],
      [HEALTH_CATEGORIES.mental]: [],
      [HEALTH_CATEGORIES.phsycial]: [],
    };
    this.notifications = [];
  }

  getHash = () => {
    return this.hash;
  };
}

const _clearSignUpInputs = (ctx) => {
  ctx.setState({
    first: '',
    last: '',
    email: '',
    password: '',
    sex: '',
  });
};
