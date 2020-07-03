import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { onInputChangeHandler } from '../../actions/utils';
import './styles.css';

class AddLocation extends Component {
  state = {
    locationName: this.props.match?.params.name,
    address: this.props.match?.params.addr,
    imageUrl: decodeURIComponent(this.props.match?.params.img),
    maxOccupancy: this.props.match?.params.maxOcc,
    description: this.props.match?.params.desc,
    isNameValid: true,
    isAddressValid: true,
    isImageUrlValid: true,
    isMaxOccValid: true,
    isDescValid: true,
    newLocationAdded: false,
  };

  goToAlertSystem = () => {
    if (this.state.newLocationAdded) {
      return <Redirect to="/alert-system" />;
    }
  };

  displayErrorMsg = () => {
    const { isNameValid, isAddressValid, isImageUrlValid, isMaxOccValid, isDescValid } = this.state;
    if (isNameValid && isAddressValid && isImageUrlValid && isMaxOccValid && isDescValid) {
      return '';
    } else {
      return <span className="errorMsg"> Input fields in red are missing</span>;
    }
  };

  render() {
    return (
      <div id="AddLocationWrapper">
        {this.goToAlertSystem()}
        <div id="AddLocationWindow" className="windowWrapper">
          <h1> Add Location </h1>
          {this.displayErrorMsg()}
          <div className="locationInputWrapper">
            <span className="inputLabel"> Location Name: </span>
            <input
              className={`input ${this.state.isNameValid ? '' : 'invalidInput'}`}
              type="text"
              id="LocationName"
              name="locationName"
              placeholder="Location name"
              value={this.state.locationName === undefined ? '' : this.state.locationName}
              onChange={(event) => {
                onInputChangeHandler(this, event);
              }}
            />
          </div>
          <div className="locationInputWrapper">
            <span className="inputLabel"> Address: </span>
            <input
              className={`input ${this.state.isAddressValid ? '' : 'invalidInput'}`}
              type="text"
              id="LocationAddress"
              name="address"
              placeholder="Address"
              value={this.state.address === undefined ? '' : this.state.address}
              onChange={(event) => {
                onInputChangeHandler(this, event);
              }}
            />
          </div>
          <div className="locationInputWrapper">
            <span className="inputLabel"> Image Url: </span>
            <input
              className={`input ${this.state.isImageUrlValid ? '' : 'invalidInput'}`}
              type="url"
              id="LocationImgUrl"
              name="imageUrl"
              placeholder="Image Url"
              value={
                this.state.imageUrl === undefined || this.state.imageUrl === 'undefined'
                  ? ''
                  : this.state.imageUrl
              }
              onChange={(event) => {
                onInputChangeHandler(this, event);
              }}
            />
          </div>
          <div className="locationInputWrapper">
            <span className="inputLabel"> Max Occupancy: </span>
            <input
              className={`input ${this.state.isMaxOccValid ? '' : 'invalidInput'}`}
              type="number"
              id="LocationMaxOcc"
              name="maxOccupancy"
              min="1"
              max="5000"
              placeholder="Max occupancy"
              value={this.state.maxOccupancy === undefined ? '' : this.state.maxOccupancy}
              onChange={(event) => {
                onInputChangeHandler(this, event);
              }}
            />
          </div>
          <div className="locationInputWrapper">
            <span className="inputLabel"> Description: </span>
            <textarea
              id="LocationDesc"
              className={`input ${this.state.isDescValid ? '' : 'invalidInput'}`}
              name="description"
              maxLength="400"
              placeholder="Location description"
              value={this.state.description === undefined ? '' : this.state.description}
              onChange={(event) => {
                onInputChangeHandler(this, event);
              }}
            />
            <br />
            <span className="charCount">
              {this.state.description !== undefined ? this.state['description'].length : '0'}/400
            </span>
          </div>
          {this.props.match?.params.name !== undefined ? (
            <button
              className="primary-btn"
              onClick={() => {
                this.props.editLocationHandler(this);
              }}
            >
              Edit
            </button>
          ) : (
            <button
              className="primary-btn"
              onClick={() => {
                this.props.addLocationHandler(this);
              }}
            >
              Add
            </button>
          )}
        </div>
      </div>
    );
  }
}

export default AddLocation;
