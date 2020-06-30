import React, { Component } from 'react';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import DoneIcon from '@material-ui/icons/Done';
import EditIcon from '@material-ui/icons/Edit';
import './styles.css';

class ReminderItem extends Component {
  render() {
    const { reminder } = this.props;
    return (
      <div id="ReminderItemWrapper">
        <div>
          <img alt="category" />
        </div>
        <div id="ReminderDetailsWrapper">
          <p>
            <strong> {reminder?.name} </strong> <br />
            <strong> time left: {reminder?.time} </strong> <br />
            {reminder?.note}
          </p>
        </div>
        <div id="ReminderActionsWrapper">
          <IconButton onClick={this.props.doneReminderHandler} aria-label="done">
            <DoneIcon />
          </IconButton>
          <IconButton onClick={this.props.editReminderHandler} aria-label="edit">
            <EditIcon />
          </IconButton>
          <IconButton onClick={this.props.deleteReminderHandler} aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </div>
      </div>
    );
  }
}

export default ReminderItem;
