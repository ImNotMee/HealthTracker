import React, { Component } from 'react';
import './styles.css';

class LogCalories extends Component {
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
      <div id="LogCaloriesWrapper">
        <div class="split leftBox">
          <h1>
            <img id="icon" src="https://image.flaticon.com/icons/svg/2738/2738658.svg"></img>
            Log Calories
          </h1>
          <div class="logBox">
            <form>
              <fieldset>
                <input type="text" id="weightLog" placeholder="Enter Weight" />
                <select name="measures" id="measures">
                  <option value="kgs">kgs</option>
                  <option value="lbs">lbs</option>
                </select>
                <input type="submit" id="logButton" value="Save Weight" />
              </fieldset>
            </form>
          </div>
        </div>
        <div class="split rightBox">
          <h1 id="tipHead">
            <img id="icon" src="https://image.flaticon.com/icons/png/512/900/900516.png"></img>Tips:
            Healthy Weight
          </h1>
          <div id="tipBox">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in dapibus quam.
            Donec tempor justo est, at luctus turpis viverra eget. Nunc tincidunt sapien ut elit
            sollicitudin, vitae pulvinar orci laoreet. Mauris gravida pellentesque elit eget
            vulputate. Ut vel elit massa. Vestibulum sed sapien quis erat hendrerit pellentesque.
            Morbi dignissim malesuada elit, et condimentum nibh sagittis eu. /*<li>Reduce sugar</li>
          </div>
        </div>
      </div>
    );
  }
}

export default LogCalories;
