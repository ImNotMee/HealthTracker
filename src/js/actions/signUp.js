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
  const inputs = signUpCtx.state;
  const newUser = new User(
    inputs.first,
    inputs.last,
    inputs.email,
    inputs.password,
    inputs.accountType,
    inputs.sex,
  );
  signUpCtx.props.addUserHandler(newUser);
  log('User successfully added');
  _clearSignUpInputs(signUpCtx);
};

export class User {
  constructor(firstName, lastName, email, password, accountType, sex) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.accountType = accountType;
    this.sex = sex;
    this.hash = this.email + this.password;
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
    accountType: '',
  });
};
