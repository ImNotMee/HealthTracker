import React, { Component } from 'react';
import './styles.css';

class CheckOutView extends Component {
  state = {
    location: this.props.location,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.location === undefined) {
      this.setState({ checkedIn: true });
    }
  }

  render() {
    const { checkoutHandler } = this.props;
    const { location } = this.state;
    return (
      <div key="co_86567-09" id="CheckInStatus" className="windowWrapper">
        {console.log('TESTE', this.state.location)}
        {location?.name !== undefined ? (
          <div key="csdfo_86567-09" id="CheckoutView">
            <h2 key={this.state.location}> You Are Currently Checked In At {location?.name} </h2>
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
