import React, {Component} from 'react';
import './styles.css';

class Sidebar extends Component {
  constructor(props) {
      super(props);
  }


    render() {
      return (
        <div id="sidebar">
          <div>
            <img id="userprofile" src="https://media-exp1.licdn.com/dms/image/C560BAQFHd3L0xFcwcw/company-logo_200_200/0?e=2159024400&v=beta&t=n0t8JMKRzeZtfUr1dh_p_JqyJEuhnwPHD8LJ0p1L_Tg"></img>
            <h2>Name</h2>
            <h3>UserID</h3>
          </div>

          <div id="navlink">
            <img id="icon" src="https://media-exp1.licdn.com/dms/image/C560BAQFHd3L0xFcwcw/company-logo_200_200/0?e=2159024400&v=beta&t=n0t8JMKRzeZtfUr1dh_p_JqyJEuhnwPHD8LJ0p1L_Tg"></img>
            <a id="links" href="">Overview</a>
          </div>
          <div id="navlink">
            <img id="icon" src="https://media-exp1.licdn.com/dms/image/C560BAQFHd3L0xFcwcw/company-logo_200_200/0?e=2159024400&v=beta&t=n0t8JMKRzeZtfUr1dh_p_JqyJEuhnwPHD8LJ0p1L_Tg"></img>
            <a id="links" href="">Trend</a>
          </div>
          <div id="navlink">
            <img id="icon" src="https://media-exp1.licdn.com/dms/image/C560BAQFHd3L0xFcwcw/company-logo_200_200/0?e=2159024400&v=beta&t=n0t8JMKRzeZtfUr1dh_p_JqyJEuhnwPHD8LJ0p1L_Tg"></img>
            <a id="links" href="">Remainders</a>
          </div>
          <div id="navlink">
            <img id="icon" src="https://media-exp1.licdn.com/dms/image/C560BAQFHd3L0xFcwcw/company-logo_200_200/0?e=2159024400&v=beta&t=n0t8JMKRzeZtfUr1dh_p_JqyJEuhnwPHD8LJ0p1L_Tg"></img>
            <a id="links" href="">Calendar</a>
          </div>
          <div id="navlink">
            <img id="icon" src="https://media-exp1.licdn.com/dms/image/C560BAQFHd3L0xFcwcw/company-logo_200_200/0?e=2159024400&v=beta&t=n0t8JMKRzeZtfUr1dh_p_JqyJEuhnwPHD8LJ0p1L_Tg"></img>
            <a id="links" href="">Check-In</a>
          </div>
        </div>
      )}
}

export default Sidebar;
