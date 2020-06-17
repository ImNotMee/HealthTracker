import React, {Component} from 'react';

import Header from './Header'
import ContentWrapper from './ContentWrapper'

const log = console.log;

class LandingPage extends Component {

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
            <div>
                <Header 
                    loginValidityStatus={this.state.invalidLogin}
                    loginHandler={this.onLogin.bind(this)}
                />
                <ContentWrapper/>
            </div>
        );
    }
}

export default LandingPage;