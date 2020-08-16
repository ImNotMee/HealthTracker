import { USER_ACCOUNT_TYPE, ADMIN_ACCOUNT_TYPE, ADMIN_REMINDER_TYPES } from './../constants';

/*returns the list of user and save it to usermanagement state*/
export const getUser = (page) => {
  const url = '/manageUser/getUsers';

  fetch(url)
    .then((res) => {
      if (res.status === 200) {
        return res.json();
      } else {
        log('cant get user list');
      }
    })
    .then((json) => {
      page.setState({ userList: json.users });
    })
    .catch((error) => {
      console.log(error);
    });
};

export const deleteUser = (page, user) => {
  if (user['type'] === USER_ACCOUNT_TYPE) {
    const userEmail = {
      email: user['email'],
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
    page.state.userList.filter((item) => item['email'] !== user['email']);
    page.forceUpdate();
  }
};

export const assignAdmin = (page, user) => {
  if (user['type'] === USER_ACCOUNT_TYPE) {
    user['type'] = ADMIN_ACCOUNT_TYPE;
    user['reminders'] = { [ADMIN_REMINDER_TYPES.task]: [] };

    const userEmail = {
      email: user['email'],
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
    page.forceUpdate();
  }
};
