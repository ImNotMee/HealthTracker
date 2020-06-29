import React, { Component } from 'react';
import { Redirect, Route, Switch, BrowserRouter } from 'react-router-dom';

import LandingPage from './js/components/LandingPage';
import HomePage from './js/components/HomePage';

import { addUserHandler } from './js/actions/signUp';
import { setActiveUser } from './js/actions/login';
import { logoutUser } from './js/actions/logout';
import { checkInHandler, checkoutHandler } from './js/actions/checkIn';

import { USERS, PAGE_ADDRESS, LOCATIONS } from './js/constants';
import './App.css';

class App extends Component {
  // TODO: fix prop drilling for active user
  state = {
    activeUser: null,
    locationsDB: LOCATIONS,
    userDB: USERS,
  };

  checkLoginState = () => {
    if (this.state.activeUser === null) {
      return <Redirect to="/signup" />;
    }
    if (window.location.pathname === '/signup') {
      return <Redirect to="/overview" />;
    }
  };

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          {this.checkLoginState()}
          <Switch>
            {' '}
            {/* Similar to a switch statement - shows the component depending on the URL path */}
            {/* Each Route below shows a different component depending on the exact path in the URL  */}
            <Route
              exact
              path="/signup"
              render={() => (
                <LandingPage
                  activeUser={this.state.activeUser}
                  users={this.state.userDB}
                  addUserHandler={(newUser) => {
                    addUserHandler(this, newUser);
                  }}
                  setActiveUserHandler={(user) => {
                    setActiveUser(this, user);
                  }}
                />
              )}
            />
            <Route
              exact
              path={PAGE_ADDRESS}
              render={() => (
                <div>
                  <HomePage
                    logoutHandler={() => {
                      logoutUser(this);
                    }}
                    checkInHandler={(location) => {
                      checkInHandler(this, location);
                    }}
                    checkoutHandler={(location) => {
                      checkoutHandler(this);
                    }}
                    activeUser={this.state.activeUser}
                    locations={this.state.locationsDB}
                  />
                </div>
              )}
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
