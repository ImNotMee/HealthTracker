import React, { Component } from 'react';
import UserTag from './UserTag';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import { USERS, USER_ACCOUNT_TYPE } from './../../constants';

class UserList extends Component {
  render() {
    const { users, umComponent } = this.props;
    const keys = Object.getOwnPropertyNames(users);
    return (
      <Table className="userList">
        <TableBody>
          {keys.map((user) => {
            if (USERS[user].type === USER_ACCOUNT_TYPE) {
              return <UserTag user={user} umComponent={umComponent} />;
            }
          })}
        </TableBody>
      </Table>
    );
  }
}

export default UserList;
