import React, { Component } from 'react';
import './styles.css';
import Appointment from './appointment.js';
import Streaks from './streaks.js';
import { DAYSOFWEEK } from '../../constants.js';
import { getFirstDay, findApps, findStreaks } from '../../actions/calendarItems';
let date;

class CalendarModule extends Component {
  state = {
    user: this.props.user,
    items: [],
    type: 'calendar',
  };

  componentDidMount() {
    this.setState({
      type: this.props.type,
    });
  }

  renderHeaders() {
    const headers = DAYSOFWEEK;
    let head = [];
    for (let i = 0; i < 7; i++) {
      head.push(
        <div id="header" key={i}>
          <p>{headers[i]}</p>
        </div>,
      );
    }
    return <div id="calendarContainer">{head}</div>;
  }

  renderFirstWeek() {
    const days = [];
    let temp = getFirstDay();
    for (let i = 0; i < 7; i++) {
      if (i >= temp) {
        days.push(
          <div id="dates" key={i}>
            <p>{date}</p>
          </div>,
        );
        date = date + 1;
      } else {
        days.push(<div id="dates" key={i}></div>);
      }
    }
    return <div id="calendarContainer">{days}</div>;
  }

  renderDays() {
    const days = [];
    //const lists = [];
    for (let i = 0; i < 7; i++) {
      if (date < 32) {
        let a = this.props.items;
        if (this.props.type === 'calendar') {
          if (a[0] != null) {
            //const lists = findApps(a, date);
          }
          days.push(
            <div id="dates" key={i}>
              <p>{date}</p>
              <Appointment appointments={lists} />
            </div>,
          );
        } else if (this.props.type === 'streaks') {
          if (a[0] != null) {
            //const lists = findStreaks(a, date);
          }
          days.push(
            <div id="dates" key={i}>
              <p>{date}</p>
              <Streaks streaks={lists} />
            </div>,
          );
        } else {
          days.push(
            <div id="dates" key={i}>
              <p>{date}</p>
            </div>,
          );
        }
      } else {
        days.push(<div id="dates" key={i}></div>);
      }
      date = date + 1;
    }
    return <div id="calendarContainer">{days}</div>;
  }

  renderCalendar = () => {
    date = 1;
    return (
      <div>
        {this.renderHeaders()}
        {this.renderFirstWeek()}
        {this.renderDays()}
        {this.renderDays()}
        {this.renderDays()}
        {this.renderDays()}
      </div>
    );
  };

  render() {
    return <div>{this.renderCalendar()}</div>;
  }
}

export default CalendarModule;
