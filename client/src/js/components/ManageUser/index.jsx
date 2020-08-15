import React, { Component } from 'react';
import './styles.css';
import { USER_ACCOUNT_TYPE } from './../../constants';
import { getUser, deleteUser, assignAdmin } from './../../actions/manageUser';
import Button from '@material-ui/core/Button';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { NavLink } from 'react-router-dom';
class ManageUser extends Component {
  state = {
    userList: [],
  };
  render() {
    getUser(this); //server Call
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

              {this.state.userList.map((user) => {
                if (user['type'] === USER_ACCOUNT_TYPE) {
                  return (
                    <TableRow id="userRow" key={user['email']}>
                      <TableCell id="userInfoCell" component="th" scope="row">
                        <li id="userInfoList">
                          User : {user['firstName']} {user['lastName']}{' '}
                        </li>
                        <li id="userInfoList">Email: {user['email']}</li>
                      </TableCell>
                      <TableCell id="userManageButton" component="th" scope="row">
                        <NavLink to={`/user-profile/${user['hash']}`} id="linkView">
                          <Button className="clickable View">View Profile</Button>
                        </NavLink>
                      </TableCell>
                      <TableCell id="userManageButton" component="th" scope="row">
                        <Button
                          className="clickable Manage"
                          onClick={() => assignAdmin(this, user)} //server Call
                        >
                          Assign Admin
                        </Button>
                      </TableCell>
                      <TableCell id="userManageButton" component="th" scope="row">
                        <Button
                          className="clickable Delete"
                          onClick={() => deleteUser(this, user)} //server Call
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
