import React, { Component } from 'react';
import './../styles.css';
import RadioSleep from './RadioSleep';
import { NavLink } from 'react-router-dom';
import TipBox from './../TipBox/TipBox';
import SavedBox from './../SavedBox/SavedBox';

class LogSleep extends Component {
  state = {
    hours: 0,
    quality: 'bad',
    saved: false,
  };

  changeQuality = (qualtiy) => {
    this.setState({ quality: qualtiy });
  };

  changeHours = (event) => {
    this.setState({ hours: event.target.value });
  };

  handleSubmit = () => {
    this.setState({ saved: true });
    this.props.setSleep(this.state.hours, this.state.quality);
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
      <div id="logWrapper">
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
              src="https://image.flaticon.com/icons/png/512/865/865813.png"
              alt="icon"
            ></img>
            Hours of Sleep
          </h1>
          <div className="logBox">
            <h3>
              How much did you sleep?
              <img
                id="sleepIcon"
                src="https://image.flaticon.com/icons/svg/3094/3094837.svg"
                alt="icon"
              ></img>
            </h3>

            <input
              type="number"
              id="inputLog"
              placeholder="Enter Hours"
              value={this.state.hours}
              onChange={this.changeHours}
            />
            <label id="physicalUnits">Hours</label>
            <RadioSleep changeQuality={(quality) => this.changeQuality(quality)}></RadioSleep>
            <p>Average person needs 7 ~ 8 hours sleep per day</p>
            <button className="primary-btn" id="logButton" onClick={this.handleSubmit}>
              Save
            </button>
          </div>

          {/*saved dialog box*/}
          {saved}
        </div>
        <div className="logView right">
          <TipBox label="mental"></TipBox>
        </div>
      </div>
    );
  }
}
export default LogSleep;
