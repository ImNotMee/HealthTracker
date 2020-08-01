import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import ListSelector from '../General/ListSelector';
import { onInputChangeHandler } from '../../actions/utils';
import { ADMIN_ACCOUNT_TYPE } from '../../constants';
import './styles.css';

class UserSettings extends Component {
  state = {
    user: this.props.activeUser,
    first: this.props.activeUser?.firstName,
    last: this.props.activeUser?.lastName,
    email: this.props.activeUser?.email,
    pass: this.props.activeUser?.password,
    sex: this.props.activeUser?.sex,
    isFirstValid: true,
    isLastValid: true,
    isEmailValid: true,
    isPassValid: true,
    isSexValid: true,
    newInfoSet: false,
  };

  goToAlertSystem = () => {
    if (this.state.newInfoSet) {
      return (
        <Redirect
          to={this.props.activeUser.type === ADMIN_ACCOUNT_TYPE ? '/manage-users' : '/overview'}
        />
      );
    }
  };

  displayErrorMsg = () => {
    const { isFirstValid, isLastValid, isEmailValid, isPassValid, isSexValid } = this.state;
    if (isFirstValid && isLastValid && isEmailValid && isPassValid && isSexValid) {
      return '';
    } else {
      return <span className="errorMsg"> Input fields in red are missing</span>;
    }
  };

  render() {
    return (
      <div id="UserSettingsWrapper">
        {this.goToAlertSystem()}
        <div id="AddLocationWindow" className="windowWrapper">
          <h1> Settings </h1>
          {this.displayErrorMsg()}
          <div className="locationInputWrapper">
            <span className="inputLabel"> First Name: </span>
            <input
              className={`input ${this.state.isFirstValid ? '' : 'invalidInput'}`}
              type="text"
              id="FirstName"
              name="first"
              placeholder="First name"
              value={this.state.first === undefined ? '' : this.state.first}
              onChange={(event) => {
                onInputChangeHandler(this, event);
              }}
            />
          </div>
          <div className="locationInputWrapper">
            <span className="inputLabel"> Last Name: </span>
            <input
              className={`input ${this.state.isLastValid ? '' : 'invalidInput'}`}
              type="text"
              id="LastName"
              name="last"
              placeholder="Last Name"
              value={this.state.last === undefined ? '' : this.state.last}
              onChange={(event) => {
                onInputChangeHandler(this, event);
              }}
            />
          </div>
          <div className="locationInputWrapper">
            <span className="inputLabel"> Email: </span>
            <input
              className={`input ${this.state.isEmailValid ? '' : 'invalidInput'}`}
              type="text"
              id="Email"
              name="email"
              placeholder="Email"
              value={this.state.email === undefined ? '' : this.state.email}
              onChange={(event) => {
                onInputChangeHandler(this, event);
              }}
            />
          </div>
          <div className="locationInputWrapper">
            <span className="inputLabel"> Password: </span>
            <input
              className={`input ${this.state.isPassValid ? '' : 'invalidInput'}`}
              type="password"
              id="Password"
              name="pass"
              placeholder="Password"
              value={this.state.pass === undefined ? '' : this.state.pass}
              onChange={(event) => {
                onInputChangeHandler(this, event);
              }}
            />
          </div>
          <div className="reminderInputWrapper">
            <span className="inputLabel"> Category: </span>
            <ListSelector
              id="Sex"
              className={this.state.isSexValid ? '' : 'invalidInput'}
              name="sex"
              autoComplete="false"
              defaultValue={this.state.sex === undefined ? '' : this.state.sex}
              options={['male', 'female']}
              onChangeHandler={(event) => {
                onInputChangeHandler(this, event);
              }}
            />
          </div>
          <button
            className="primary-btn"
            onClick={() => {
              this.props.saveUserInfoHandler(this);
            }}
          >
            Save
          </button>
        </div>
      </div>
    );
  }
}

export default UserSettings;
