import React, { Component } from 'react';
import './styles.css';
import Appointment from './appointment.js';
let date;

class Calendar extends Component {
  constructor(props) {
    super(props);
    date = 1;
    console.log('Calendar Loaded successfully');
  }

  state = {};

  getFirstDay() {
    let d = new Date();
    const firstDay = new Date(d.getFullYear(), d.getMonth(), 1);
    return firstDay.getDay();
  }

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
        if (date == 24) {
          days.push(
            <div id="dates" key={i}>
              <p>{date}</p>
              <Appointment appointments={['Doctor Appointment', ' Check up Appointment']} />
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

  render() {
    return (
      <div>
        <h1 id="month">{this.getMonth()}</h1>
        {this.renderTabs()}
        {this.renderHeaders()}
        {this.renderFirstWeek()}
        {this.renderDays()}
        {this.renderDays()}
        {this.renderDays()}
        {this.renderDays()}
      </div>
    );
  }
}

export default Calendar;
