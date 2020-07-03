import React, { Component } from 'react';
import TabList from '../LogPages/LogWeight/TabList';
import './styles.css';
import UserList from './UserList';
import { USERS } from './../../constants';
class UserManagement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
    };
  }

  state = {
    user: this.props.activeUser,
    firstName: '',
    lastName: '',
    sex: '',
    email: '',
    users: USERS,
  };

  render() {
    return (
      <div id="UserManagementWrapper">
        <div className="LogManagementView left">
          <h1 id="managementHeader">
            <img
              id="icon"
              src="https://image.flaticon.com/icons/svg/3140/3140337.svg"
              alt="icon"
            ></img>
            User/Location Management
          </h1>
          <div className="UMBox">
            <TabList id="ManagementTab">
              <div label="UserManagement">
                <div>
                  <fieldset>
                    <UserList users={USERS} umComponent={this} />
                  </fieldset>
                </div>
              </div>
              <div label="Location Managemnet">
                <div>
                  <fieldset></fieldset>
                </div>
              </div>
            </TabList>
          </div>
        </div>
      </div>
    );
  }
}

export default UserManagement;

/*<span className="userTitle">User List</span>
                                        <div id="userListContainer">
                                            <UserList id="userlist" handleChange={() =>this.viewProfileHanlder()}/>}
<div id={this.props.id}>
    {keys.map((user) => {
        if (USERS[user].type === USER_ACCOUNT_TYPE) {
            return (
                <TableRow id="userTag" key={USERS[user].key}>
                    <TableCell component="th" scope="row">
                        User : {USERS[user].firstName} {USERS[user].lastName}
                    </TableCell>
                    <TableCell>
                        <Button id="Management" value={user} onClick={(e) => this.viewProfileHandler(USERS[user])}></Button>
                    </TableCell>
                </TableRow>
            )
        }
    })}
</div>
                                        </div >*/
