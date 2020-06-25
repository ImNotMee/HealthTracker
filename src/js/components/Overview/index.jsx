import React, { Component } from 'react';
import './styles.css';
import Card from '../Card';

class Overview extends Component {
  state = {
    user: this.props.activeUser,
  };
  render() {
    return (
      <div id="OverviewWrapper">
        <div id="cardsContainer">
          <Card
            id="cards"
            activeUser={this.props.activeUser}
            title="Body Mass Index"
            value="22"
            image="https://image.flaticon.com/icons/svg/3023/3023711.svg"
          />
          <Card
            id="cards"
            activeUser={this.props.activeUser}
            title="Water Consumption"
            value={[0.8, 2, 'L']}
            image=""
          />
          <Card
            id="cards"
            activeUser={this.props.activeUser}
            title="Calories"
            value={[1700, 300, 'Calories']}
            image=""
          />
        </div>
        <div id="cardsContainer"></div>
      </div>
    );
  }
}

export default Overview;
