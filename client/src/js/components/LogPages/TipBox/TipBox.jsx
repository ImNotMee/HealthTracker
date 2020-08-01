import React, { Component } from 'react';
import './styles.css';
import { PHYSICAL_TIP, MENTAL_TIP } from './../../../constants';

class TipBox extends Component {
  state = {
    user: this.props.activeUser,
    label: this.props.label,
  };

  render() {
    const title = () => {
      if (this.state.label === 'physical') {
        return 'Physical Tips';
      } else if (this.state.label === 'mental') {
        return 'Mental Tips';
      }
    };
    const tips = () => {
      if (this.state.label === 'physical') {
        return PHYSICAL_TIP.map((tip) => {
          return (
            <li key={tip} id="tipContent">
              {tip}
            </li>
          );
        });
      } else if (this.state.label === 'mental') {
        return MENTAL_TIP.map((tip) => {
          return (
            <li key={tip} id="tipContent">
              {tip}
            </li>
          );
        });
      }
    };
    return (
      <div>
        <h1 id="tipHead">
          <img
            id="icon"
            src="https://image.flaticon.com/icons/png/512/900/900516.png"
            alt="tipIcon"
          ></img>
          {title()}
        </h1>
        <div id="tipBox">{tips()}</div>
      </div>
    );
  }
}

export default TipBox;
