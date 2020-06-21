import React, { Component } from 'react';
import './styles.css';

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
  };

  render() {
    return (
      <div id="cardWrapper">
        <h2 id="cardTitle">{this.state.title}</h2>
        <img id="cardIcon" src={this.state.image}></img>
        <p id="cardValue">{this.state.value}</p>
      </div>
    );
  }
}

export default Card;
