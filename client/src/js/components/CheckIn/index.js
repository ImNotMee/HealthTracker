import React, { Component } from 'react';
import LocationSelector from '../General/LocationSelector';
import { viewPlace } from '../../actions/checkIn';
import PlaceViewer from './PlaceViewer';
import './styles.css';
import CheckOutView from './CheckOutView';
import { ACCOUNT_TYPES } from '../../constants';

class CheckIn extends Component {
  state = {
    user: this.props.activeUser,
    locationViewed: undefined,
    checkedInLocation: this.props.activeUser?.checkedInLocation,
  };

  // componentDidUpdate(prevProps, prevState) {
  //   console.log(
  //     'BEFORE',
  //     prevProps.activeUser?.checkedInLocation,
  //     prevState,
  //     this.props.activeUser?.checkedInLocation,
  //     this.state,
  //   );
  //   if (this.state.checkedInLocation !== prevState.checkedInLocation) {
  //     console.log(prevProps, prevState, this.props, this.state);
  //     this.forceUpdate();
  //     //this.setState({ checkedIn : true });
  //   }
  // }

  // renderCheckOutView(checkInLocState) {
  //   console.log('DOUCBLE CEHCK', checkInLocState);
  //   return checkInLocState !== undefined ? (
  //     <div key="ciewqioruq" id="CheckOutWrapper">
  //       <CheckOutView
  //         key="fiu49fhqewjiew"
  //         location={checkInLocState}
  //         checkoutHandler={() => {
  //           this.props.checkoutHandler();
  //         }}
  //       />
  //     </div>
  //   ) : (
  //     ''
  //   );
  // }

  render() {
    return (
      <div key="2309ur0j0rj0" id="PageWrapper">
        {console.log(
          'THINKNKNFDSKN',
          this.props.activeUser,
          this.state.user,
          'LOC\n',
          this.props.activeUser?.checkedInLocation,
          this.state.checkedInLocation,
        )}
        {this.state.user.type !== ACCOUNT_TYPES.admin ? (
          <div key="ciewqioruq" id="CheckOutWrapper">
            <CheckOutView
              key="fiu49fhqewjiew"
              location={this.state.checkedInLocation}
              checkoutHandler={() => {
                this.props.checkoutHandler(this);
              }}
            />
          </div>
        ) : (
          ''
        )}
        <div key="124eriufgh981r" id="CheckInWrapper" className="windowWrapper">
          <LocationSelector
            key="jkfgauy23e23"
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
            <div key="fsdakj23ouu90">
              <hr className="detailsDivider" />
              <PlaceViewer
                key="2823uihdwjhbsf "
                activeUser={this.state.user}
                location={
                  this.state.locationViewed === undefined
                    ? undefined
                    : this.props.locations[this.state.locationViewed?.name]
                }
                onCheckInHandler={(location) => {
                  this.props.checkInHandler(this, location);
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
