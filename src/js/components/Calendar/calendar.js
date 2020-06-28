import React, { Component } from 'react';
import './styles.css';
import Appointment from './appointment.js';
import Streaks from './streaks.js';
let date;

class CalendarModule extends Component {
  constructor(props) {
    super(props);
    console.log('Calendar Loaded successfully');
  }

  componentDidMount() {
    this.renderCalendar();
  }

  componentDidUpdate() {
    this.renderCalendar();
  }

  getFirstDay() {
    let d = new Date();
    const firstDay = new Date(d.getFullYear(), d.getMonth(), 1);
    return firstDay.getDay();
  }

  renderTabs() {
    return (
      <div id="calendarContainer">
        <button id="tabs">Calendar</button>
        <button id="tabs">Streaks</button>
      </div>
    );
  }

  renderHeaders() {
    const headers = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursdsay', 'Friday', 'Saturday'];
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
    let temp = this.getFirstDay();
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
    for (let i = 0; i < 7; i++) {
      if (date < 32) {
        // only make it to show that on the 24th, this person has some appointments
        if (this.props.type == 'calendar' && date === 24) {
          days.push(
            <div id="dates" key={i}>
              <p>{date}</p>
              <Appointment appointments={['Doctor Appointment', ' Check up Appointment']} />
            </div>,
          );
        } else if (this.props.type == 'streaks' && date >= 28) {
          days.push(
            <div id="dates" key={i}>
              <p>{date}</p>
              <Streaks streaks={['💧', '🔥', '🛏️']} />
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
