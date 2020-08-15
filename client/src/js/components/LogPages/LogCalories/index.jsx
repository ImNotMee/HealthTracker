import React, { Component } from 'react';
import './../styles.css';
import TipBox from './../TipBox/TipBox';
import { NavLink } from 'react-router-dom';
import SavedBox from './../SavedBox/SavedBox';

class LogCalories extends Component {
  state = {
    calories: 0,
    saved: false,
  };

  caloriesChange = (event) => {
    const calories = event.target.value;
    this.setState({ calories: calories });
  };

  handleSubmit = () => {
    this.setState({ saved: true });
    this.props.setCalories(this.state.calories);
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
              src="https://image.flaticon.com/icons/svg/1599/1599302.svg"
              alt="icon"
            ></img>
            Calories
          </h1>
          <div className="logBox">
            <h3>How much did you eat? Add calories below!</h3>
            <input
              type="number"
              id="inputLog"
              placeholder="Enter Amount"
              value={this.state.calories}
              onChange={this.caloriesChange}
            />
            <label id="physicalUnits">Calories</label>
            <p>Suggested amount of Calories per day: 2000 Calories</p>
            <button className="primary-btn" id="logButton" onClick={this.handleSubmit}>
              Save
            </button>
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

export default LogCalories;
