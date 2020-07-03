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
            <img
              src="http://www.pngmart.com/files/9/Text-Banner-Transparent-Background.png"
              alt=""
            ></img>
            <p>
              Health Tracker is here to help improve our overall communities' lifestyles to be more
              healthier by allowing them to track, analyze and stay motivated about specific health
              related activities. It is difficult to keep track of our lifestyle, and stay motivated
              to improve its quality. During social distancing, this becomes increasingly more
              difficult as we lose the sense of what a standard healthy lifestyle may be.
            </p>
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
