import React, { Component } from 'react';

// Importing components
import Header from './Header';
import SignUpForm from './SignUp';

// Importing actions/required methods
import { onLogin } from '../../actions/login';
import { addUser } from '../../actions/signUp';

import './styles.css';

class LandingPage extends Component {
  state = {
    users: [
      { firstName: 'Ben', lastName: 'John' },
      { firstName: 'IAmAdmin', lastName: 'John' },
    ],
    loginUserIdMap: {
      useruser: 0,
      adminadmin: 1,
    },
    userEmail: 'test',
    userPassword: 'test',
  };

  render() {
    return (
      <div>
        <Header
          loginValidityStatus={this.state.invalidLogin}
          loginHandler={(email, password) => {
            onLogin(this, email, password);
          }}
        />
        <div id="LandingContentWrapper">
          <div id="AboutAppWrapper">
            <p>description of app</p>
          </div>
          <div id="signUpWapper">
            <SignUpForm addUserHandler={(newUser) => addUser(this, newUser)} />
          </div>
        </div>
      </div>
    );
  }
}

export default LandingPage;
