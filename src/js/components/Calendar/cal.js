import React, { Component } from 'react';
import './styles.css';
const col = 7;
let date = 1;

class Calendar extends Component {
  constructor(props) {
    super(props);
    console.log('Calendar Loaded successfully');
  }

  state = {};

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
    return (
      <div id="calendarContainer">
        <div id="header">
          <p>Sunday</p>
        </div>
        <div id="header">
          <p>Monday</p>
        </div>
        <div id="header">
          <p>Tuesday</p>
        </div>
        <div id="header">
          <p>Wednesday</p>
        </div>
        <div id="header">
          <p>Thursdsay</p>
        </div>
        <div id="header">
          <p>Friday</p>
        </div>
        <div id="header">
          <p>Saturday</p>
        </div>
      </div>
    );
  }

  renderFirstWeek() {
    const days = [];
    let temp = this.getFirstDay();
    console.log(temp);
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
        days.push(
          <div id="dates" key={i}>
            <p>{date}</p>
          </div>,
        );
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
