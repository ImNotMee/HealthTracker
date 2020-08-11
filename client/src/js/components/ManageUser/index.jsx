import React, { Component } from 'react';
import './styles.css';
import {
  USERS,
  USER_ACCOUNT_TYPE,
  ADMIN_ACCOUNT_TYPE,
  ADMIN_REMINDER_TYPES,
} from './../../constants';
import Button from '@material-ui/core/Button';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { NavLink } from 'react-router-dom';
class ManageUser extends Component {
  onClickDeleteUser = (user) => {
    if (user in USERS) {
      const userEmail = {
        email: USERS[user].email,
      };
      const request = new Request('http://localhost:5000/manageUser/deleteUser', {
        method: 'post',
        body: JSON.stringify(userEmail),
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
        },
      });

      fetch(request)
        .then((res) => {
          if (res.status === 200) {
            res
              .json()
              .then((json) => {
                console.log`user Info sent: ${json}`;
              })
              .catch((error) => {
                console.log('sent Failed: ', error);
              });
          }
        })
        .catch((error) => {
          console.log('sent Failed: ', error);
        });
      delete USERS[user];
      this.forceUpdate();
    }
  };
  onClickAssignAdmin = (user) => {
    if (user in USERS && USERS[user].type === USER_ACCOUNT_TYPE) {
      USERS[user].type = ADMIN_ACCOUNT_TYPE;
      USERS[user].reminders = { [ADMIN_REMINDER_TYPES.task]: [] };
      this.forceUpdate();

      const userEmail = {
        email: USERS[user].email,
      };

      const request = new Request('http://localhost:5000/manageUser/assignAdmin', {
        method: 'post',
        body: JSON.stringify(userEmail),
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
        },
      });

      fetch(request)
        .then((res) => {
          if (res.status === 200) {
            res
              .json()
              .then((json) => {
                console.log`user Info sent: ${json}`;
              })
              .catch((error) => {
                console.log('sent Failed: ', error);
              });
          }
        })
        .catch((error) => {
          console.log('sent Failed: ', error);
        });
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
