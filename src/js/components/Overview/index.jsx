import React, { Component } from 'react';
import './styles.css';
import Card from '../Card';

class Overview extends Component {
  constructor(props) {
    super(props);
  }

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
            value="1.5L"
            image="https://image.flaticon.com/icons/svg/3039/3039889.svg"
          />
          <Card
            id="cards"
            activeUser={this.props.activeUser}
            title="Calories"
            value="1700 Calories"
            image="https://image.flaticon.com/icons/svg/1599/1599302.svg"
          />
        </div>
        <div id="cardsContainer"></div>
      </div>
    );
  }
}

export default Overview;
