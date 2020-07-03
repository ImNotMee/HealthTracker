'use strict';
import React, { Component } from 'react';
import ListSelector from '../ListSelector';
import { onSelectHandler } from '../../../actions/utils';
import './styles.css';

class LocationSelector extends Component {
  state = {
    selectedLocation: undefined,
  };

  render() {
    return (
      <div id="LocationSelectorWrapper">
        <h2>{this.props.header}</h2>
        <p>{this.props.message}</p>
        <div id="SelectWrapper">
          <h3>Please select a location: </h3>
          <ListSelector
            id="LocList"
            name="locations"
            autoComplete="on"
            options={this.props.options}
            onChangeHandler={(event) => {
              onSelectHandler(this, event, 'selectedLocation');
            }}
          />
        </div>
        <button
          id="ActionBtn"
          className="primary-btn"
          onClick={() => {
            this.props.onSubmitHandler(this.state.selectedLocation);
          }}
        >
          {this.props.action}
        </button>
      </div>
    );
  }
}

export default LocationSelector;
