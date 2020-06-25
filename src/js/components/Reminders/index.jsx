import React, { Component } from 'react';
import './styles.css';

class Reminders extends Component {
  state = {
    user: this.props.activeUser,
  };

  render() {
    return <div id="RemindersWrapper">some reminder text and stuff</div>;
  }
}

export default Reminders;
