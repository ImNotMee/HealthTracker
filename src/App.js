import React, {Component} from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import LandingPage from './js/components/LandingPage'

import './App.css';

class App extends Component {
  
  state = {
    users: [],
    activeUser: null,
  };

  render() {
    return (
      <div className="App">
        <div>
        <BrowserRouter>
          <Switch> { /* Similar to a switch statement - shows the component depending on the URL path */ }
            { /* Each Route below shows a different component depending on the exact path in the URL  */ }
            <Route exact path='/' render={() => 
                            (<LandingPage state={this.state}/>)}/>
            
          </Switch>
        </BrowserRouter>
      </div>
      </div>
    );
  }
}

export default App;
