import React, { Component } from 'react';
import './../styles.css';
import { MOODLIST } from './../../../constants';

class RadioMood extends Component {
  state = {
    mood: null,
    moodList: MOODLIST,
  };

  onChangeMood = (event) => {
    this.setState({
      mood: event.target.value,
    });
    this.props.changeMood(event.target.value);
  };

  onClickImg = (event) => {
    this.setState({
      mood: event.target.alt,
    });
    this.props.changeMood(event.target.alt);
  };

  render() {
    const carriers = this.state.moodList.map((mood, index) => {
      return (
        <div id="carriers" key={index}>
          <img id="emoticon" src={mood.icon} onClick={this.onClickImg} alt={mood.value} />
          <input
            type="radio"
            value={mood.value}
            onChange={this.onChangeMood}
            checked={this.state.mood === mood.value}
          />
        </div>
      );
    });

    return <div>{carriers}</div>;
  }
}
export default RadioMood;
