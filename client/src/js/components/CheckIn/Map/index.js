import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import './styles.css';
const KEY = 'AIzaSyCf9XZFO5JATuT08FHK3AIrcoHAPMpHd-Y';

const mapStyles = {
  width: '100%',
  height: '100%',
  position: 'relative',
};

export class MapContainer extends Component {
  state = {
    user: this.props.activeUser,
    showingInfoWindow: false,
    area: {},
    activeMarker: {},
    selectedPlace: {},
  };

  componentDidMount() {
    this.getAddress();
  }

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });

  onClose = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  };

  getAddress = () => {
    const formatedAddress = this.props.location.address.split(' ').join('+');
    const url =
      'https://maps.googleapis.com/maps/api/geocode/json?address=' +
      formatedAddress +
      '&key=' +
      KEY;
    //console.log(url);
    fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        //console.log(responseJson.results[0].geometry.location);
        this.setState({
          area: responseJson.results[0].geometry.location,
        });
      });
  };

  render() {
    return (
      <div id="googleMapWrapper">
        <Map
          google={this.props.google}
          zoom={14}
          style={mapStyles}
          initialCenter={{ lat: 43.6643, lng: -79.3923 }}
          mapTypeControl={false}
        >
          <Marker
            onClick={this.onMarkerClick}
            name={this.props.location.name}
            position={{ lat: 43.6643, lng: -79.3923 }}
          />
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onClose={this.onClose}
            maxWidth={200}
          >
            <div>
              <h3>{this.props.location.name}</h3>
              <p>Address: {this.props.location.address}</p>
              <p>Information: {this.props.location.description}</p>
              <p>Max Occupancy: {this.props.location.maxOccupancy}</p>
            </div>
          </InfoWindow>
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: KEY,
})(MapContainer);
