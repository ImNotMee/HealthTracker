import React, { Component } from 'react';
import { Redirect, Route, Switch, BrowserRouter } from 'react-router-dom';

import LandingPage from './js/components/LandingPage';
import HomePage from './js/components/HomePage';

import {
  sendAlertHandler,
  addLocationHandler,
  deleteLocationHandler,
} from './js/actions/adminCheckIn';
import { addUserHandler } from './js/actions/signUp';
import { setActiveUser } from './js/actions/login';
import { logoutUser } from './js/actions/logout';
import { removeNotificationHandler } from './js/actions/notification';
import { checkInHandler, checkoutHandler } from './js/actions/checkIn';
import {
  addReminderHandler,
  editReminderHandler,
  completeReminderHandler,
  deleteReminderHandler,
  notifyAboutReminder,
} from './js/actions/reminders';
import {
  USERS,
  PAGE_ADDRESS,
  LOCATIONS,
  USER_ACCOUNT_TYPE,
  ADMIN_ACCOUNT_TYPE,
} from './js/constants';
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

    if (
      window.location.pathname === '/signup' &&
      this.state.activeUser.type === USER_ACCOUNT_TYPE
    ) {
      return <Redirect to="/overview" />;
    }

    if (
      window.location.pathname === '/signup' &&
      this.state.activeUser.type === ADMIN_ACCOUNT_TYPE
    ) {
      return <Redirect to="/manage-users" />;
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
                    removeNotificationHandler={(id) => {
                      removeNotificationHandler(this, id);
                    }}
                    checkInHandler={(location) => {
                      checkInHandler(this, location);
                    }}
                    checkoutHandler={() => {
                      checkoutHandler(this);
                    }}
                    addReminderHandler={(reminderCtx) => {
                      addReminderHandler(this, reminderCtx);
                    }}
                    editReminderHandler={(reminderCtx, category, id) => {
                      editReminderHandler(this, reminderCtx, category, id);
                    }}
                    notifyAboutReminder={(reminder) => {
                      notifyAboutReminder(this, reminder);
                    }}
                    completeReminderHandler={(category, id, timeout) => {
                      completeReminderHandler(this, category, id, timeout);
                    }}
                    deleteReminderHandler={(category, id, timeout) => {
                      deleteReminderHandler(this, category, id, timeout);
                    }}
                    sendAlertHandler={(location) => {
                      sendAlertHandler(this, location);
                    }}
                    addLocationHandler={(location) => {
                      addLocationHandler(this, location);
                    }}
                    deleteLocationHandler={(adCtx, location) => {
                      deleteLocationHandler(this, adCtx, location);
                    }}
                    activeUser={this.state.activeUser}
                    userDB={this.state.userDB}
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
