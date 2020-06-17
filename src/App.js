import React, {Component} from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import LandingPage from './js/components/LandingPage'

import {setActiveUser} from './js/actions/login'

import './App.css';

class App extends Component {
  
  // TODO: fix prop drilling for active user
  state = {
    activeUser: null,
  };

  render() {
    return (
      <div className="App">
        <div>
        <BrowserRouter>
          <Switch> { /* Similar to a switch statement - shows the component depending on the URL path */ }
            { /* Each Route below shows a different component depending on the exact path in the URL  */ }
            <Route exact path='/' 
                  render={() => (
                    <LandingPage 
                      state={this.state}
                      setActiveUserHandler={(user) => {setActiveUser(this, user)}}
                    />
                  )}
            />
            
          </Switch>
        </BrowserRouter>
      </div>
      </div>
    );
  }
}

export default App;
