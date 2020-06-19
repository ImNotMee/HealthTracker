import React, { Component } from 'react';
import { Redirect, Route, Switch, BrowserRouter } from 'react-router-dom';
import LandingPage from './js/components/LandingPage';
import { setActiveUser } from './js/actions/login';
import './App.css';
import HomePage from './js/components/HomePage';
import Overview from './js/components/Overview';

const log = console.log();

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
      console.log('CHEKECCE:' + window.location.pathname);
      return <Redirect to="/home" />;
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
              path={['/home', '/overview', '/trends', '/reminders', '/calendar', '/check-in']}
              render={() => (
                <div>
                  <HomePage activeUser={this.state.activeUser} />
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
