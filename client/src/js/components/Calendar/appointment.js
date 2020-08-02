import React, { Component } from 'react';
import './styles.css';

class Appointment extends Component {
  state = {
    appointments: this.props.appointments,
  };

  getAppointments() {
    let appoint = [];
    for (let i = 0; i < this.state.appointments.length; i++) {
      appoint.push(
        <p id="appointmentBox" key={i}>
          {this.state.appointments[i][1]} <strong>{this.state.appointments[i][0]}</strong>
        </p>,
      );
    }
    return <div id="boxContainer">{appoint}</div>;
  }

  render() {
    return <div>{this.getAppointments()}</div>;
  }
}

export default Appointment;
