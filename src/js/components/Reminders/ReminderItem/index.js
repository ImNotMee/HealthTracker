'use strict';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import DoneIcon from '@material-ui/icons/Done';
import EditIcon from '@material-ui/icons/Edit';
import goodIcon from '../../../../assets/good_status.png';
import badIcon from '../../../../assets/bad_status.png';
import hourglassIcon from '../../../../assets/hourglass.png';
import { playSound } from '../../../actions/notification';
import { REMINDER_STATUS } from '../../../constants';
import './styles.css';

class ReminderItem extends Component {
  state = {
    reminder: this.props.reminder,
    user: this.props.activeUser,
  };

  componentDidMount() {
    const currTime = new Date().getTime();
    const reminderTime = new Date(this.state.reminder.time);
    const time = reminderTime - currTime;
    if (!this.notificationExists()) {
      this.reminderTimer = setTimeout(() => {
        playSound();
        this.props.notifyAboutReminder(this.state.reminder);
      }, time);
      this.props.addTimerHandler(this.state.reminder.id, this.reminderTimer);
    }
  }

  notificationExists() {
    let i;
    for (i = 0; i < this.props.activeUser?.timers.length; i++) {
      if (this.props.activeUser?.timers[i].id === this.state.reminder.id) {
        return true;
      }
    }
    return false;
  }

  getStatusIcon = (status) => {
    const statusMap = {
      [REMINDER_STATUS.active]: hourglassIcon,
      [REMINDER_STATUS.completed]: goodIcon,
      [REMINDER_STATUS.overdue]: badIcon,
    };

    return statusMap[status];
  };

  render() {
    const { reminder } = this.props;
    const options = {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
    };
    const dateTimeValue = new Date(reminder?.time);
    const dateTimeStr = new Intl.DateTimeFormat('en-US', options).format(dateTimeValue);
    return (
      <div id="ReminderItemWrapper">
        <div>
          <img
            id="ReminderStatusIcon"
            src={this.getStatusIcon(reminder.status)}
            alt="reminder status"
          />
        </div>
        <div id="ReminderDetailsWrapper">
          <p>
            <strong> {reminder?.name} </strong> <br />
            <strong> {dateTimeStr} </strong> <br />
            {reminder?.note}
          </p>
        </div>
        <div id="ReminderActionsWrapper">
          <IconButton
            onClick={() => {
              this.props.completeReminderHandler(
                reminder.category,
                reminder.id,
                this.reminderTimer,
              );
            }}
            aria-label="done"
          >
            <DoneIcon />
          </IconButton>
          <Link
            to={`/reminders/add/${reminder?.category}/${reminder?.subCategory}/${reminder?.name}/${reminder?.time}/${reminder?.note}/${reminder?.id}`}
          >
            <IconButton aria-label="edit">
              <EditIcon />
            </IconButton>
          </Link>
          <IconButton
            onClick={() => {
              this.props.deleteReminderHandler(reminder.category, reminder.id, this.reminderTimer);
            }}
            aria-label="delete"
          >
            <DeleteIcon />
          </IconButton>
        </div>
      </div>
    );
  }
}

export default ReminderItem;
