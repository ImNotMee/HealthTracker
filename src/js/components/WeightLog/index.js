import React, { Component } from 'react';
import './styles.css';

class WeightLog extends Component {
  constructor(props) {
    super(props);
  }

  /*createList = {
        this.prop.tipList
        for loop

    }*/
  state = {
    user: this.props.activeUser,
  };

  render() {
    return (
      <div id="OWrapper">
        <div class="split leftBox">
          <h1>
            <img id="icon" src="https://image.flaticon.com/icons/svg/2906/2906436.svg"></img>
            Log Weight
          </h1>
          <div class="logBox">
            <form>
              <fieldset>
                <input type="text" id="weightLog" placeholder="Enter Weight" />
                <select id="measures">
                  <option value="kgs">kgs</option>
                  <option value="lbs">lbs</option>
                </select>
                <input type="submit" id="logButton" placeholder="Save Weight" />
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default WeightLog;
