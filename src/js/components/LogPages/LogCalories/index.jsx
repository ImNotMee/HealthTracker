import React, { Component } from 'react';
import './styles.css';

import { NavLink } from 'react-router-dom';
class LogCalories extends Component {
  state = {
    user: this.props.activeUser,
  };

  render() {
    return (
      <div id="LogCaloriesWrapper">
        <div className="view left">
          <NavLink to="/overview" id="closeButton">
            <img
              id="xButton"
              src="https://image.flaticon.com/icons/svg/565/565313.svg"
              alt="icon"
            ></img>
          </NavLink>
          <h1 id="caloriesHeader">
            <img
              id="icon"
              src="https://image.flaticon.com/icons/svg/1599/1599302.svg"
              alt="icon"
            ></img>
            Calories
          </h1>
          <div className="logCaloriesBox">
            <form>
              <fieldset>
                <input type="text" id="caloriesLog" placeholder="Enter Amount" />
                <label id="caloriesUnits">Calories</label>
                <p>Suggested amount of Calories per day: 2000 Calories</p>
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

export default LogCalories;
