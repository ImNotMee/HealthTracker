import React, { Component } from 'react';
import ListSelector from '../../General/ListSelector';
import './styles.css';

class CheckInMenu extends Component {
  state = {
    selectedLocation: undefined,
  };

  onSelectHandler = (event) => {
    const TARGET = event.target;
    this.setState({
      selectedLocation: TARGET.value,
    });
  };

  render() {
    return (
      <div id="CheckInWrapper">
        <h2>Check-In Menu</h2>
        <p>
          Help prevent the spead of COVID by practiciing social ditancing. By using our check-in
          system you can see the copacity of parks you want to exercise at and help keep it up to
          date by checking in.
        </p>
        <div id="SelectWrapper">
          <h3>Please select a location: </h3>
          <ListSelector
            id="List"
            options={this.props.options}
            onChangeHandler={this.onSelectHandler}
          />
        </div>
        <button
          id="ViewPlaceBtn"
          className="primary-btn"
          onClick={() => {
            this.props.onSubmitHandler(this.state.selectedLocation);
          }}
        >
          View Place
        </button>
      </div>
    );
  }
}

export default CheckInMenu;
