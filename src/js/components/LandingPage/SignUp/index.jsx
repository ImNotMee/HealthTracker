'use-strict';
import React, { Component } from 'react';
import { signUpUser } from '../../../actions/signUp';
import './styles.css';

class SignUpForm extends Component {
  state = {
    first: '',
    last: '',
    email: '',
    password: '',
    sex: '',
  };

  onInputChangeHandler = (event) => {
    const TARGET = event.target;
    this.setState({
      [TARGET.name]: TARGET.value,
    });
  };

  render() {
    return (
      <div id="SignUpForm">
        <input
          type="text"
          id="firstName"
          placeholder="First Name"
          name="first"
          value={this.state.first}
          onChange={this.onInputChangeHandler}
        />
        <input
          type="text"
          id="lastName"
          placeholder="Last Name"
          name="last"
          value={this.state.last}
          onChange={this.onInputChangeHandler}
        />
        <input
          type="email"
          id="email"
          placeholder="Email"
          name="email"
          value={this.state.email}
          onChange={this.onInputChangeHandler}
        />
        <input
          type="password"
          id="password"
          placeholder="password"
          name="password"
          value={this.state.password}
          onChange={this.onInputChangeHandler}
        />
        <div>
          <label htmlFor="male">
            Male
            <input
              type="radio"
              id="male"
              name="sex"
              value="male"
              onChange={this.onInputChangeHandler}
            />
          </label>
          <label htmlFor="female">
            Female
            <input
              type="radio"
              id="female"
              name="sex"
              value="female"
              onChange={this.onInputChangeHandler}
            />
          </label>
        </div>
        <button onClick={() => signUpUser(this)}> Create Account </button>
      </div>
    );
  }
}

export default SignUpForm;
