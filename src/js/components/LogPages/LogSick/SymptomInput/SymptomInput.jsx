import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { SYMPTOM_OPTION } from '../../../../constants';
import './../../styles.css';
class SymptomInput extends Component {
  render() {
    const { symptom, handleChange, addTag } = this.props;

    return (
      <div id="SymptomInput">
        <select id="SymptomOption" value={symptom} onChange={handleChange} placeholder="Symptoms">
          {SYMPTOM_OPTION.map((value) => (
            <option key={value} className="option" value={value}>
              {value}
            </option>
          ))}
        </select>
        <NavLink to="/overview/logSick" id="addTagButton" onClick={addTag}>
          <img
            id="addIcon"
            src="https://image.flaticon.com/icons/svg/1057/1057216.svg"
            alt="icon"
          ></img>
        </NavLink>
      </div>
    );
  }
}

export default SymptomInput;
