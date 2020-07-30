import React, { Component } from 'react';
import './../styles.css';
import TabList from './TabList';
import { NavLink } from 'react-router-dom';
import SavedBox from './../SavedBox/SavedBox';
import TipBox from './../TipBox/TipBox';

class LogWeight extends Component {
  state = {
    weight: 0,
    height: 0,
    BMI: 0.0,
    unit: 'metric',
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
    let height = this.state.height;
    let weight = this.state.weight;
    let unit = 'metric';
    this.setState({ unit: 'metric' });
    if (standard === true) {
      weight = weight / 2.205;
      height = height / 39.37;
    }
    let BMI = 0;
    if (height !== 0) {
      BMI = weight / height ** 2;
    }
    this.setState({ BMI: BMI });
    this.setState({ saved: true });
    this.setState({ unit: unit });
    this.props.setBMI(BMI, height, weight, unit);
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
          id="inputLog"
          placeholder="Enter Weight"
          value={this.state.weight}
          onChange={this.weightChange}
        />
        <label id="physicalUnits">kg(kilograms)</label>
        <input
          type="number"
          id="inputLog"
          placeholder="Enter Height"
          value={this.state.height}
          onChange={this.heightChange}
        />
        <label id="physicalUnits">m(meters)</label>
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
        <label id="physicalUnits">lbs(pounds)</label>
        <input
          type="number"
          id="heightLog"
          placeholder="Enter Height"
          value={this.state.height}
          onChange={this.heightChange}
        />
        <label id="physicalUnits">in(inches)</label>
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
      <div id="LogWrapper">
        <div className="logView left">
          <NavLink to="/overview" id="closeButton">
            <img
              id="xButton"
              src="https://image.flaticon.com/icons/svg/565/565313.svg"
              alt="icon"
            ></img>
          </NavLink>
          <h1 id="logHeader">
            <img
              id="icon"
              src="https://image.flaticon.com/icons/svg/3023/3023711.svg"
              alt="icon"
            ></img>
            Body Mass Index
          </h1>
          <div className="logBox">
            <TabList id="weightTab">
              <div label="Metric">{this.metricInput()}</div>
              <div label="Standard">{this.standardInput()}</div>
            </TabList>
          </div>
          {/*saved dialog box*/}
          {saved}
        </div>

        <div className="logView right">
          <TipBox label="physical"></TipBox>
        </div>
      </div>
    );
  }
}

export default LogWeight;
