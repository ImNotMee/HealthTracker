import React, { Component } from 'react';
import './styles.css';
import CalendarModule from './calendar.js';

class Calendar extends Component {
  state = {
    user: this.props.activeUser,
    type: 'calendar',
  };

  getMonth() {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    let d = new Date();
    return months[d.getMonth()];
  }

  updateType(type) {
    if (type === 'calendar') {
      this.setState({
        user: this.props.activeUser,
        type: 'calendar',
      });
    } else if (type === 'streaks') {
      this.setState({
        user: this.props.activeUser,
        type: 'streaks',
      });
    }
  }

  render() {
    return (
      <div id="CalendarWrapper">
        <h1 id="month">{this.getMonth()}</h1>
        <div id="calendarContainer">
          <button id="tabs" onClick={() => this.updateType('calendar')}>
            Calendar
          </button>
          <button id="tabs" onClick={() => this.updateType('streaks')}>
            Streaks
          </button>
        </div>
        <CalendarModule type={this.state.type} />
      </div>
    );
  }
}

export default Calendar;
