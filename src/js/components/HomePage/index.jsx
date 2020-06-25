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
import Trends from '../Trends';
import Reminders from '../Reminders';
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
          <SideBar logoutHandler={this.props.logoutHandler} activeUser={this.props.activeUser} />
        </div>
        <div id="HomeContentWrapper">
          {/* Similar to a switch statement - shows the component depending on the URL path */}
          {/* Each Route below shows a different component depending on the exact path in the URL  */}
          <Switch>
            <Route exact path="/overview" render={() => <Overview />} />
            <Route exact path="/trends" render={() => <Trends />} />
            <Route exact path="/reminders" render={() => <Reminders />} />
            <Route exact path="/calendar" render={() => <Calendar />} />
            <Route exact path="/check-in" render={() => <CheckIn />} />
            <Route exact path="/overview/logWeight" render={() => <LogWeight />} />
            <Route exact path="/overview/logWater" render={() => <LogWater />} />
            <Route exact path="/overview/logCalories" render={() => <LogCalories />} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default HomePage;
