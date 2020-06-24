import React, { Component } from 'react';
import './styles.css';

class CheckIn extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    user: this.props.activeUser,
  };
  render() {
    return <div id="CheckInWrapper">some calendar text and stuff</div>;
  }
}

export default CheckIn;
