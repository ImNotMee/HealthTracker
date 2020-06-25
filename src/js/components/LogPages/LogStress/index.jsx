import React, { Component } from 'react';
import './styles.css';

import { NavLink } from 'react-router-dom';

class LogStress extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    user: this.props.activeuser,
    value: 7,
  };

  onChangeSlide = (event) => {
    this.setState({
      value: event.target.value,
    });
  };

  render() {
    return (
      <div id="logStressWrapper">
        <div className="view left">
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
                  <input type="submit" id="logButton" value="Save" />
                </div>
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

export default LogStress;
