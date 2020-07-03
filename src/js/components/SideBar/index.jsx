import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import SettingsIcon from '@material-ui/icons/Settings';
import './styles.css';
import { USER_ACCOUNT_TYPE } from '../../constants';

class Sidebar extends Component {
  state = {
    user: this.props.activeUser,
    profilePic:
      'https://3.bp.blogspot.com/-qDc5kIFIhb8/UoJEpGN9DmI/AAAAAAABl1s/BfP6FcBY1R8/s1600/BlueHead.jpg',
  };

  getUserNavOptions = () => {
    return (
      <div id="NavOptions">
        <NavLink to="/overview" activeClassName="activeLink" className="home_navlink">
          <img
            id="icon"
            alt="overview icon"
            src="https://image.flaticon.com/icons/svg/3062/3062317.svg"
          ></img>
          Overview
        </NavLink>
        <NavLink to="/trends" activeClassName="activeLink" className="home_navlink">
          <img
            id="icon"
            alt="trends icon"
            src="https://image.flaticon.com/icons/svg/1720/1720256.svg"
          ></img>
          Trends
        </NavLink>
        <NavLink to="/reminders" activeClassName="activeLink" className="home_navlink">
          <img
            id="icon"
            alt="reminders icon"
            src="https://image.flaticon.com/icons/svg/1792/1792756.svg"
          ></img>
          Reminders
        </NavLink>
        <NavLink to="/calendar" activeClassName="activeLink" className="home_navlink">
          <img
            id="icon"
            alt="calendar icon"
            src="https://image.flaticon.com/icons/svg/747/747310.svg"
          ></img>
          Calendar
        </NavLink>
        <NavLink to="/check-in" activeClassName="activeLink" className="home_navlink">
          <img
            id="icon"
            alt="check-in icon"
            src="https://image.flaticon.com/icons/svg/684/684809.svg"
          ></img>
          Check-In
        </NavLink>
      </div>
    );
  };

  getAdminNavOptions = () => {
    return (
      <div id="NavOptions">
        <NavLink to="/manage-users" activeClassName="activeLink" className="home_navlink">
          <img
            id="icon"
            alt="overview icon"
            src="https://image.flaticon.com/icons/svg/3062/3062317.svg"
          ></img>
          Users
        </NavLink>
        <NavLink to="/trends/admin" activeClassName="activeLink" className="home_navlink">
          <img
            id="icon"
            alt="trends icon"
            src="https://image.flaticon.com/icons/svg/1720/1720256.svg"
          ></img>
          Trends
        </NavLink>
        <NavLink to="/reminders" activeClassName="activeLink" className="home_navlink">
          <img
            id="icon"
            alt="reminders icon"
            src="https://image.flaticon.com/icons/svg/1792/1792756.svg"
          ></img>
          Reminders
        </NavLink>
        <NavLink to="/alert-system" activeClassName="activeLink" className="home_navlink">
          <img
            id="icon"
            alt="check-in icon"
            src="https://image.flaticon.com/icons/svg/684/684809.svg"
          ></img>
          Alert Sys
        </NavLink>
      </div>
    );
  };

  render() {
    return (
      <div id="sideBar">
        <NavLink className="settings" to={'/settings'}>
          <IconButton aria-label="edit">
            <SettingsIcon />
          </IconButton>
        </NavLink>
        <div id="userProfile">
          <img id="userPicture" alt="profile" src={this.state.profilePic}></img>
          <h2>{this.state.user?.firstName}</h2>
        </div>
        {this.props.activeUser?.type === USER_ACCOUNT_TYPE
          ? this.getUserNavOptions()
          : this.getAdminNavOptions()}
        <button id="logOut" onClick={this.props.logoutHandler}>
          logout
        </button>
      </div>
    );
  }
}

export default Sidebar;
