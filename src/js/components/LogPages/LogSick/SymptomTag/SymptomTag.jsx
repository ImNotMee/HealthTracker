import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { removeTag } from '../../../../actions/sicknessTag';
import './../styles.css';
class SymptomTag extends Component {
  render() {
    const { symptom, logComponent } = this.props;
    return (
      <label className="SymptomTag">
        {symptom}
        <NavLink to="/overview/logSick" onClick={removeTag.bind(this, logComponent, symptom)}>
          <img
            id="deleteButton"
            src="https://image.flaticon.com/icons/svg/565/565313.svg"
            alt="icon"
          ></img>
        </NavLink>
      </label>
    );
  }
}

export default SymptomTag;
