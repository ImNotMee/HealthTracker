import React, { Component } from 'react';
import { Route, Switch, BrowserRouter, useRouteMatch, NavLink } from 'react-router-dom';
import SideBar from '../SideBar';
import Overview from '../Overview';
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
          <SideBar activeUser={this.props.activeUser} />
        </div>
        <div id="HomeContentWrapper">
          {/* Similar to a switch statement - shows the component depending on the URL path */}
          {/* Each Route below shows a different component depending on the exact path in the URL  */}
          <Switch>
            <Route exact path="/overview" render={() => <Overview />} />
            <Route
              exact
              path={'/trends'}
              render={() => (
                <div>
                  {' '}
                  <p> some trends text </p>{' '}
                </div>
              )}
            />
          </Switch>
        </div>
      </div>
    );
  }
}

export default HomePage;
