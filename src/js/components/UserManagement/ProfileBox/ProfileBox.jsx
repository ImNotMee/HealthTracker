import React, { Component } from 'react';
import './styles.css';

class ProfileBox extends Component {
  state = {
    user: this.props.activeUser,
    account: this.props.account,
  };

  render() {
    return (
      <div>
        <h1 id="profileHead">Profile Info</h1>
        <div id="profileInfoBox">
          <form>
            <fieldset>
              <label id="infolabel">
                First Name:
                <input
                  type="text"
                  id="infodisplay"
                  placeholder={this.state.account.firstName}
                  disabled
                ></input>
              </label>
              <label id="infolabel">
                Last Name:
                <input
                  type="text"
                  id="infodisplay"
                  placeholder={this.state.account.lastName}
                  disabled
                ></input>
              </label>
              <label id="infolabel">
                Sex:
                <input
                  type="text"
                  id="infodisplay"
                  placeholder={this.state.account.sex}
                  disabled
                ></input>
              </label>
              <label id="infolabel">
                E-mail:
                <input
                  type="text"
                  id="infodisplay"
                  placeholder={this.state.account.email}
                  disabled
                ></input>
              </label>
              <button className="primary-btn" id="logButton">
                Delete
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    );
  }
}

export default ProfileBox;
