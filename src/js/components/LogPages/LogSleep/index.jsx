import React, { Component } from 'react';
import './styles.css';
import RadioSleep from './RadioSleep';
import { NavLink } from 'react-router-dom';
import TipBox from './../TipBox/TipBox';

class LogSleep extends Component {
  state = {
    hours: 0,
    quality: 'bad',
  };

  changeQuality = (qualtiy) => {
    this.setState({ quality: qualtiy });
  };

  changeHours = (event) => {
    this.setState({ hours: event.target.value });
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
            <form onSubmit={() => this.props.setSleep(this.state.hours, this.state.quality)}>
              <fieldset>
                <h3>
                  How much did you sleep?
                  <img
                    id="sleepIcon"
                    src="https://image.flaticon.com/icons/svg/3094/3094837.svg"
                    alt="icon"
                  ></img>
                </h3>

                <input
                  type="number"
                  id="sleepLog"
                  placeholder="Enter Hours"
                  value={this.state.hours}
                  onChange={this.changeHours}
                />
                <label id="sleepUnits">Hours</label>
                <RadioSleep changeQuality={(quality) => this.changeQuality(quality)}></RadioSleep>
                <p>Average person needs 7 ~ 8 hours sleep per day</p>
                <input type="submit" value="Save" className="primary-btn" id="logButton" />
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
