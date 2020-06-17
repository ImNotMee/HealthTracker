import React, {Component} from 'react';
import Header from './js/components/landing-page/title-header'
import './css/App.css';
import SignUpForm from './js/components/landing-page/signup-form';
const log = console.log;
class App extends Component {
  
  state = {
    users: [],
    loginUserIdMap: {
      userpass: 0
    },
    activeUser: null,
    userEmail:'test',
    userPassword:'test',
    invalidLogin: false,
  };

  onLogin = (email, password) => {
    const authKey = this.getUserHash(email, password);
    const user = this.getUserByAuthKey(authKey)

    // check login attempt
    if (user === null) {
      this.setState({
        invalidLogin: true
      })
    } else {
      this.setState({
        activeUser: user,
        userEmail: email, 
        userPassword: password,
        invalidLogin: false
      });
    }
  }

  getUserHash = (email, password) => {
    return (email + password);
  }

  getUserByAuthKey = (authKey) => {
    const userId = this.state.loginUserIdMap[authKey]
    if (userId === undefined) {
      log("Invalid aogin attempt. Try again")
      return null;
    }
    log("Successful login")
    return this.getUserById(userId);
  }
  getUserById = (id) => {
    return this.state.users[id];
  }

  render() {
    return (
      <div className="App">
        <Header 
          loginValidityStatus={this.state.invalidLogin}
          loginHandler={this.onLogin.bind(this)}
        />
        <SignUpForm/>
      </div>
    );
  }
}

export default App;
