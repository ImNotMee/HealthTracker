import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import ListSelector from '../../General/ListSelector';
import { onSelectHandler, onInputChangeHandler } from '../../../actions/utils';
import './styles.css';
import {
  HEALTH_CATEGORIES,
  HEALTH_SUB_CATEGORIES,
  ADMIN_ACCOUNT_TYPE,
  ADMIN_REMINDER_TYPES,
} from '../../../constants';

class AddReminder extends Component {
  state = {
    category: this.props.match?.params.cat,
    subCategory: this.props.match?.params.sub,
    reminderName: this.props.match?.params.name,
    reminderTime: this.props.match?.params.time,
    reminderNote: this.props.match?.params.note,
    isCategoryValid: true,
    isSubCategoryValid: true,
    isNameValid: true,
    isDateTimeValid: true,
    isNoteValid: true,
    newReminderAdded: false,
  };

  goToReminders = () => {
    if (this.state.newReminderAdded) {
      return <Redirect to="/reminders" />;
    }
  };

  displayErrorMsg = () => {
    const { isCategoryValid, isSubCategoryValid, isNameValid, isDateTimeValid } = this.state;
    if (isCategoryValid && isSubCategoryValid && isNameValid && isDateTimeValid) {
      return '';
    } else {
      return <span className="errorMsg"> Input fields in red are missing </span>;
    }
  };

  render() {
    const { activeUser } = this.props;
    return (
      <div id="AddReminderWrapper">
        {this.goToReminders()}
        <div id="AddReminderWindow" className="windowWrapper">
          <h1> Add Reminder </h1>
          {this.displayErrorMsg()}
          <br />
          <div className="reminderInputWrapper">
            <span className="inputLabel"> Category: </span>
            <ListSelector
              id="HealthCatList"
              className={this.state.isCategoryValid ? '' : 'invalidInput'}
              name="categories"
              autoComplete="false"
              defaultValue={this.state.category === undefined ? '' : this.state.category}
              options={
                activeUser.type === ADMIN_ACCOUNT_TYPE
                  ? Object.values(ADMIN_REMINDER_TYPES)
                  : Object.values(HEALTH_CATEGORIES)
              }
              onChangeHandler={(event) => {
                onSelectHandler(this, event, 'category');
              }}
            />
          </div>
          {this.state.category !== undefined && activeUser.type !== ADMIN_ACCOUNT_TYPE ? (
            <div className="reminderInputWrapper">
              <span className="inputLabel"> Sub-Category: </span>
              <ListSelector
                id="SubHealthCatList"
                className={this.state.isSubCategoryValid ? '' : 'invalidInput'}
                name="subCategories"
                autoComplete="false"
                defaultValue={this.state.subCategory === undefined ? '' : this.state.subCategory}
                options={HEALTH_SUB_CATEGORIES[this.state.category]}
                onChangeHandler={(event) => {
                  onSelectHandler(this, event, 'subCategory');
                }}
              />
            </div>
          ) : (
            ''
          )}
          <div className="reminderInputWrapper">
            <span className="inputLabel"> Title: </span>
            <input
              id="ReminderTitleInput"
              className={`input ${this.state.isNameValid ? '' : 'invalidInput'}`}
              type="text"
              name="reminderName"
              value={this.state.reminderName === undefined ? '' : this.state.reminderName}
              placeholder="Title"
              onChange={(event) => {
                onInputChangeHandler(this, event);
              }}
            />
          </div>
          <div className="reminderInputWrapper">
            <span className="inputLabel"> When to remind: </span>
            <input
              className={`input ${this.state.isDateTimeValid ? '' : 'invalidInput'}`}
              type="datetime-local"
              id="DateTimeInput"
              name="reminderTime"
              value={this.state.reminderTime === undefined ? '' : this.state.reminderTime}
              min={new Date()}
              onChange={(event) => {
                onInputChangeHandler(this, event);
              }}
            />
          </div>
          <div className="reminderInputWrapper">
            <span className="inputLabel"> Notes: </span>
            <textarea
              id="ReminderNotesInput"
              className={`input ${this.state.isNoteValid ? '' : 'invalidInput'}`}
              name="reminderNote"
              maxLength="225"
              placeholder="Notes"
              value={this.state.reminderNote === undefined ? '' : this.state.reminderNote}
              onChange={(event) => {
                onInputChangeHandler(this, event);
              }}
            />
            <br />
            <span className="charCount">
              {this.state.reminderNote !== undefined ? this.state['reminderNote'].length : '0'}/225
            </span>
          </div>
          {this.props.match?.params.id !== undefined ? (
            <button
              className="primary-btn"
              onClick={() => {
                this.props.editReminderHandler(
                  this,
                  this.props.match.params.cat,
                  this.props.match.params.id,
                );
              }}
            >
              {' '}
              Edit{' '}
            </button>
          ) : (
            <button
              className="primary-btn"
              onClick={() => {
                this.props.addReminderHandler(this);
              }}
            >
              {' '}
              Add{' '}
            </button>
          )}
        </div>
      </div>
    );
  }
}

export default AddReminder;
