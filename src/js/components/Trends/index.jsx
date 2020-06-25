import React, { Component } from 'react';
import './styles.css';

class Trends extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    user: this.props.activeUser,
  };
  render() {
    return <div id="TrendsWrapper">some trend text and stuff</div>;
  }
}

export default Trends;
