import React, { Component } from 'react';
import goodIcon from '../../../../assets/good_status.png';
import badIcon from '../../../../assets/bad_status.png';
import { isCheckInValid } from '../../../actions/checkIn';
import './styles.css';

class PlaceViewer extends Component {
  state = {
    user: this.props.activeUser,
  };

  render() {
    const { location } = this.props;
    return (
      <div id="PlaceViewerWrapper">
        <div id="PlaceViewrHeader">
          <h2>{location?.name}</h2>
          <img src={location?.isAvaliable ? goodIcon : badIcon} alt="status" />
        </div>
        <div id="PlaceContentWrapper">
          <div id="PhotoWrapper">
            <img alt="location view" src={location.imageUrl} />
          </div>
          <div id="PlaceDetailsWrapper">
            <div id="OccupanyWrapper">
              <h3> Occupany Limit: {location?.maxOccupancy} </h3>
              <h4> Current occupany: {location?.currOccupancy} </h4>
            </div>
            <div id="PlaceDescWrapper">
              <p>{location.description}</p>
            </div>
          </div>
        </div>
        {isCheckInValid(this, location) ? (
          <button id="CheckInBtn" className="primary-btn" onClick={this.props.onCheckInHandler}>
            Check In
          </button>
        ) : (
          ''
        )}
      </div>
    );
  }
}

export default PlaceViewer;
