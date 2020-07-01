import React, { Component } from 'react';
import './styles.css';
import { NavLink } from 'react-router-dom';

import SymptomInput from './SymptomInput/SymptomInput';
import SymptomList from './SymptomList/SymptomList';
import { addTag } from '../../../actions/sicknessTag';
import { SYMPTOM_OPTION } from '../../../constants';

class LogSick extends Component {
  state = {
    user: this.props.activeUser,
    symptom: SYMPTOM_OPTION[0],
    list: [],
  };

  onhandlechange = (event) => {
    this.setState({
      symptom: event.target.value,
    });
  };

  render() {
    return (
      <div id="LogSickWrapper">
        <div className="logSickView">
          <NavLink to="/overview" id="sickCloseButton">
            <img
              id="xButton"
              src="https://image.flaticon.com/icons/svg/565/565313.svg"
              alt="icon"
              s
            ></img>
          </NavLink>
          <h1 id="sickHeader">
            <img
              id="icon"
              src="https://image.flaticon.com/icons/svg/3140/3140337.svg"
              alt="icon"
            ></img>
            Sickness Log
          </h1>
          <div className="logSickBox">
            <form>
              <fieldset>
                <div id="sList">
                  <h3 id="SymptomQ">How do you feel? Enter your symptoms</h3>
                  <SymptomInput
                    symptom={this.state.symptom}
                    handleChange={this.onhandlechange}
                    addTag={() => addTag(this)}
                  />
                  <SymptomList id="tagList" symptoms={this.state.list} logComponent={this} />

                  <button className="primary-btn" id="logButton">
                    Save
                  </button>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default LogSick;
