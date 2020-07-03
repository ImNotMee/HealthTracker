import React, { Component } from 'react';
import './styles.css';
import { USERS, USER_ACCOUNT_TYPE, ADMIN_ACCOUNT_TYPE } from './../../constants';
import Button from '@material-ui/core/Button';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { NavLink } from 'react-router-dom';
class ManageUser extends Component {
  onClickDeleteUser = (user) => {
    if (user in USERS) {
      delete USERS[user];
      this.forceUpdate();
    }
  };
  onClickAssignAdmin = (user) => {
    if (user in USERS && USERS[user].type === USER_ACCOUNT_TYPE) {
      USERS[user].type = ADMIN_ACCOUNT_TYPE;
      this.forceUpdate();
    }
  };

  render() {
    const keys = Object.getOwnPropertyNames(USERS);
    return (
      <div id="ManageUserWrapper">
        <h1 id="ManagementHeader">
          <img
            id="userManageicon"
            src="https://image.flaticon.com/icons/svg/876/876176.svg"
            alt="icon"
          ></img>
          User Management
        </h1>
        <div id="userManageBox">
          <div>
            <fieldset>
              <h2 id="userListTitle">User List</h2>
              {keys.map((user) => {
                if (USERS[user].type === USER_ACCOUNT_TYPE) {
                  return (
                    <TableRow id="userRow" key={USERS[user].email}>
                      <TableCell id="userInfoCell" component="th" scope="row">
                        <li id="userInfoList">
                          User : {USERS[user].firstName} {USERS[user].lastName}{' '}
                        </li>
                        <li id="userInfoList">Email: {USERS[user].email}</li>
                      </TableCell>
                      <TableCell id="userManageButton" component="th" scope="row">
                        <NavLink to={`/user-profile/${USERS[user].hash}`} id="linkView">
                          <Button className="clickable View">View Profile</Button>
                        </NavLink>
                      </TableCell>
                      <TableCell id="userManageButton" component="th" scope="row">
                        <Button
                          className="clickable Manage"
                          onClick={() => this.onClickAssignAdmin(user)}
                        >
                          Assign Admin
                        </Button>
                      </TableCell>
                      <TableCell id="userManageButton" component="th" scope="row">
                        <Button
                          className="clickable Delete"
                          onClick={() => this.onClickDeleteUser(user)}
                        >
                          Remove
                        </Button>
                      </TableCell>
                    </TableRow>
                  );
                } else {
                  return undefined;
                }
              })}
            </fieldset>
          </div>
        </div>
      </div>
    );
  }
}

export default ManageUser;
