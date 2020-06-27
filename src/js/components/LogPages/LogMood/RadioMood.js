import React, { Component } from 'react';
import './styles.css';
import { MOODLIST } from './../../../constants';

class RadioMood extends Component {
  state = {
    user: this.props.activeuser,
    mood: '',
    moodList: MOODLIST,
  };

  onChangeMood = (event) => {
    this.setState({
      mood: event.target.value,
    });
  };

  render() {
    const carriers = this.state.moodList.map((mood) => {
      return (
        <div id="carriers">
          <img id="emoticon" src={mood.icon} alt="icon" />
          <input
            type="radio"
            value={mood.value}
            checked={this.state.mood === mood.value}
            onClick={this.onChangeMood}
          />
        </div>
      );
    });

    return <div>{carriers}</div>;
  }
}
export default RadioMood;
