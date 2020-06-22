import React, { Component } from 'react';
import './styles.css';

class LogCalories extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    user: this.props.activeUser,
  };

  render() {
    return (
      <div id="LogCaloriesWrapper">
        <div class="view left">
          <button id="closeButton" onclick="goBack()">
            X
          </button>
          <h1 id="caloriesHeader">
            <img id="icon" src="https://image.flaticon.com/icons/svg/1599/1599302.svg"></img>
            Calories
          </h1>
          <div class="logbox">
            <form>
              <fieldset>
                <input type="text" id="caloriesLog" placeholder="Enter Amount" />
                <label id="caloriesUnits">Calories</label>
                <p>Suggested amount of Calories per day: 2000Calories</p>
                <input type="submit" id="logButton" value="Save" />
              </fieldset>
            </form>
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

export default LogCalories;
