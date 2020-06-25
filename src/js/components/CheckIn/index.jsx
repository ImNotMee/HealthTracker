import React, { Component } from 'react';
import './styles.css';

class Calendar extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    user: this.props.activeUser,
  };
  render() {
    return <div id="CalendarWrapper">some check-in text and stuff</div>;
  }
}

export default Calendar;
