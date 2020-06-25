import React, { Component } from 'react';
import './styles.css';
import CalendarModule from './calendar.js';

class Calendar extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    user: this.props.activeUser,
  };
  render() {
    return (
      <div id="CalendarWrapper">
        <CalendarModule />
      </div>
    );
  }
}

export default Calendar;
