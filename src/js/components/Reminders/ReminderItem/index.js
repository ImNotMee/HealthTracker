import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import DoneIcon from '@material-ui/icons/Done';
import EditIcon from '@material-ui/icons/Edit';
import goodIcon from '../../../../assets/good_status.png';
import badIcon from '../../../../assets/bad_status.png';
import hourglassIcon from '../../../../assets/hourglass.png';
import './styles.css';
import { REMINDER_STATUS } from '../../../constants';

class ReminderItem extends Component {
  state = {
    reminder: this.props.reminder,
  };

  componentDidMount() {
    const currTime = new Date().getTime();
    const reminderTime = new Date(this.state.reminder.time);
    const time = reminderTime - currTime;
    const { category, id } = this.state.reminder;
    this.reminderTimer = setTimeout(() => {
      this.props.setReminderStatus(category, id, REMINDER_STATUS.overdue);
    }, time);
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
