import React, { Component } from 'react';
import alertIcon from '../../../../assets/alert.png';
import bellIcon from '../../../../assets/bell.png';
import './styles.css';
import { NOTIFICATION_TYPE } from '../../../constants';

class Notification extends Component {
  state = {
    id: this.props.notification?._id,
    type: this.props.notification?.type,
    title: this.props.notification?.title,
    message: this.props.notification?.message,
  };

  render() {
    return (
      <div id="NotificationItemWrapper" className={[this.props.notification?.type]}>
        <img
          id="NotifIcon"
          src={this.props.notification?.type === NOTIFICATION_TYPE.alert ? alertIcon : bellIcon}
          alt="notification-icon"
        />
        <span className="type"> {this.props.notification?.type}! &nbsp; </span>
        <span> {this.props.notification?.title} </span>
        <span
          className="closeBtn"
          onClick={() => {
            this.props.removeNotificationHandler(this.props.notification?._id);
          }}
        >
          &times;
        </span>
      </div>
    );
  }
}

export default Notification;
