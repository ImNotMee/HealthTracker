'use strict';
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import PlaceViewer from '../CheckIn/PlaceViewer';
import LocationSelector from '../General/LocationSelector';
import { viewPlace } from '../../actions/checkIn';
import './styles.css';

class AdminCheckIn extends Component {
  state = {
    user: this.props.activeUser,
    locationViewed: undefined,
  };

  render() {
    return (
      <div id="AdminCheckIn">
        <div id="AlertWrapper" className="windowWrapper">
          <LocationSelector
            header="Check-In Alert System"
            message="Help prevent the spead of COVID by alerting
            our users if they have checked into a place that has
            had a COVID case within the past 14 days."
            action="View Place"
            options={Object.keys(this.props.locations)}
            onSubmitHandler={(location) => {
              viewPlace(this, this.props.locations, location);
            }}
          />
          {this.state.locationViewed !== undefined ? (
            <div>
              <hr className="detailsDivider" />
              <PlaceViewer
                activeUser={this.state.user}
                location={this.state.locationViewed}
                deleteLocationHandler={(loc) => {
                  this.props.deleteLocationHandler(this, loc);
                }}
                sendAlertHandler={this.props.sendAlertHandler}
              />
            </div>
          ) : (
            ''
          )}
        </div>
        <NavLink className="fabNavLink" to="/alert-system/add">
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
