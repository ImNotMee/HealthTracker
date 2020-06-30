import React, { Component } from 'react';
import './styles.css';
import TabList from './../LogWeight/TabList';
import { NavLink } from 'react-router-dom';

class LogMedical extends Component {
  state = {
    user: this.props.activeUser,
  };

  DrugInput() {
    return (
      <form>
        <fieldset>
          <div>
            <label className="Input Drug">
              Medication Name:
              <input type="text" id="MedicalLog" placeholder="Drug Name" />
            </label>
            <label className="Input Dosage">
              Dosage per day:
              <select id="MedicalLog">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </label>
          </div>
          <div>
            <button className="primary-btn" id="logButton">
              Save
            </button>
          </div>
        </fieldset>
      </form>
    );
  }

  AppInput() {
    return (
      <form>
        <fieldset>
          <div>
            <label className="Input event">
              Event:
              <input type="text" id="MedicalLog" placeholder="Event" />
            </label>
            <label className="Input Doctor">
              Doctor's Name:
              <input type="text" id="MedicalLog" placeholder="Doctor's Name" />
            </label>
            <label className="Input Reason">
              Reason/Purpose:
              <input type="text" id="MedicalLog" placeholder="Reason/Purpose" />
            </label>
            <label className="Input Date">
              Date/Time:
              <input type="datetime-local" id="MedicalLog" />
            </label>
            <button className="primary-btn" id="logButton">
              Save
            </button>
          </div>
        </fieldset>
      </form>
    );
  }

  ActInput() {
    return (
      <form>
        <fieldset>
          <div>
            <label className="Input Activity">
              Activity:
              <input type="text" id="MedicalLog" placeholder="Activity" />
            </label>
            <label className="Input Activity">
              Type:
              <input type="text" id="MedicalLog" placeholder="Type" />
            </label>
            <label className="Input Date">
              Date/Time:
              <input type="datetime-local" id="MedicalLog" />
            </label>
            <button className="primary-btn" id="logButton">
              Save
            </button>
          </div>
        </fieldset>
      </form>
    );
  }

  render() {
    return (
      <div id="LogMedicalWrapper">
        <div className="logMedicalView">
          <NavLink to="/overview" id="medCloseButton">
            <img
              id="xButton"
              src="https://image.flaticon.com/icons/svg/565/565313.svg"
              alt="icon"
              s
            ></img>
          </NavLink>
          <h1 id="medicalHeader">
            <img
              id="icon"
              src="https://image.flaticon.com/icons/svg/3127/3127189.svg"
              alt="icon"
            ></img>
            Medical Log
          </h1>
          <div className="logMedicalBox">
            <TabList id="medicalTab">
              <div label="Medication">{this.DrugInput()}</div>
              <div label="Appointment">{this.AppInput()}</div>
              <div label="Activity">{this.ActInput()}</div>
            </TabList>
          </div>
        </div>
      </div>
    );
  }
}

export default LogMedical;
