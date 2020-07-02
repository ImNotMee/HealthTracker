import React, { Component } from 'react';
import alertIcon from '../../../../assets/alert.png';
import bellIcon from '../../../../assets/bell.png';
import './styles.css';
import { NOTIFICATION_TYPE } from '../../../constants';

class Notification extends Component {
  state = {
    id: this.props.notification?.id,
    type: this.props.notification?.type,
    title: this.props.notification?.title,
    message: this.props.notification?.message,
  };

  render() {
    return (
      <div id="NotificationItemWrapper" className={[this.state.type]}>
        <img
          id="NotifIcon"
          src={this.state.type === NOTIFICATION_TYPE.alert ? alertIcon : bellIcon}
          alt="notification-icon"
        />
        <span className="type"> {this.state.type}! &nbsp; </span>
        <span> {this.state.title} </span>
        <span
          className="closeBtn"
          onClick={() => {
            this.props.removeNotificationHandler();
          }}
        >
          &times;
        </span>
      </div>
    );
  }
}

export default Notification;
