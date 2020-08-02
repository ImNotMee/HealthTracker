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
              id="landingPic"
              src="https://image.freepik.com/free-vector/flat-design-man-running-fitness-trackers_23-2148508679.jpg"
              alt="landingIcon"
            ></img>
            <div id="textDContainer">
              <img
                id="landingPageText"
                src="http://www.pngmart.com/files/9/Text-Banner-Transparent-Background.png"
                alt="landingIcon"
              ></img>
              <div id="description">
                <p id="appDescription">
                  Health Tracker is here to help improve our overall communities' lifestyles to be
                  more healthier by allowing them to track, analyze and stay motivated about
                  specific health related activities. It is difficult to keep track of our
                  lifestyle, and stay motivated to improve its quality. During social distancing,
                  this becomes increasingly more difficult as we lose the sense of what a standard
                  healthy lifestyle may be.
                </p>
              </div>
            </div>
          </div>
          <div id="signUpWapper">
            <SignUpForm users={this.props.users} addUserHandler={this.props.addUserHandler} />
          </div>
        </div>
      </div>
    );
  }
}

export default LandingPage;
