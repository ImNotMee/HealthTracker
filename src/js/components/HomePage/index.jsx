import React, { Component } from 'react';
import { Route, Switch, BrowserRouter, useRouteMatch, NavLink } from 'react-router-dom';
import SideBar from '../SideBar';
import WeightLog from '../WeightLog';
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
            <Route exact path="/overview" render={() => <WeightLog />} />
            <Route exact path="/trends" render={() => <Trends />} />
            <Route exact path="/reminders" render={() => <Reminders />} />
            <Route exact path="/calendar" render={() => <Calendar />} />
            <Route exact path="/check-in" render={() => <CheckIn />} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default HomePage;
