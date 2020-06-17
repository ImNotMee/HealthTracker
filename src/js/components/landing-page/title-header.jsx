import React, {Component} from 'react';
import LoginForm from './login-form';
import logo from '../../../assets/logo.svg'
import {APP_NAME} from '../../constants';
import '../../../css/header.css';

class Header extends Component {

    render() {
        return (
            <div id='TitleHeader'>
                <div className="logoContainer">
                    <img src={logo} width="150px" className="App-logo" alt="logo" />
                </div>
                <h1> {APP_NAME} </h1>
                <LoginForm 
                    invalidLoginStatus={this.props.loginValidityStatus}
                    loginHandler={this.props.loginHandler}
                />
            </div>
        );
    }
}

export default Header;

