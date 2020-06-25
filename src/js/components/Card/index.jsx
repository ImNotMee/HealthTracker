import React, { Component } from 'react';
import './styles.css';
import PieChart from './Chart.js';
import { NavLink } from 'react-router-dom';

class Card extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.activeUser);
  }

  state = {
    user: this.props.activeUser,
    title: this.props.title,
    value: this.props.value,
    image: this.props.image,
    address: this.props.address,
  };
  RequireChart() {
    if (typeof this.state.value == 'object') {
      return (
        <div>
          <PieChart data={this.state.value} />
          <p id="cardValue">
            {this.state.value[0]} {this.state.value[2]}
          </p>
        </div>
      );
    } else {
      return (
        <div>
          <img id="cardIcon" src={this.state.image} alt="card icon"></img>
          <p id="cardValue">{this.state.value}</p>
        </div>
      );
    }
  }

  render() {
    var add = '/overview' + '/' + this.state.address;
    return (
      <NavLink to={add} id="cardWrapper">
        <h2 id="cardTitle">{this.state.title}</h2>
        {this.RequireChart()}
      </NavLink>
    );
  }
}

export default Card;
