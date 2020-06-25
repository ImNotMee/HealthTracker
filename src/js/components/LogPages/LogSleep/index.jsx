import React, { Component } from 'react';
import './styles.css';

import { NavLink } from 'react-router-dom';

class LogSleep extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    user: this.props.activeuser,
    sleepHour: 0,
  };

  render() {
    return (
      <div id="logSleepWrapper">
        <div className="view left">
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
                <p>Average person needs 7 ~ 8 hours sleep per day</p>
                <input type="submit" id="logButton" value="Save" />
              </fieldset>
            </form>
          </div>
        </div>
        <div className="view right">
          <h1 id="tipHead">
            <img
              id="icon"
              src="https://image.flaticon.com/icons/png/512/900/900516.png"
              alt="icon"
            ></img>
            Tips: Healthy Weight
          </h1>
          <div id="tipBox">
            <ol>
              <li>Reduce sugar</li>
              <li>Work out at least 3 times a week</li>
              <li>Drink water</li>
              <li>Reduce carbs</li>
              <li>Exercise protein control and count calories</li>
              <li>Keep healthy lifestyle</li>
              <li>Get good Sleep</li>
              <li>No sugary drinks</li>
              <li>Chew slowly, Eat slowly</li>
            </ol>
          </div>
        </div>
      </div>
    );
  }
}
export default LogSleep;
