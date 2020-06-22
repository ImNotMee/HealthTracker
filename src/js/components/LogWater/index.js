import React, { Component } from 'react';
import './styles.css';

class LogWater extends Compnent {
  constructor(props) {
    super(props);
  }

  state = {
    user: this.props.activeUser,
  };

  render() {
    return (
      <div id="LogWaterWrapper">
        <div class="split leftBox">
          <h1>
            <img id="icon" src="https://image.flaticon.com/icons/svg/2906/2906436.svg"></img>
            Log Weight
          </h1>
          <div class="logBox">
            <form>
              <fieldset>
                <input type="text" id="weightLog" placeholder="Enter Weight" />
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

export default LogWater;
