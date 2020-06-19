import React, { Component } from 'react';
import './styles.css';

class Overview extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    user: this.props.activeUser,
  };
  render() {
    return <div id="OverviewWrapper">some text and stuff</div>;
  }
}

export default Overview;
