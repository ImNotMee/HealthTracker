import React, { Component } from 'react';
import './styles.css';
import TipBox from './../TipBox/TipBox';
import { NavLink } from 'react-router-dom';
class LogCalories extends Component {
  state = {
    calories: 0,
  };

  caloriesChange = (event) => {
    const calories = event.target.value;
    this.setState({ calories: calories });
  };

  render() {
    return (
      <div id="LogCaloriesWrapper">
        <div className="logCaloriesView left">
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
            <form onSubmit={() => this.props.setCalories(this.state.calories)}>
              <fieldset>
                <h3>How much did you eat?</h3>
                <input
                  type="number"
                  id="caloriesLog"
                  placeholder="Enter Amount"
                  value={this.state.calories}
                  onChange={this.caloriesChange}
                />
                <label id="caloriesUnits">Calories</label>
                <p>Suggested amount of Calories per day: 2000 Calories</p>
                <input type="submit" value="Save" className="primary-btn" id="logButton" />
              </fieldset>
            </form>
          </div>
        </div>

        <div className="logCaloriesView right">
          <TipBox label="physical"></TipBox>
        </div>
      </div>
    );
  }
}

export default LogCalories;
