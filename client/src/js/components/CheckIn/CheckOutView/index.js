import React, { Component } from 'react';
import './styles.css';

class CheckOutView extends Component {
  render() {
    const { checkoutHandler, location } = this.props;
    return (
      <div key="co_86567-09" id="CheckInStatus" className="windowWrapper">
        {console.log('TESTE', location)}
        {location?.name !== undefined ? (
          <div key="csdfo_86567-09" id="CheckoutView">
            <h2 key="ci_loca123"> You Are Currently Checked In At {location?.name} </h2>
            <button
              key="fja320jfsd"
              className="primary-btn"
              onClick={() => {
                checkoutHandler();
              }}
            >
              Checkout
            </button>
          </div>
        ) : (
          <h2 key="defaultMsgCI"> You Are Currently Not Checked In Anywhere </h2>
        )}
      </div>
    );
  }
}

export default CheckOutView;
