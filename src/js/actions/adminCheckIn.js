import { NOTIFICATION_TYPE, USER_ACCOUNT_TYPE } from '../constants';
import { Notification } from './notification';

const log = console.log;

export const sendAlertHandler = (ctx, location) => {
  log('Alerting users...');
  const users = ctx.state.userDB;
  for (let key in users) {
    let user = users[key];
    if (user.type === USER_ACCOUNT_TYPE && _wasUserCheckedIn(user, location)) {
      let notif = new Notification(
        NOTIFICATION_TYPE.alert,
        'You May Have COVID',
        `A covid case has been reported at ${location.name}`,
      );
      user.notifications.push(notif);
      users[key] = user;
    }
  }

  ctx.setState(
    {
      userDB: users,
    },
    () => {
      log('Successfully alerted users ' + JSON.stringify(ctx.state.userDB));
    },
  );
};

const _wasUserCheckedIn = (user, location) => {
  const locs = user.checkInHistory;
  for (let loc in locs) {
    if (loc.id === location.id) {
      return true;
    }
  }
  return false;
};
