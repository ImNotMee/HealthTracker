import React, { Component } from 'react';

// Importing components
import Header from './Header';
import SignUpForm from './SignUp';

// Importing actions/required methods
import { onLoginHandler } from '../../actions/login';

import './styles.css';

class LandingPage extends Component {
  state = {
    users: this.props.users,
    userEmail: 'test',
    userPassword: 'test',
  };

  render() {
    return (
      <div>
        <Header
          loginValidityStatus={this.state.invalidLogin}
          loginHandler={(email, password) => {
            onLoginHandler(this, email, password);
          }}
        />
        <div id="LandingContentWrapper">
          <div id="AboutAppWrapper">
            <p>description of app</p>
          </div>
          <div id="signUpWapper">
            <SignUpForm addUserHandler={this.props.addUserHandler} />
          </div>
        </div>
      </div>
    );
  }
}

export default LandingPage;
