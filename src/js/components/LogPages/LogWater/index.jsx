import React, { Component } from 'react';
import './styles.css';

import TipBox from './../TipBox/TipBox';
import { NavLink } from 'react-router-dom';
class LogWater extends Component {
  state = {
    user: this.props.activeUser,
  };

  render() {
    return (
      <div id="LogWaterWrapper">
        <div className="logWaterView left">
          <NavLink to="/overview" id="closeButton">
            <img
              id="xButton"
              src="https://image.flaticon.com/icons/svg/565/565313.svg"
              alt="icon"
            ></img>
          </NavLink>
          <h1 id="waterHeader">
            <img
              id="icon"
              src="https://image.flaticon.com/icons/svg/3039/3039889.svg"
              alt="icon"
            ></img>
            Water Consumption
          </h1>
          <div className="logWaterBox">
            <form>
              <fieldset>
                <h3>
                  How much water did you drink?
                  <img
                    id="iconWater"
                    src="https://image.flaticon.com/icons/svg/3100/3100525.svg"
                    alt="icon"
                  ></img>
                </h3>
                <input type="text" id="waterLog" placeholder="Enter Amount" />
                <label id="waterUnits">ml</label>
                <p>Suggested amount of water per day: 2 ~ 2.5L</p>
                <button className="primary-btn" id="logButton">
                  Save
                </button>
              </fieldset>
            </form>
          </div>
        </div>

        <div className="logWaterView right">
          <TipBox label="physical"></TipBox>
        </div>
      </div>
    );
  }
}

export default LogWater;
