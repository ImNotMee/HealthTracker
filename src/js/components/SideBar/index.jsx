import React, {Component} from 'react';
import './styles.css';

class Sidebar extends Component {
  constructor(props) {
      super(props);
      this.userID = "thisisjohn1";
      this.name = "John Doe";
      this.profilePic = "https://3.bp.blogspot.com/-qDc5kIFIhb8/UoJEpGN9DmI/AAAAAAABl1s/BfP6FcBY1R8/s1600/BlueHead.jpg";
  }


    render() {
      return (
        <div id="sideBar">
          <div id="userProfile">
            <img id="userPicture" src={this.profilePic}></img>
            <h2>{this.name}</h2>
            <h3>{this.userID}</h3>
          </div>

          <div id="navLink">
            <img id="icon" src="https://image.flaticon.com/icons/svg/3062/3062317.svg"></img>
            <a id="links" href="">Overview</a>
          </div>
          <div id="navLink">
            <img id="icon" src="https://image.flaticon.com/icons/svg/1720/1720256.svg"></img>
            <a id="links" href="">Trend</a>
          </div>
          <div id="navLink">
            <img id="icon" src="https://image.flaticon.com/icons/svg/1792/1792756.svg"></img>
            <a id="links" href="">Remainders</a>
          </div>
          <div id="navLink">
            <img id="icon" src="https://image.flaticon.com/icons/svg/747/747310.svg"></img>
            <a id="links" href="">Calendar</a>
          </div>
          <div id="navLink">
            <img id="icon" src="https://image.flaticon.com/icons/svg/684/684809.svg"></img>
            <a id="links" href="">Check-In</a>
          </div>

          <button id="logOut" onclick="">logout</button>
        </div>
      )}
}

export default Sidebar;
