import React, { Component } from 'react';
import './styles.css';
import RadioSleep from './RadioSleep';
import { NavLink } from 'react-router-dom';
import TipBox from './../TipBox/TipBox';

class LogSleep extends Component {
  state = {
    user: this.props.activeuser,
  };

  render() {
    return (
      <div id="logSleepWrapper">
        <div className="logSleepView left">
          <NavLink to="/overview" id="closeButton">
            <img
              id="xButton"
              src="https://image.flaticon.com/icons/svg/565/565313.svg"
              alt="icon"
            ></img>
          </NavLink>

          <h1 id="sleepHeader">
            <img
              id="icon"
              src="https://image.flaticon.com/icons/png/512/865/865813.png"
              alt="icon"
            ></img>
            Hours of Sleep
          </h1>
          <div className="logSleepBox">
            <form>
              <fieldset>
                <h3>
                  How much did you sleep?
                  <img
                    id="sleepIcon"
                    src="https://image.flaticon.com/icons/svg/3094/3094837.svg"
                    alt="icon"
                  ></img>
                </h3>

                <input type="text" id="sleepLog" placeholder="Enter Hours" />
                <label id="sleepUnits">Hours</label>
                <RadioSleep></RadioSleep>
                <p>Average person needs 7 ~ 8 hours sleep per day</p>
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
export default LogSleep;
