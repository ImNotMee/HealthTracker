import React, { Component } from 'react';
import './styles.css';
import TabList from './TabList';
import { NavLink } from 'react-router-dom';

import TipBox from './../TipBox/TipBox';

class LogWeight extends Component {
  state = {
    user: this.props.activeUser,
    weight: 0,
    height: 0,
    BMI: 0,
  };

  metricInput() {
    return (
      <form>
        <fieldset>
          <input type="text" id="weightLog" placeholder="Enter Weight" />
          <label id="units">kg(kilograms)</label>
          <input type="text" id="heightLog" placeholder="Enter Height" />
          <label id="units">m(meters)</label>
          <p>BMI = Weight(kg) / [height(m)]^2</p>
          <ul>
            <li>Underweight: ~18.5</li>
            <li>Healthy weight: 18.5 ~ 24.9</li>
            <li>Overweight: 25 ~ 29.9</li>
            <li>Obese: 30 ~ 39.9</li>
          </ul>
          <button className="primary-btn" id="logButton">
            Save
          </button>
        </fieldset>
      </form>
    );
  }

  standardInput() {
    return (
      <form>
        <fieldset>
          <input type="text" id="weightLog" placeholder="Enter Weight" />
          <label id="units">lbs(pounds)</label>
          <input type="text" id="heightLog" placeholder="Enter Height" />
          <label id="units">in(inches)</label>
          <p>BMI = 703 * Weight(lbs) / [height(in)]^2</p>
          <ul>
            <li>Underweight: ~18.5</li>
            <li>Healthy weight: 18.5 ~ 24.9</li>
            <li>Overweight: 25 ~ 29.9</li>
            <li>Obese: 30 ~ 39.9</li>
          </ul>
          <button className="primary-btn" id="logButton">
            Save
          </button>
        </fieldset>
      </form>
    );
  }
  render() {
    return (
      <div id="LogWeightWrapper">
        <div className="logWeightView left">
          <NavLink to="/overview" id="closeButton">
            <img
              id="xButton"
              src="https://image.flaticon.com/icons/svg/565/565313.svg"
              alt="icon"
              s
            ></img>
          </NavLink>
          <h1 id="weightHeader">
            <img
              id="icon"
              src="https://image.flaticon.com/icons/svg/3023/3023711.svg"
              alt="icon"
            ></img>
            Body Mass Index
          </h1>
          <div className="logbox">
            <TabList>
              <div label="Metric">{this.metricInput()}</div>
              <div label="Standard">{this.standardInput()}</div>
            </TabList>
          </div>
        </div>

        <div className="logWeightView right">
          <TipBox label="physical"></TipBox>
        </div>
      </div>
    );
  }
}

export default LogWeight;
