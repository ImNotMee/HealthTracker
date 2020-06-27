import React, { Component } from 'react';
import './styles.css';

import { NavLink } from 'react-router-dom';
import TipBox from './../TipBox/TipBox';

class LogStress extends Component {
  state = {
    user: this.props.activeuser,
    value: 5,
  };

  onChangeSlide = (event) => {
    this.setState({
      value: event.target.value,
    });
  };

  render() {
    return (
      <div id="logStressWrapper">
        <div className="logStressView left">
          <NavLink to="/overview" id="closeButton">
            <img
              id="xButton"
              src="https://image.flaticon.com/icons/svg/565/565313.svg"
              alt="icon"
            ></img>
          </NavLink>

          <h1 id="stressHeader">
            <img
              id="icon"
              src="https://image.flaticon.com/icons/svg/2534/2534673.svg"
              alt="icon"
            ></img>
            Stress Level
          </h1>
          <div className="logStressBox">
            <form>
              <fieldset>
                <h3>Are you stressed?</h3>

                <div class="sliderContainer">
                  <input
                    type="range"
                    min={0}
                    max={10}
                    value={this.state.value}
                    className="stressSlider"
                    onChange={this.onChangeSlide}
                  ></input>
                  <label id="sliderNum">
                    0
                    <img
                      id="stressIcon"
                      src="https://image.flaticon.com/icons/svg/2534/2534929.svg"
                      alt="icon"
                    ></img>
                  </label>
                  <label id="sliderNum1">
                    <img
                      id="stressIcon"
                      src="https://image.flaticon.com/icons/svg/2534/2534673.svg"
                      alt="icon"
                    ></img>
                    10
                  </label>
                </div>
                <div class="resultContainer">
                  <label id="outputValue">Your stress level: {this.state.value}</label>
                  <button className="primary-btn" id="logButton">
                    Save
                  </button>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
        <div className="logStressView right">
          <TipBox label="mental"></TipBox>
        </div>
      </div>
    );
  }
}

export default LogStress;
