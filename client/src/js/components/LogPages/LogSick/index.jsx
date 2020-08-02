import React, { Component } from 'react';
import './styles.css';
import { NavLink } from 'react-router-dom';

import SymptomInput from './SymptomInput/SymptomInput';
import SymptomList from './SymptomList/SymptomList';
import { addTag } from '../../../actions/sicknessTag';
import { SYMPTOM_OPTION } from '../../../constants';
import SavedBox from './../SavedBox/SavedBox';

class LogSick extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.activeUser,
      symptom: SYMPTOM_OPTION[0],
      list: [],
      saved: false,
    };
    const listSickness = JSON.parse(JSON.stringify(this.props.listSickness));
    this.state.list = listSickness;
  }

  onhandlechange = (event) => {
    this.setState({
      symptom: event.target.value,
    });
  };

  handleSubmit = () => {
    this.setState({ saved: true });
    this.props.setSickness(this.state.list);
    this.savedTimeout = setTimeout(() => this.setState({ saved: false }), 3000);
  };

  componentWillUnmount() {
    clearTimeout(this.savedTimeout);
  }

  render() {
    let saved = null;
    if (this.state.saved === true) {
      saved = <SavedBox />;
    }
    return (
      <div id="LogSickWrapper">
        <div className="logSickView">
          <NavLink to="/overview" id="sickCloseButton">
            <img
              id="xButton"
              src="https://image.flaticon.com/icons/svg/565/565313.svg"
              alt="icon"
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
            <div id="sList">
              <h3 id="SymptomQ">How do you feel? Enter your symptoms</h3>
              <SymptomInput
                symptom={this.state.symptom}
                handleChange={this.onhandlechange}
                addTag={() => addTag(this)}
              />
              <SymptomList id="tagList" symptoms={this.state.list} logComponent={this} />

              <button className="primary-btn" id="logButton" onClick={this.handleSubmit}>
                Save
              </button>
            </div>
          </div>
          {/*saved dialog box*/}
          {saved}
        </div>
      </div>
    );
  }
}

export default LogSick;
