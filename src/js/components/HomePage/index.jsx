import React, { Component } from 'react';
import { Route, Switch, BrowserRouter, useRouteMatch, NavLink } from 'react-router-dom';
import SideBar from '../SideBar';
import Overview from '../Overview';
import LogWeight from '../LogWeight';
import LogWater from '../LogWater';
import LogCalories from '../LogCalories';
import Trends from '../Trends';
import Reminders from '../Reminders';
import Calendar from '../Calendar';
import CheckIn from '../CheckIn';

import './styles.css';

class HomePage extends Component {
  constructor(props) {
    super(props);
  }

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
            <Route exact path="/overview" render={() => <LogWeight />} />
            <Route exact path="/trends" render={() => <LogWater />} />
            <Route exact path="/reminders" render={() => <LogCalories />} />
            <Route exact path="/calendar" render={() => <Calendar />} />
            <Route exact path="/check-in" render={() => <CheckIn />} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default HomePage;
