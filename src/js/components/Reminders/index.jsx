import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import ReminderItem from './ReminderItem';
import { HEALTH_CATEGORIES } from '../../constants';
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

  loadReminders;

  render() {
    return (
      <div id="RemindersWrapper">
        <div id="RemindersView" className="windowWrapper">
          <span className="catTitle"> Medical Health </span>
          <div className="titleLine" />
          {this.state.user?.reminders[HEALTH_CATEGORIES.medical].length === 0 ? (
            <EmptyReminderList />
          ) : (
            this.state.user?.reminders[HEALTH_CATEGORIES.medical].map((reminder) => {
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
          <span className="catTitle"> Mental Health </span>
          <div className="titleLine" />
          {this.state.user?.reminders[HEALTH_CATEGORIES.mental].length === 0 ? (
            <EmptyReminderList />
          ) : (
            this.state.user?.reminders[HEALTH_CATEGORIES.mental].map((reminder) => {
              return (
                <ReminderItem
                  key={reminder.id}
                  reminder={reminder}
                  activeUser={this.state.user}
                  addTimerHandler={this.props.addTimerHandler}
                  notifyAboutReminder={this.props.notifyAboutReminder}
                  completeReminderHandler={this.props.completeReminderHandler}
                  deleteReminderHandler={this.props.deleteReminderHandler}
                />
              );
            })
          )}
          <span className="catTitle"> Physical Health </span>
          <div className="titleLine" />
          {this.state.user?.reminders[HEALTH_CATEGORIES.phsycial].length === 0 ? (
            <EmptyReminderList />
          ) : (
            this.state.user?.reminders[HEALTH_CATEGORIES.phsycial].map((reminder) => {
              return (
                <ReminderItem
                  key={reminder.id}
                  reminder={reminder}
                  activeUser={this.state.user}
                  addTimerHandler={this.props.addTimerHandler}
                  notifyAboutReminder={this.props.notifyAboutReminder}
                  completeReminderHandler={this.props.completeReminderHandler}
                  deleteReminderHandler={this.props.deleteReminderHandler}
                />
              );
            })
          )}
        </div>

        <NavLink id="FabNavLink" to="/reminders/add">
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
