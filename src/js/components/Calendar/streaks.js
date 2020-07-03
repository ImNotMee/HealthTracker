import React, { Component } from 'react';
import './styles.css';

class Streaks extends Component {
  state = {
    streaks: this.props.streaks,
  };

  getStreaks() {
    let streaks = '';
    for (let i = 0; i < this.state.streaks.length; i++) {
      streaks = streaks + this.state.streaks[i];
    }
    return (
      <div id="boxContainer">
        <p id="streaksBox">{streaks}</p>
      </div>
    );
  }

  render() {
    return <div>{this.getStreaks()}</div>;
  }
}

export default Streaks;
