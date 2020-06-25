import React, { Component } from 'react';
import { Redirect, Route, Switch, BrowserRouter } from 'react-router-dom';

import LandingPage from './js/components/LandingPage';
import HomePage from './js/components/HomePage';

import { setActiveUser } from './js/actions/login';
import { logoutUser } from './js/actions/logout';

import './App.css';

class App extends Component {
  // TODO: fix prop drilling for active user
  state = {
    activeUser: null,
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
                  state={this.state}
                  setActiveUserHandler={(user) => {
                    setActiveUser(this, user);
                  }}
                />
              )}
            />
            <Route
              exact
              path={['/overview', '/trends', '/reminders', '/calendar', '/check-in']}
              render={() => (
                <div>
                  <HomePage
                    logoutHandler={() => {
                      logoutUser(this);
                    }}
                    activeUser={this.state.activeUser}
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
