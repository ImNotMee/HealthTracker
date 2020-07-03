import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import LocationSelector from '../General/LocationSelector';
import './styles.css';

class AdminCheckIn extends Component {
  staet = {};

  render() {
    return (
      <div id="AdminCheckIn">
        <div id="AlertWrapper" className="windowWrapper">
          <LocationSelector
            header="Check-In Alert System"
            message="Help prevent the spead of COVID by alerting
            our users if they have checked into a place that has
            had a COVID case within the past 14 days."
            action="Send Alert"
            options={Object.keys(this.props.locations)}
            onSubmitHandler={this.props.sendAlertHandler}
          />
        </div>
        <NavLink className="fabNavLink" to="/locations/add">
          <Fab variant="extended" id="Fab" color="primary" aria-label="add">
            <AddIcon />
            Add Location
          </Fab>
        </NavLink>
      </div>
    );
  }
}

export default AdminCheckIn;
