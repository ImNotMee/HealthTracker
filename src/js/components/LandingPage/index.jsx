import React, {Component} from 'react';

// Importing components
import Header from './Header'
import ContentWrapper from './ContentWrapper'

// Importing actions/required methods
import {onLogin} from "../../actions/login";

class LandingPage extends Component {

    state = {
        users: [],
        loginUserIdMap: {
            userpass: 0
        },
        userEmail:'test',
        userPassword:'test',
        invalidLogin: false,
      };

    render() {
        return (
            <div>
                <Header 
                    loginValidityStatus={this.state.invalidLogin}
                    loginHandler={(email, password) => {onLogin(this, email, password)}}
                />
                <ContentWrapper/>
            </div>
        );
    }
}

export default LandingPage;