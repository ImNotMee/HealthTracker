import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Notification from '../General/Notification';
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

import { USER_CARD } from '../../constants'; // needs to be changed to server call later
import {
  setBMI,
  setWater,
  setCalories,
  setMood,
  setSleep,
  setStress,
  setSickness,
} from '../../actions/cardData';

class HomePage extends Component {
  state = {
    user: this.props.activeUser,
    user_card: USER_CARD,
    check: false,
  };

  render() {
    return (
      <div id="HomeWrapper">
        <div id="NavBarWrapper">
          <SideBar logoutHandler={this.props.logoutHandler} activeUser={this.state.user} />
        </div>
        <div id="HomeContentWrapper">
          <div id="NotificationWrapper">
            {this.state.user?.notifications.map((notification) => {
              return (
                <Notification
                  key={notification.id}
                  notification={notification}
                  removeNotificationHandler={this.props.removeNotificationHandler}
                />
              );
            })}
          </div>

          {/* Similar to a switch statement - shows the component depending on the URL path */}
          {/* Each Route below shows a different component depending on the exact path in the URL  */}
          <Switch>
            {/* Page nav */}
            <Route
              exact
              path="/overview"
              render={() => <Overview user_card={this.state.user_card} />}
            />
            <Route exact path="/trends" render={() => <Trends />} />
            <Route
              exact
              path="/reminders"
              render={() => (
                <Reminders
                  activeUser={this.state.user}
                  notifyAboutReminder={this.props.notifyAboutReminder}
                  completeReminderHandler={this.props.completeReminderHandler}
                  deleteReminderHandler={this.props.deleteReminderHandler}
                />
              )}
            />
            <Route exact path="/calendar" render={() => <Calendar />} />
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
            <Route
              exact
              path="/overview/logWeight"
              render={() => <LogWeight setBMI={(newBMI) => setBMI(this, newBMI)} />}
            />
            <Route
              exact
              path="/overview/logWater"
              render={() => <LogWater setWater={(newWater) => setWater(this, newWater)} />}
            />
            <Route
              exact
              path="/overview/logCalories"
              render={() => (
                <LogCalories setCalories={(newCalories) => setCalories(this, newCalories)} />
              )}
            />
            <Route
              exact
              path="/overview/logMood"
              render={() => <LogMood setMood={(newMood) => setMood(this, newMood)} />}
            />
            <Route
              exact
              path="/overview/logSleep"
              render={() => (
                <LogSleep
                  setSleep={(newSleepHours, newSleepQuality) =>
                    setSleep(this, newSleepHours, newSleepQuality)
                  }
                />
              )}
            />
            <Route
              exact
              path="/overview/logStress"
              render={() => <LogStress setStress={(newStress) => setStress(this, newStress)} />}
            />
            <Route
              exact
              path="/overview/logSick"
              render={() => <LogSick setSickness={(newSick) => setSickness(this, newSick)} />}
            />

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
