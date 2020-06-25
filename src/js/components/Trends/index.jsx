import React, { Component } from 'react';
import './styles.css';

class Trends extends Component {
  state = {
    user: this.props.activeUser,
  };

  render() {
    return <div id="TrendsWrapper">some trend text and stuff</div>;
  }
}

export default Trends;
