import React, { Component } from 'react';
import ListSelector from '../General/ListSelector';
import { PARK_LOCATIONS } from '../../constants';
import './styles.css';

class CheckIn extends Component {
  state = {
    user: this.props.activeUser,
    location: null,
  };

  onSelectHandler = (event) => {
    const TARGET = event.target;
    this.setState({
      location: TARGET.value,
    });
  };

  render() {
    return (
      <div id="PageWrapper">
        <div id="LeftWrapper">
          <div id="CheckInWrapper" className="windowWrapper">
            <h2>Check-In Menu</h2>
            <p>
              Help prevent the spead of COVID by practiciing social ditancing. By using our check-in
              system you can see the copacity of parks you want to exercise at and help keep it up
              to date by checking in.
            </p>
            <p>Please select a location to see its occupancy status. </p>
            <ListSelector
              id="List"
              options={PARK_LOCATIONS}
              onChangeHandler={this.onSelectHandler}
            />
            <button className="primary-btn" onClick={() => {}}>
              View Place
            </button>
          </div>
        </div>
        <div id="RightWrapper"></div>
      </div>
    );
  }
}

export default CheckIn;
