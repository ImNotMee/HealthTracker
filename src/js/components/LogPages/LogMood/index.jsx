import React, { Component } from 'react';
import './../styles.css';
import RadioMood from './RadioMood';
import { NavLink } from 'react-router-dom';
import TipBox from './../TipBox/TipBox';
import SavedBox from './../SavedBox/SavedBox';

class LogMood extends Component {
  state = {
    mood: null,
    saved: false,
  };

  changeMood = (mood) => {
    this.setState({
      mood: mood,
    });
  };

  handleSubmit = () => {
    this.setState({ saved: true });
    this.props.setMood(this.state.mood);
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
              src="https://image.flaticon.com/icons/svg/3010/3010884.svg"
              alt="icon"
            ></img>
            Mood of the day
          </h1>
          <div className="logBox">
            <h3>How do you feel today?</h3>
            <div id="iconContainer">
              <RadioMood changeMood={(mood) => this.changeMood(mood)}></RadioMood>
            </div>
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

export default LogMood;
