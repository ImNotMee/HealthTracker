import React, {Component} from 'react';
import './styles.css';

class Sidebar extends Component {
  constructor(props) {
      super(props);
      this.state = {
        user: this.props.activeUser,
        profilePic: "https://3.bp.blogspot.com/-qDc5kIFIhb8/UoJEpGN9DmI/AAAAAAABl1s/BfP6FcBY1R8/s1600/BlueHead.jpg"
      }
  }
  
}
