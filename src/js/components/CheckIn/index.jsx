import React, { Component } from 'react';
import CheckInMenu from './CheckInMenu';
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
          <CheckInMenu
            options={Object.keys(this.props.locations)}
            onSubmitHandler={(location) => {
              viewPlace(this, this.props.locations, location);
            }}
          />
          {this.state.locationViewed !== undefined ? (
            <div>
              <hr />
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
