import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import SideBar from '../SideBar';
import Overview from '../Overview';
import LogWeight from '../LogPages/LogWeight';
import LogWater from '../LogPages/LogWater';
import LogCalories from '../LogPages/LogCalories';
import LogMood from '../LogPages/LogMood';
import LogSleep from '../LogPages/LogSleep';
import LogStress from '../LogPages/LogStress';
import LogSick from '../LogPages/LogSick';
import Trends from '../Trends';
import Reminders from '../Reminders';
import AddReminder from '../Reminders/AddReminder';
import Calendar from '../Calendar';
import CheckIn from '../CheckIn';

import './styles.css';

class HomePage extends Component {
  state = {
    user: this.props.activeUser,
    check: false,
  };

  render() {
    return (
      <div id="HomeWrapper">
        <div id="NavBarWrapper">
          <SideBar logoutHandler={this.props.logoutHandler} activeUser={this.state.user} />
        </div>
        <div id="HomeContentWrapper">
          {/* Similar to a switch statement - shows the component depending on the URL path */}
          {/* Each Route below shows a different component depending on the exact path in the URL  */}
          <Switch>
            {/* Page nav */}
            <Route exact path="/overview" render={() => <Overview />} />
            <Route exact path="/trends" render={() => <Trends />} />
            <Route
              exact
              path="/reminders"
              render={() => (
                <Reminders
                  activeUser={this.state.user}
                  setReminderStatus={this.props.setReminderStatus}
                  completeReminderHandler={this.props.completeReminderHandler}
                  deleteReminderHandler={this.props.deleteReminderHandler}
                />
              )}
            />
            <Route
              exact
              path="/calendar"
              render={() => <Calendar activeUser={this.state.user} />}
            />
            <Route
              exact
              path="/check-in"
              render={() => (
                <CheckIn
                  activeUser={this.state.user}
                  checkInHandler={this.props.checkInHandler}
                  checkoutHandler={this.props.checkoutHandler}
                  locations={this.props.locations}
                />
              )}
            />

            {/* Activity logging view nav */}
            <Route exact path="/overview/logWeight" render={() => <LogWeight />} />
            <Route exact path="/overview/logWater" render={() => <LogWater />} />
            <Route exact path="/overview/logCalories" render={() => <LogCalories />} />
            <Route exact path="/overview/logMood" render={() => <LogMood />} />
            <Route exact path="/overview/logSleep" render={() => <LogSleep />} />
            <Route exact path="/overview/logStress" render={() => <LogStress />} />
            <Route exact path="/overview/logSick" render={() => <LogSick />} />
            {/* Add Reminder view */}
            <Route
              exact
              path="/reminders/add/:cat?/:sub?/:name?/:time?/:note?/:id?"
              render={(props) => (
                <AddReminder
                  addReminderHandler={this.props.addReminderHandler}
                  editReminderHandler={this.props.editReminderHandler}
                  {...props}
                />
              )}
            />
          </Switch>
        </div>
      </div>
    );
  }
}

export default HomePage;
