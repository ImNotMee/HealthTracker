import React, { Component } from 'react';
import LocationSelector from '../General/LocationSelector';
import { viewPlace } from '../../actions/checkIn';
import PlaceViewer from './PlaceViewer';
import './styles.css';
import CheckOutView from './CheckOutView';

class CheckIn extends Component {
  state = {
    user: this.props.activeUser,
    locationViewed: undefined,
  };

  render() {
    return (
      <div id="PageWrapper">
        {this.state.user?.checkedInLocation !== null ? (
          <div id="CheckOutWrapper">
            <CheckOutView
              location={this.state.user?.checkedInLocation}
              checkoutHandler={() => {
                this.props.checkoutHandler();
              }}
            />
          </div>
        ) : (
          ''
        )}
        <div id="CheckInWrapper" className="windowWrapper">
          <LocationSelector
            header="Check-In Menu"
            message="Help prevent the spead of COVID by practiciing social ditancing. 
            By using our check-in system you can see the copacity of parks you want 
            to exercise at and help keep it up to date by checking in."
            action="View Place"
            options={Object.keys(this.props.locations)}
            onSubmitHandler={(location) => {
              viewPlace(this, this.props.locations, location);
            }}
          />
          {this.state.locationViewed !== undefined ? (
            <div>
              <hr id="DetailsDivider" />
              <PlaceViewer
                activeUser={this.state.user}
                location={this.state.locationViewed}
                onCheckInHandler={() => {
                  this.props.checkInHandler(this.state.locationViewed);
                }}
              />
            </div>
          ) : (
            ''
          )}
        </div>
      </div>
    );
  }
}

export default CheckIn;
