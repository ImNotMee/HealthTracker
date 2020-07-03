'use strict';
import React, { Component } from 'react';
import './styles.css';
import TabList from './TabList';
import { NavLink } from 'react-router-dom';
import SavedBox from './../SavedBox/SavedBox';
import TipBox from './../TipBox/TipBox';

class LogWeight extends Component {
  state = {
    weight: 0,
    height: 0,
    BMI: 0.0,
    saved: false,
  };

  BMICalcStandard = () => {
    this.BMICalc(true);
  };

  BMICalcMetric = () => {
    this.BMICalc(false);
  };

  BMICalc = (standard) => {
    // BMI = kg/m^2
    // 1kg = 2.2 pounds
    // 1m = 39.37 inches
    console.log('hello');
    var weight = this.state.weight;
    var height = this.state.height;
    if (standard === true) {
      weight = weight / 2.205;
      height = height / 39.37;
    }
    var BMI = 0;
    if (height !== 0) {
      BMI = weight / height ** 2;
    }
    this.setState({ BMI: BMI });

    this.setState({ saved: true });
    this.props.setBMI(BMI);
    this.savedTimeout = setTimeout(() => this.setState({ saved: false }), 3000);
  };

  weightChange = (event) => {
    const weightInt = event.target.value;
    this.setState({ weight: weightInt });
  };

  heightChange = (event) => {
    const heightInt = event.target.value;
    this.setState({ height: heightInt });
  };

  componentWillUnmount() {
    clearTimeout(this.savedTimeout);
  }

  metricInput() {
    return (
      <div>
        <input
          type="number"
          id="weightLog"
          placeholder="Enter Weight"
          value={this.state.weight}
          onChange={this.weightChange}
        />
        <label id="units">kg(kilograms)</label>
        <input
          type="number"
          id="heightLog"
          placeholder="Enter Height"
          value={this.state.height}
          onChange={this.heightChange}
        />
        <label id="units">m(meters)</label>
        <p>BMI = Weight(kg) / [height(m)]^2</p>
        <ul>
          <li>Underweight: ~18.5</li>
          <li>Healthy weight: 18.5 ~ 24.9</li>
          <li>Overweight: 25 ~ 29.9</li>
          <li>Obese: 30 ~ 39.9</li>
        </ul>
        <button className="primary-btn" id="logButton" onClick={this.BMICalcMetric}>
          Save
        </button>
      </div>
    );
  }

  standardInput() {
    return (
      <div>
        <input
          type="number"
          id="weightLog"
          placeholder="Enter Weight"
          value={this.state.weight}
          onChange={this.weightChange}
        />
        <label id="units">lbs(pounds)</label>
        <input
          type="number"
          id="heightLog"
          placeholder="Enter Height"
          value={this.state.height}
          onChange={this.heightChange}
        />
        <label id="units">in(inches)</label>
        <p>BMI = 703 * Weight(lbs) / [height(in)]^2</p>
        <ul>
          <li>Underweight: ~18.5</li>
          <li>Healthy weight: 18.5 ~ 24.9</li>
          <li>Overweight: 25 ~ 29.9</li>
          <li>Obese: 30 ~ 39.9</li>
        </ul>
        <button className="primary-btn" id="logButton" onClick={this.BMICalcStandard}>
          Save
        </button>
      </div>
    );
  }
  render() {
    let saved = null;
    if (this.state.saved === true) {
      saved = <SavedBox />;
    }
    return (
      <div id="LogWeightWrapper">
        <div className="logWeightView left">
          <NavLink to="/overview" id="closeButton">
            <img
              id="xButton"
              src="https://image.flaticon.com/icons/svg/565/565313.svg"
              alt="icon"
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
            <TabList id="weightTab">
              <div label="Metric">{this.metricInput()}</div>
              <div label="Standard">{this.standardInput()}</div>
            </TabList>
          </div>
          {/*saved dialog box*/}
          {saved}
        </div>

        <div className="logWeightView right">
          <TipBox label="physical"></TipBox>
        </div>
      </div>
    );
  }
}

export default LogWeight;
