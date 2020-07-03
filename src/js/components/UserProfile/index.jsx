'use strict';
import React, { Component } from 'react';
import './styles.css';
import { USERS } from './../../constants';
import { NavLink } from 'react-router-dom';

class UserProfile extends Component {
  state = {
    userid: this.props.match?.params.id,
  };

  render() {
    const uid = this.state.userid;
    return (
      <div id="ProfileWrapper">
        <h1 id="ProfileHeader">
          <img
            id="ProfileIcon"
            src="https://image.flaticon.com/icons/svg/876/876176.svg"
            alt="icon"
          ></img>
          Profile Info
        </h1>
        <div id="ProfileBox">
          <div>
            <fieldset>
              <h3 id="userProfileTitle">{USERS[uid].firstName}'s profile</h3>
              <div id="userProfile">
                <div id="userProfileLeft">
                  <img
                    className="ProfilePic"
                    id="userProfileIcon"
                    alt="profileicon"
                    src="https://3.bp.blogspot.com/-qDc5kIFIhb8/UoJEpGN9DmI/AAAAAAABl1s/BfP6FcBY1R8/s1600/BlueHead.jpg"
                  ></img>
                </div>
                <div id="userProfileRight">
                  <label id="infolabel">
                    First Name:
                    <input
                      type="text"
                      className="infodisplay"
                      placeholder={USERS[uid].firstName}
                      disabled
                    ></input>
                  </label>
                  <label id="infolabel">
                    Last Name:
                    <input
                      type="text"
                      className="infodisplay"
                      placeholder={USERS[uid].lastName}
                      disabled
                    ></input>
                  </label>
                  <label id="infolabel">
                    Sex:
                    <input
                      type="text"
                      className="infodisplay"
                      placeholder={USERS[uid].sex}
                      disabled
                    ></input>
                  </label>
                  <label id="infolabel">
                    E-mail:
                    <input
                      type="text"
                      className="infodisplay Email"
                      placeholder={USERS[uid].email}
                      disabled
                    ></input>
                  </label>
                </div>
              </div>
              <NavLink to="/manage-users">
                <button className="primary-btn" id="goBackButton">
                  Back
                </button>
              </NavLink>
            </fieldset>
          </div>
        </div>
      </div>
    );
  }
}

export default UserProfile;
