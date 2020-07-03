import React, { Component } from 'react';
import './styles.css';
import Button from '@material-ui/core/Button';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { USERS } from './../../constants';
import { removeUser } from './../../actions/userManagement';

class UserTag extends Component {
  render() {
    const { user, umComponent } = this.props;
    return (
      <TableRow id="userTag" key={USERS[user].hash}>
        <TableCell component="th" scope="row">
          User : {USERs[user].firstName} {USERS[user].lastName}
        </TableCell>
        <TableCell>
          <Button id="Management" onClick={removeUser.bind(this, umComponent, user)}>
            remove
          </Button>
        </TableCell>
      </TableRow>
    );
  }
}

export default UserTag;
