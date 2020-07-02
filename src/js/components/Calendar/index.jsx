import React, { Component } from 'react';
import './styles.css';
import CalendarModule from './calendar.js';
import { getMonth, loadAppointments, loadStreaks } from '../../actions/calendarItems';

class Calendar extends Component {
  state = {
    user: this.props.activeUser,
    type: 'calendar',
    items: [],
  };

  updateType(type) {
    if (type === 'calendar') {
      const appList = loadAppointments(this.state.user.hash);
      this.setState({
        type: 'calendar',
        items: appList,
      });
    } else if (type === 'streaks') {
      const streaksList = loadStreaks(this.state.user.hash);
      this.setState({
        type: 'streaks',
        items: streaksList,
      });
    }
  }

  render() {
    return (
      <div id="CalendarWrapper">
        <h1 id="month">{getMonth()}</h1>
        <div id="calendarContainer">
          <button id="tabs" onClick={() => this.updateType('calendar')}>
            Calendar
          </button>
          <button id="tabs" onClick={() => this.updateType('streaks')}>
            Streaks
          </button>
        </div>
        <CalendarModule user={this.state.user} type={this.state.type} items={this.state.items} />
      </div>
    );
  }
}

export default Calendar;
