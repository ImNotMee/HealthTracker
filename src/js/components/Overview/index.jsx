import React, { Component } from 'react';
import './styles.css';
import Card from '../Card';

class Overview extends Component {
  state = {
    user: this.props.activeUser,
    BMI: {
      value: 22,
    },
    Water: {
      completed: 0.8,
      remaining: 2,
      unit: 'L',
    },
    Calories: {
      completed: 300,
      remaining: 1700,
      unit: 'Calories',
    },
    Mood: {
      value: 'happy',
    },
    Sleep: {
      hours: 8,
      quality: 'Good', // 3 levels bad, okay, good
    },
    Stress: {
      value: 1,
    },
    Medication: [
      {
        drug: 'Cold Medicine',
        completed: 1,
        remainging: 2,
      },
      {
        drug: 'Allergy Medicine',
        completed: 2,
        remainging: 4,
      },
    ],
    Sickness: {
      //
      sick: true,
    },
    Appointments: [
      // shows all appointments today
      {
        event: 'Annual Checkup',
        doctor: 'Dr. Zoudas',
        time: '16:00:00',
      },
      {
        event: 'Blood Donation',
        doctor: 'Dr. Dre',
        time: '10:00:00',
      },
      {
        event: 'Dentist',
        doctor: 'Dr. Teth',
        time: '12:00:00',
      },
    ],
  };

  render() {
    return (
      <div id="OverviewWrapper">
        <div id="cardsContainer">
          {/* physical tracking */}
          <Card
            id="cards"
            activeUser={this.props.activeUser}
            title="Body Mass Index"
            address="/overview/logWeight"
            value={this.state.BMI}
            image="https://image.flaticon.com/icons/svg/3023/3023711.svg"
            type="1"
          />
          <Card
            id="cards"
            activeUser={this.props.activeUser}
            title="Water Consumption"
            address="/overview/logWater"
            value={this.state.Water}
            image=""
            type="2"
          />
          <Card
            id="cards"
            activeUser={this.props.activeUser}
            title="Calories"
            address="/overview/logCalories"
            value={this.state.Calories}
            image=""
            type="3"
          />
        </div>

        <div id="cardsContainer">
          {/* mental tracking */}
          <Card
            id="cards"
            activeUser={this.props.activeUser}
            title="Mood"
            value={this.state.Mood}
            address="/overview/logMood"
            image=""
            type="4"
          />
          <Card
            id="cards"
            activeUser={this.props.activeUser}
            title="Sleep"
            value={this.state.Sleep}
            address="/overview/logSleep"
            image=""
            type="5"
          />
          <Card
            id="cards"
            activeUser={this.props.activeUser}
            title="Stress"
            value={this.state.Stress}
            address="/overview/logStress"
            image=""
            type="6"
          />
        </div>

        <div id="cardsContainer">
          {/* medical tracking */}
          <Card
            id="cards"
            activeUser={this.props.activeUser}
            title="Medication"
            value={this.state.Medication}
            address="/reminders"
            image=""
            type="7"
          />
          <Card
            id="cards"
            activeUser={this.props.activeUser}
            title="Sickness"
            value={this.state.Sickness}
            address="/overview/logSick"
            image=""
            type="8"
          />
          <Card
            id="cards"
            activeUser={this.props.activeUser}
            title="Appointments"
            value={this.state.Appointments}
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
