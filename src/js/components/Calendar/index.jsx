import React, { Component } from 'react';
import './styles.css';
import Calendar from './cal.js';

class CheckIn extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    user: this.props.activeUser,
  };
  render() {
    return (
      <div id="CheckInWrapper">
        <Calendar />
      </div>
    );
  }
}

export default CheckIn;
