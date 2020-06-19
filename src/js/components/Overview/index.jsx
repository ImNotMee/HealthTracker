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
    return (
      <div>
        <p>some text and stuff</p>
      </div>
    );
  }
}

export default Overview;
