import React, { Component } from 'react';
import './styles.css';
import Appointment from './appointment.js';
import Streaks from './streaks.js';
import { DAYSOFWEEK } from '../../constants.js';
import { getFirstDay, findApps } from '../../actions/calendarItems';
let date;
let cou = 1;

class CalendarModule extends Component {
  state = {
    user: this.props.user,
    items: [],
    water: [],
    calories: [],
    mood: [],
    sleep: [],
    stress: [],
    type: 'calendar',
  };

  fetchData(type) {
    const d = new Date().getMonth();
    const reqBody = {
      month: d,
    };
    const request = new Request('http://localhost:5000/streaks/' + type, {
      method: 'post',
      body: JSON.stringify(reqBody),
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
    });
    fetch(request)
      .then((res) => {
        if (res.status === 200) {
          res
            .json()
            .then((json) => {
              if (type === 'water') {
                this.setState({ water: json });
              } else if (type === 'calories') {
                this.setState({ calories: json });
              } else if (type === 'mood') {
                this.setState({ mood: json });
              } else if (type === 'sleep') {
                this.setState({ sleep: json });
              } else if (type === 'stress') {
                this.setState({ stress: json });
              }
            })
            .catch((error) => {
              console.log(' Failed: ', error);
            });
        }
      })
      .catch((error) => {
        console.log('fetching streak Failed: ', error);
      });
  }

  processData() {
    this.fetchData('water');
    this.fetchData('calories');
    this.fetchData('mood');
    this.fetchData('sleep');
    this.fetchData('stress');
  }

  findDateStreaks(date, type) {
    let m = '';
    if (type === 'water') {
      this.state.water.forEach((dat) => {
        const d = new Date(dat).getDate();
        if (d === date) {
          m = '💧';
        }
      });
    } else if (type === 'calories') {
      this.state.water.forEach((dat) => {
        const d = new Date(dat).getDate();
        if (d === date) {
          m = '🔥';
        }
      });
    } else if (type === 'mood') {
      this.state.water.forEach((dat) => {
        const d = new Date(dat).getDate();
        if (d === date) {
          m = '😀';
        }
      });
    } else if (type === 'sleep') {
      this.state.water.forEach((dat) => {
        const d = new Date(dat).getDate();
        if (d === date) {
          m = '🛏️';
        }
      });
    } else if (type === 'stress') {
      this.state.water.forEach((dat) => {
        const d = new Date(dat).getDate();
        if (d === date) {
          m = '😇';
        }
      });
    }
    return m;
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
    let lists = [];
    let temp = getFirstDay();
    for (let i = 0; i < 7; i++) {
      if (i >= temp) {
        if (this.props.type === 'calendar' && this.props.items != null) {
          lists = findApps(this.props.items, date);
          days.push(
            <div id="dates" key={i}>
              <p>{date}</p>
              <Appointment appointments={lists} />
            </div>,
          );
        } else if (this.props.type === 'streaks') {
          const w = this.findDateStreaks(date, 'water');
          const c = this.findDateStreaks(date, 'calories');
          const sl = this.findDateStreaks(date, 'sleep');
          const st = this.findDateStreaks(date, 'stress');
          const m = this.findDateStreaks(date, 'm');
          days.push(
            <div id="dates" key={i}>
              <p>{date}</p>
              <Streaks streaks={[w, c, st, sl, m]} />
            </div>,
          );
        } else {
          days.push(
            <div id="dates" key={i}>
              <p>{date}</p>
            </div>,
          );
        }
        date = date + 1;
      } else {
        days.push(<div id="dates" key={i}></div>);
      }
    }
    return <div id="calendarContainer">{days}</div>;
  }

  renderDays() {
    const days = [];
    let lists = [];
    for (let i = 0; i < 7; i++) {
      if (date < 32) {
        if (this.props.type === 'calendar' && this.props.items != null) {
          lists = findApps(this.props.items, date);
          days.push(
            <div id="dates" key={i}>
              <p>{date}</p>
              <Appointment appointments={lists} />
            </div>,
          );
        } else if (this.props.type === 'streaks') {
          const w = this.findDateStreaks(date, 'water');
          const c = this.findDateStreaks(date, 'calories');
          const sl = this.findDateStreaks(date, 'sleep');
          const st = this.findDateStreaks(date, 'stress');
          const m = this.findDateStreaks(date, 'm');
          days.push(
            <div id="dates" key={i}>
              <p>{date}</p>
              <Streaks streaks={[w, c, st, sl, m]} />
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
    if (cou === 1) {
      this.processData();
      cou = 0;
    }
    return <div>{this.renderCalendar()}</div>;
  }
}

export default CalendarModule;
