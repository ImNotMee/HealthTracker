import { API } from '../constants';
const log = console.log;

export const readCookie = (app) => {
  log('Reading cookie...');
  const url = 'http://localhost:5000/auth/session';

  fetch(url)
    .then((res) => {
      if (res.status === 200) {
        return res.json();
      }
    })
    .then((json) => {
      if (json && json.activeUser) {
        setActiveUserAndLocs(app, json.activeUser, json.locations);
      }
      log('Cookie read');
    })
    .catch((error) => {
      log(error);
    });
};

export const setActiveUserAndLocs = (app, user, locations) => {
  app.setState(
    {
      activeUser: user,
      locationsDB: locations,
    },
    () => {
      log(`${app.state.activeUser === user ? 'Successfully' : 'Unsuccessfully'} login`);
    },
  );
};

export const onLoginHandler = (landingPage, email, password) => {
  log(email, password);
  const loginCred = { email: email, password: password };
  const request = new Request(API.login, {
    method: 'post',
    body: JSON.stringify(loginCred),
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
    },
  });

  // Send the request with fetch()
  fetch(request)
    .then((res) => {
      if (res.status === 200) {
        return res.json();
      }
    })
    .then((res) => {
      // check login attempt
      if (res === undefined || res.activeUser === null || res.activeUser === undefined) {
        landingPage.setState({
          invalidLogin: true,
        });
        log('Invalid login attempt. Try again');
      } else {
        landingPage.setState({
          userEmail: email,
          userPassword: password,
          invalidLogin: false,
        });
        landingPage.props.setActiveUserAndLocsHandler(res.activeUser, res.locations);
      }
    })
    .catch((error) => {
      log('Login request failed', error);
    });
};
