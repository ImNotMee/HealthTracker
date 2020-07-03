'use-strict';
import React, { Component } from 'react';
import ListSelector from '../../General/ListSelector';
import { signUpUser } from '../../../actions/signUp';
import { onInputChangeHandler } from '../../../actions/utils';
import './styles.css';

class SignUpForm extends Component {
  state = {
    first: '',
    last: '',
    email: '',
    password: '',
    sex: '',
    isFirstValid: true,
    isLastValid: true,
    isEmailValid: true,
    isPassValid: true,
    isSexValid: true,
  };

  displayErrorMsg = () => {
    const { isFirstValid, isLastValid, isEmailValid, isPassValid, isSexValid } = this.state;
    if (isFirstValid && isLastValid && isEmailValid && isPassValid && isSexValid) {
      return '';
    } else {
      return (
        <span className="errorMsg">
          {' '}
          Input fields in red are invalid <br />
          <br />
        </span>
      );
    }
  };

  render() {
    return (
      <div id="SignUpForm" className="windowWrapper">
        <h1> Create Account </h1>
        {this.displayErrorMsg()}
        <input
          type="text"
          id="firstName"
          className={`signupInputSpace input ${this.state.isFirstValid ? '' : 'invalidInput'}`}
          placeholder="First Name"
          name="first"
          value={this.state.first}
          onChange={(event) => {
            onInputChangeHandler(this, event);
          }}
        />
        <input
          type="text"
          id="lastName"
          className={`signupInputSpace input ${this.state.isLastValid ? '' : 'invalidInput'}`}
          placeholder="Last Name"
          name="last"
          value={this.state.last}
          onChange={(event) => {
            onInputChangeHandler(this, event);
          }}
        />
        <input
          type="email"
          id="email"
          className={`signupInputSpace input ${this.state.isEmailValid ? '' : 'invalidInput'}`}
          placeholder="Email"
          name="email"
          value={this.state.email}
          onChange={(event) => {
            onInputChangeHandler(this, event);
          }}
        />
        <input
          type="password"
          id="password"
          className={`signupInputSpace input ${this.state.isPassValid ? '' : 'invalidInput'}`}
          placeholder="password"
          name="password"
          value={this.state.password}
          onChange={(event) => {
            onInputChangeHandler(this, event);
          }}
        />
        <div className="signupInputSpace">
          <ListSelector
            id="Sex"
            className={this.state.isSexValid ? '' : 'invalidInput'}
            name="sex"
            autoComplete="false"
            value={this.state.sex}
            options={['male', 'female']}
            onChangeHandler={(event) => {
              onInputChangeHandler(this, event);
            }}
          />
        </div>
        <button className="signupInputSpace primary-btn" onClick={() => signUpUser(this)}>
          {' '}
          Create Account{' '}
        </button>
      </div>
    );
  }
}

export default SignUpForm;
