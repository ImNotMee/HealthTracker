import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import ReminderItem from './ReminderItem';
import { HEALTH_CATEGORIES, USER_ACCOUNT_TYPE, ADMIN_REMINDER_TYPES } from '../../constants';
import './styles.css';

const EmptyReminderList = () => {
  return (
    <div id="EmptyReminderList">
      <p> No reminders set </p>
    </div>
  );
};

class Reminders extends Component {
  state = {
    user: this.props.activeUser,
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      this.props.activeUser !== prevProps.activeUser &&
      this.props.activeUser !== prevState.user
    ) {
      this.setState({ user: this.props.activeUser });
    }
  }

  getReminderCatView = (type) => {
    return (
      <div key={type}>
        <span className="catTitle"> {type} </span>
        <div className="titleLine" />
        {this.state.user?.reminders[type].length === 0 ? (
          <EmptyReminderList />
        ) : (
          // Todo: make a get reqest that send the type and gets a list of all reminders
          this.state.user?.reminders[type].map((reminder) => {
            return (
              <ReminderItem
                key={reminder.id}
                reminder={reminder}
                activeUser={this.props.activeUser}
                addTimerHandler={this.props.addTimerHandler}
                notifyAboutReminder={this.props.notifyAboutReminder}
                completeReminderHandler={this.props.completeReminderHandler}
                deleteReminderHandler={this.props.deleteReminderHandler}
              />
            );
          })
        )}
      </div>
    );
  };

  getUserReminderView = () => {
    const userReminderTypes = [
      HEALTH_CATEGORIES.medical,
      HEALTH_CATEGORIES.mental,
      HEALTH_CATEGORIES.phsycial,
    ];
    return (
      <div id="RemindersView" className="windowWrapper">
        {userReminderTypes.map((type) => {
          return this.getReminderCatView(type);
        })}
      </div>
    );
  };

  getAdminReminderView = () => {
    const adminReminderTypes = [ADMIN_REMINDER_TYPES.task];
    return (
      <div id="RemindersView" className="windowWrapper">
        {adminReminderTypes.map((type) => {
          return this.getReminderCatView(type);
        })}
      </div>
    );
  };

  render() {
    return (
      <div key={this.state.user} id="RemindersWrapper">
        {this.state.user?.type === USER_ACCOUNT_TYPE
          ? this.getUserReminderView()
          : this.getAdminReminderView()}
        <NavLink className="fabNavLink" to="/reminders/add">
          <Fab variant="extended" id="Fab" color="primary" aria-label="add">
            <AddIcon />
            Add Reminder
          </Fab>
        </NavLink>
      </div>
    );
  }
}

export default Reminders;
