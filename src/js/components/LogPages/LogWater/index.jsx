'use strict';
import React, { Component } from 'react';
import './styles.css';

import TipBox from './../TipBox/TipBox';
import { NavLink } from 'react-router-dom';
import SavedBox from './../SavedBox/SavedBox';

class LogWater extends Component {
  state = {
    water: 0,
    saved: false,
  };

  waterChange = (event) => {
    const waterDrank = event.target.value;
    this.setState({ water: waterDrank });
  };

  handleSubmit = () => {
    this.setState({ saved: true });
    this.props.setWater(this.state.water);
    this.savedTimeout = setTimeout(() => this.setState({ saved: false }), 3000);
  };

  componentWillUnmount() {
    clearTimeout(this.savedTimeout);
  }

  render() {
    let saved = null;
    if (this.state.saved === true) {
      saved = <SavedBox />;
    }
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
            <h3>
              How much water did you drink?
              <img
                id="iconWater"
                src="https://image.flaticon.com/icons/svg/3100/3100525.svg"
                alt="icon"
              ></img>
            </h3>
            <input
              type="number"
              id="waterLog"
              placeholder="Enter Amount"
              value={this.state.water}
              onChange={this.waterChange}
            />
            <label id="waterUnits">ml</label>
            <p>Suggested amount of water per day: 2 ~ 2.5L</p>
            <button className="primary-btn" id="logButton" onClick={this.handleSubmit}>
              Save
            </button>
          </div>
          {/*saved dialog box*/}
          {saved}
        </div>

        <div className="logWaterView right">
          <TipBox label="physical"></TipBox>
        </div>
      </div>
    );
  }
}

export default LogWater;
