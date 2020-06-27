import React, { Component } from 'react';
import './styles.css';
import TabList from './../LogWeight/TabList';

class LogMedical extends Component {
  state = {
    user: this.props.activeUser,
  };

  render() {
    return (
      <div id="logMedicalWrapper">
        <TabList>
          <div label="Medication"></div>
          <div label="Appointment"></div>
        </TabList>
      </div>
    );
  }
}
export default LogMedical;
