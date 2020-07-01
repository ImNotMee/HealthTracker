import React, { Component } from 'react';
import './styles.css';
import CalendarModule from './calendar.js';
import { getMonth, loadData } from '../../actions/calendarItems';

class Calendar extends Component {
  state = {
    user: this.props.activeUser,
    type: 'calendar',
    calendarItems: null,
  };

  updateType(type) {
    if (type === 'calendar') {
      this.setState({
        user: this.props.activeUser,
        type: 'calendar',
        calendarItems: [],
      });
    } else if (type === 'streaks') {
      this.setState({
        user: this.props.activeUser,
        type: 'streaks',
        calendarItems: [],
      });
    }
  }

  render() {
    return (
      <div id="CalendarWrapper">
        <h1 id="month">{getMonth()}</h1>
        <div id="calendarContainer">
          <button id="tabs" onClick={this.updateType.bind(this, 'calendar')}>
            Calendar
          </button>
          <button id="tabs" onClick={this.updateType.bind(this, 'streaks')}>
            Streaks
          </button>
        </div>
        <CalendarModule type={this.state.type} calendarItems={this.state.calendarItems} />
      </div>
    );
  }
}

export default Calendar;
