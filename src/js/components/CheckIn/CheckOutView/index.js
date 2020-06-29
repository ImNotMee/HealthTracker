import React, { Component } from 'react';
import './styles.css';

class CheckOutView extends Component {
  render() {
    const { location, checkoutHandler } = this.props;
    return (
      <div id="CheckInStatus" className="windowWrapper">
        {this.props.location?.name !== undefined ? (
          <div id="CheckoutView">
            <h2> You Are Currently Checked In At {location?.name} </h2>
            <button
              className="primary-btn"
              onClick={() => {
                checkoutHandler();
              }}
            >
              Checkout
            </button>
          </div>
        ) : (
          <h2> You Are Currently Not Checked In Anywhere </h2>
        )}
      </div>
    );
  }
}

export default CheckOutView;
