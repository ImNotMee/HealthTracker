import React, { Component } from 'react';
import './styles.css';
import RadioMood from './RadioMood';
import { NavLink } from 'react-router-dom';
import TipBox from './../TipBox/TipBox';

class LogMood extends Component {
  state = {
    mood: '',
  };

  changeMood = (mood) => {
    this.setState({
      mood: mood,
    });
  };

  render() {
    return (
      <div id="LogMoodWrapper">
        <div className="logMoodView left">
          <NavLink to="/overview" id="closeButton">
            <img
              id="xButton"
              src="https://image.flaticon.com/icons/svg/565/565313.svg"
              alt="icon"
            ></img>
          </NavLink>
          <h1 id="moodHeader">
            <img
              id="icon"
              src="https://image.flaticon.com/icons/svg/3010/3010884.svg"
              alt="icon"
            ></img>
            Mood of the day
          </h1>
          <div className="logMoodBox">
            <form>
              <fieldset>
                <h3>How do you feel today?</h3>
                <div id="iconContainer">
                  <RadioMood changeMood={(mood) => this.changeMood(mood)}></RadioMood>
                </div>
                <button className="primary-btn" id="logButton">
                  Save
                </button>
              </fieldset>
            </form>
          </div>
        </div>
        <div className="logMoodView right">
          <TipBox label="mental"></TipBox>
        </div>
      </div>
    );
  }
}

export default LogMood;
