import React, { Component } from 'react';
import './styles.css';
import Card from '../Card';

class Overview extends Component {
  state = {
    user: this.props.activeUser,
    user_card: this.props.user_card,
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
            value={this.state.user_card['BMI']}
            image=""
            type="1"
          />
          <Card
            id="cards"
            activeUser={this.props.activeUser}
            title="Water Consumption"
            address="/overview/logWater"
            value={this.state.user_card['Water']}
            image=""
            type="2"
          />
          <Card
            id="cards"
            activeUser={this.props.activeUser}
            title="Calories"
            address="/overview/logCalories"
            value={this.state.user_card['Calories']}
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
            value={this.state.user_card['Mood']}
            address="/overview/logMood"
            image=""
            type="4"
          />
          <Card
            id="cards"
            activeUser={this.props.activeUser}
            title="Sleep"
            value={this.state.user_card['Sleep']}
            address="/overview/logSleep"
            image=""
            type="5"
          />
          <Card
            id="cards"
            activeUser={this.props.activeUser}
            title="Stress"
            value={this.state.user_card['Stress']}
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
            value={this.state.user_card['Medication']}
            address="/reminders"
            image=""
            type="7"
          />
          <Card
            id="cards"
            activeUser={this.props.activeUser}
            title="Sickness"
            value={this.state.user_card['Sickness']}
            address="/overview/logSick"
            image=""
            type="8"
          />
          <Card
            id="cards"
            activeUser={this.props.activeUser}
            title="Appointments"
            value={this.state.user_card['Appointments']}
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
