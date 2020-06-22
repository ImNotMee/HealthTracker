import React, { Component } from 'react';
import './styles.css';

import { goBack } from '../../actions/log';

class LogWeight extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    user: this.props.activeUser,
  };

  render() {
    return (
      <div id="LogWeightWrapper">
        <div class="view left">
          <button id="closeButton" onclick={goBack}>
            X
          </button>
          <h1 id="weightHeader">
            <img id="icon" src="https://image.flaticon.com/icons/svg/3100/3100525.svg"></img>Body
            Mass Index
          </h1>
          <div class="logbox">
            <div class="tab">
              <button class="tablinks active" onclick="openTab(event, 'Metric')">
                Metric
              </button>
              <button class="tablinks" onclick="openTab(event, 'Standard')">
                Standard
              </button>
            </div>
            <div id="Metric" class="tabContent">
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
                  <input type="submit" id="logButton" value="Save" />
                </fieldset>
              </form>
            </div>
            <div class="tabContent">
              <div id="Standard">
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
                    <input type="submit" id="logButton" value="Save" />
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div class="view right">
          <h1 id="tipHead">
            <img id="icon" src="https://image.flaticon.com/icons/png/512/900/900516.png"></img>Tips:
            Healthy Weight
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

export default LogWeight;
