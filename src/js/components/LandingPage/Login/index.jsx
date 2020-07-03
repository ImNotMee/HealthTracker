'use-strict';
import React, { Component } from 'react';
import { onInputChangeHandler } from '../../../actions/utils';
import './styles.css';

class LoginForm extends Component {
  state = {
    email: '',
    password: '',
    invalidLogin: this.props.invalidLoginStatus,
  };

  displayErrorMsg = () => {
    if (!this.props.invalidLoginStatus) {
      return '';
    } else {
      return <span className="errorMsg"> Invalid email or password </span>;
    }
  };

  render() {
    return (
      <div id="LoginFromWrapper">
        {this.displayErrorMsg()}
        <div id="LoginForm">
          <input
            className={`space input ${this.props.invalidLoginStatus ? 'invalidInput' : ''}`}
            type="email"
            value={this.state.email}
            onChange={(event) => {
              onInputChangeHandler(this, event);
            }}
            placeholder="email"
            name="email"
          />
          <input
            className={`space input ${this.props.invalidLoginStatus ? 'invalidInput' : ''}`}
            type="password"
            value={this.state.password}
            onChange={(event) => {
              onInputChangeHandler(this, event);
            }}
            name="password"
            placeholder="password"
          />
          <button
            className="space primary-btn"
            onClick={() => {
              this.props.loginHandler(this.state.email, this.state.password);
            }}
          >
            {' '}
            login{' '}
          </button>
        </div>
      </div>
    );
  }
}

export default LoginForm;
