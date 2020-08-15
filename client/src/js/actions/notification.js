import reminderSound from '../../assets/light.mp3';
import { NOTIFICATION_TYPE, API } from '../constants';

const log = console.log;

export const addNotificationHandler = (ctx, type, title, message) => {
  log('Creating notification...');
  const notif = new Notification(type, title, message);
  const user = ctx.state.activeUser;
  user.notifications.push(notif);
  ctx.setState({
    activeUser: user,
  });
  log('Successfully created notification', ctx.state.activeUser.notifications);
};

export const removeNotificationHandler = (ctx, id) => {
  const user = ctx.state.activeUser;
  console.log(user);
  const notifications = user.notifications;
  const index = _getNotificationIndex(notifications, id);
  const notif = notifications[index];
  console.log(notif, index);
  if (notif.type === NOTIFICATION_TYPE.reminder) {
    notifications.splice(index, 1);
    user.notifications = notifications;
    ctx.setState(
      {
        activeUser: user,
      },
      () => {
        console.log('Removed reminder notification banner', user);
      },
    );
  } else {
    const request = new Request(API.removeNotif, {
      method: 'PATCH',
      body: JSON.stringify({
        _id: id,
      }),
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
    });

    fetch(request)
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        }
      })
      .then((res) => {
        if (res === undefined || res.user === undefined) {
          log('Remove alert request failed to get response');
        } else {
          ctx.setState(
            {
              activeUser: res.user,
            },
            () => {
              console.log('Removed alert banner', user);
            },
          );
        }
      })
      .catch((error) => {
        log('Remove alert request failed with error\n', error);
      });
  }
};

const _getNotificationIndex = (list, id) => {
  let i;
  for (i = 0; i < list.length; i++) {
    log('list', list[i].id, id);
    if (list[i]._id === id) {
      return i;
    }
  }
};

export const addTimerHandler = (ctx, id, timer) => {
  const user = ctx.state.activeUser;
  user.timers.push({ id: id, timer: timer });
  ctx.setState({
    activeUser: user,
  });
};

export class Notification {
  constructor(type, title, message) {
    this.type = type;
    this.title = title;
    this.message = message;
    this.id = this._generateId();
  }

  _generateId = () => {
    return 'n' + Math.random().toString(36).substr(3, 8);
  };
}

export const playSound = () => {
  let rAudio = new Audio(reminderSound);
  rAudio.play();
};

export const getNumNotifs = (notifications, type) => {
  let count = 0;
  let i;
  for (i = 0; i < notifications?.length; i++) {
    if (notifications[i].type === type) {
      count += 1;
    }
  }
  return count;
};
