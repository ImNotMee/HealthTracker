import React, { Component } from 'react';
import './styles.css';

class Calendar extends Component {
  state = {
    user: this.props.activeUser,
  };
  render() {
    return <div id="CalendarWrapper">some calendar text and stuff</div>;
  }
}

export default Calendar;
