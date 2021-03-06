import React, { Component } from 'react';
import './styles.css';
import Card from '../Card';
import { HEALTH_CATEGORIES, REMINDER_STATUS } from '../../constants';

class Overview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeUser: this.props.activeUser,
      user_card: this.props.activeUser?.user_card,
      medication: [],
      appointments: [],
    };
    const medical_reminder = this.state.activeUser?.reminders[HEALTH_CATEGORIES.medical];
    let medication = [];
    let appointments = [];
    for (var i = 0; i < medical_reminder?.length; i++) {
      if (medical_reminder[i]['status'] === REMINDER_STATUS.active) {
        if (medical_reminder[i]['subCategory'] === 'Appointments') {
          appointments.push(medical_reminder[i]);
        } else if (medical_reminder[i]['subCategory'] === 'Medication') {
          medication.push(medical_reminder[i]);
        }
      }
    }
    this.state.medication = medication;
    this.state.appointments = appointments;

    this.props.resetToday();
  }

  render() {
    if (this.state.user_card === undefined) {
      return <div></div>;
    }
    return (
      <div id="OverviewWrapper">
        <h1 id="h1-headers">Physical Health</h1>
        <hr id="line"></hr>
        <div id="cardsContainer">
          {/* physical tracking */}
          <Card
            className="cards"
            activeUser={this.props.activeUser}
            title="Body Mass Index"
            address="/overview/logWeight"
            value={this.state.user_card['BMI']}
            image=""
            type="1"
          />
          <Card
            className="cards"
            activeUser={this.props.activeUser}
            title="Water Consumption"
            address="/overview/logWater"
            value={this.state.user_card['Water']}
            image=""
            type="2"
          />
          <Card
            className="cards"
            activeUser={this.props.activeUser}
            title="Calories"
            address="/overview/logCalories"
            value={this.state.user_card['Calories']}
            image=""
            type="3"
          />
        </div>
        <h1 id="h1-headers">Mental Health</h1>
        <hr id="line"></hr>
        <div id="cardsContainer">
          {/* mental tracking */}
          <Card
            className="cards"
            activeUser={this.props.activeUser}
            title="Mood"
            value={this.state.user_card['Mood']}
            address="/overview/logMood"
            image=""
            type="4"
          />
          <Card
            className="cards"
            activeUser={this.props.activeUser}
            title="Sleep"
            value={this.state.user_card['Sleep']}
            address="/overview/logSleep"
            image=""
            type="5"
          />
          <Card
            className="cards"
            activeUser={this.props.activeUser}
            title="Stress"
            value={this.state.user_card['Stress']}
            address="/overview/logStress"
            image=""
            type="6"
          />
        </div>
        <h1 id="h1-headers">Medical Health</h1>
        <hr id="line"></hr>
        <div id="cardsContainer">
          {/* medical tracking */}
          <Card
            className="cards"
            activeUser={this.props.activeUser}
            title="Medication"
            value={this.state.medication}
            address="/reminders"
            image=""
            type="7"
          />
          <Card
            className="cards"
            activeUser={this.props.activeUser}
            title="Sickness"
            value={this.state.user_card['Sickness']}
            address="/overview/logSick"
            image=""
            type="8"
          />
          <Card
            className="cards"
            activeUser={this.props.activeUser}
            title="Appointments"
            value={this.state.appointments}
            address="/reminders"
            image=""
            type="9"
          />
        </div>
      </div>
    );
  }
}

export default Overview;
