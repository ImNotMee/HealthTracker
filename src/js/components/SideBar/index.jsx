import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './styles.css';

class Sidebar extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    user: this.props.activeUser,
    profilePic:
      'https://3.bp.blogspot.com/-qDc5kIFIhb8/UoJEpGN9DmI/AAAAAAABl1s/BfP6FcBY1R8/s1600/BlueHead.jpg',
  };

  render() {
    return (
      <div id="sideBar">
        <div id="userProfile">
          <img id="userPicture" src={this.state.profilePic}></img>
          <h2>{this.state.user.firstName}</h2>
        </div>
        <div id="NavOptions">
          <NavLink to="/overview" className="home_navlink">
            <img id="icon" src="https://image.flaticon.com/icons/svg/3062/3062317.svg"></img>
            Overview
          </NavLink>
          <NavLink to="/trends" className="home_navlink">
            <img id="icon" src="https://image.flaticon.com/icons/svg/1720/1720256.svg"></img>
            Trends
          </NavLink>
          <NavLink to="/reminders" className="home_navlink">
            <img id="icon" src="https://image.flaticon.com/icons/svg/1792/1792756.svg"></img>
            Reminders
          </NavLink>
          <NavLink to="/calendar" className="home_navlink">
            <img id="icon" src="https://image.flaticon.com/icons/svg/747/747310.svg"></img>
            Calendar
          </NavLink>
          <NavLink to="/check-in" className="home_navlink">
            <img id="icon" src="https://image.flaticon.com/icons/svg/684/684809.svg"></img>
            Check-In
          </NavLink>
        </div>
        <button id="logOut" onClick={this.props.logoutHandler}>
          logout
        </button>
      </div>
    );
  }
}

export default Sidebar;
