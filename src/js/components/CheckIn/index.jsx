import React, { Component } from 'react';
import ListSelector from '../General/ListSelector';
import { PARK_LOCATIONS } from '../../constants';
import './styles.css';

class Calendar extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    user: this.props.activeUser,
  };
  render() {
    return (
      <div id="CalendarWrapper">
        <div id="LeftWrapper">
          <ListSelector options={PARK_LOCATIONS} onChangeHandler={() => {}} />
        </div>
        <div id="RightWrapper"></div>
      </div>
    );
  }
}

export default Calendar;
