import React, { Component } from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import ReminderItem from './ReminderItem';
import './styles.css';
import { NavLink } from 'react-router-dom';

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
          {this.state.user?.reminders.medicalReminders.length === 0 ? (
            <EmptyReminderList />
          ) : (
            this.state.user?.reminders.medicalReminders.map((reminder) => {
              return <ReminderItem reminder={reminder} />;
            })
          )}
          <span className="catTitle"> Mental Health </span>
          <div className="titleLine" />
          {this.state.user?.reminders.medicalReminders.length === 0 ? (
            <EmptyReminderList />
          ) : (
            this.state.user?.reminders.mentalReminders.map((reminder) => {
              return <ReminderItem reminder={reminder} />;
            })
          )}
          <span className="catTitle"> Physical Health </span>
          <div className="titleLine" />
          {this.state.user?.reminders.physicalReminders.map((reminder) => {
            return <ReminderItem reminder={reminder} />;
          })}
        </div>

        <Fab variant="extended" id="Fab" color="primary" aria-label="add">
          <AddIcon />
          <NavLink id="FabNavLink" to="/reminders/add">
            Add Reminder
          </NavLink>
        </Fab>
      </div>
    );
  }
}

export default Reminders;
