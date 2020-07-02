import React, { Component } from 'react';
import './styles.css';
import { MOODLIST } from './../../../constants';

class RadioMood extends Component {
  state = {
    mood: '',
    moodList: MOODLIST,
  };

  onChangeMood = (event) => {
    this.setState({
      mood: event.target.value,
    });
    this.props.changeMood(event.target.value);
  };

  render() {
    const carriers = this.state.moodList.map((mood, index) => {
      return (
        <div id="carriers" key={index}>
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
