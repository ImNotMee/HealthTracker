import React, { Component } from 'react';
import './styles.css';

class Appointment extends Component {
  state = {
    appointments: this.props.appointments,
  };

  getAppointments() {
    console.log(this.props.appointments);
    let appoint = [];
    for (let i = 0; i < this.state.appointments.length; i++) {
      appoint.push(
        <p id="appointmentBox" key={i}>
          {this.state.appointments[i]}
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
