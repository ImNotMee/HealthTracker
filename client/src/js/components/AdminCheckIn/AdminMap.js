import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
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
    area: [],
    cords: [],
    activeMarker: {},
    selectedPlace: {},
  };

  componentDidMount() {
    const lists = this.props.location;
    let bb = [];
    if (lists !== {}) {
      Object.keys(lists).forEach(function (key) {
        const a = lists[key];
        console.log(a.address);
        bb.push(a.address);
      });
    }
    this.setState({
      area: bb,
    });
    this.buildMarker();
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

  buildMarker = () => {
    if (this.state.area !== []) {
      this.state.area.forEach((a) => {
        this.getAddress(a);
      });
    }
    console.log(this.state.cords);
  };

  getAddress = (loc) => {
    const formatedAddress = loc.split(' ').join('+');
    const url =
      'https://maps.googleapis.com/maps/api/geocode/json?address=' +
      formatedAddress +
      '&key=' +
      KEY;
    //console.log(url);
    fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        let joined = this.state.cords.push(responseJson.results[0].geometry.location);
        console.log(joined);
        this.setState({
          cords: joined,
        });
      });
  };

  render() {
    if (this.state.area === []) {
      return <div></div>;
    }
    return (
      <div id="googleMapWrapper">
        <Map
          google={this.props.google}
          zoom={14}
          style={mapStyles}
          initialCenter={{ lat: 43.6643, lng: -79.3923 }}
          mapTypeControl={false}
        >
          <Marker onClick={this.onMarkerClick} />
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: KEY,
})(MapContainer);
