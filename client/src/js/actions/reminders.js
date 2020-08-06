import { REMINDER_STATUS, NOTIFICATION_TYPE, ADMIN_ACCOUNT_TYPE } from '../constants';
import { addNotificationHandler } from './notification';
import { API } from '../constants';

const log = console.log;

export const addReminderHandler = (appCtx, reminderCtx) => {
  log('Adding new reminder...check');
  const isInputValid = _reminderInputValidate(appCtx, reminderCtx);
  log('Input validity status: ' + isInputValid);
  if (isInputValid) {
    const newReminder = _createNewReminder(reminderCtx);
    _addReminderRequest(appCtx, reminderCtx, newReminder);
  } else {
    log('Unsuccessfully in adding reminder - Invalid input');
  }
};

const _createNewReminder = (reminderCtx) => {
  //const user = appCtx.state.activeUser;
  const { category, subCategory, reminderName, reminderTime, reminderNote } = reminderCtx.state;
  const newReminder = new Reminder(category, subCategory, reminderName, reminderTime, reminderNote);
  //user.reminders[reminderCtx.state.category].push(newReminder);
  return newReminder;
};

const _addReminderRequest = (appCtx, reminderCtx, reminder) => {
  const request = new Request(API.addReminder, {
    method: 'post',
    body: JSON.stringify(reminder),
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
      if (res === undefined || res.user === null || res.user === undefined) {
        log('Add reminder request failed to get response');
      } else {
        appCtx.setState(
          {
            activeUser: res.user,
          },
          () => {
            reminderCtx.setState(
              {
                newReminderAdded: true,
              },
              () => {
                log(`Successfully added new reminder '${reminderCtx.state.reminderName}'`);
              },
            );
          },
        );
      }
    })
    .catch((error) => {
      log('Add reminder request failed with error\n', error);
    });
};

const _reminderInputValidate = (appCtx, reminderCtx) => {
  log('Validating reminder inputs...');
  const isCategoryValid = _isInvalid(reminderCtx.state.category);
  const isSubCategoryValid =
    appCtx.state.activeUser.type === ADMIN_ACCOUNT_TYPE
      ? true
      : _isInvalid(reminderCtx.state.subCategory);
  const isNameValid = _isInvalid(reminderCtx.state.reminderName);
  const isDateTimeValid = _isInvalid(reminderCtx.state.reminderTime);
  reminderCtx.setState({
    isCategoryValid: isCategoryValid,
    isSubCategoryValid: isSubCategoryValid,
    isNameValid: isNameValid,
    isDateTimeValid: isDateTimeValid,
  });

  return isCategoryValid && isSubCategoryValid && isNameValid && isDateTimeValid;
};

const _isInvalid = (value) => {
  return value !== null && value !== undefined && value !== '' && value !== 'select';
};

export const editReminderHandler = (appCtx, reminderCtx, category, id) => {
  log('Editing reminder...');
  const isInputValid = _reminderInputValidate(appCtx, reminderCtx);
  if (isInputValid) {
    const edittedReminder = _editReminder(appCtx, reminderCtx, category, id);
    _makeUpdateRequest(appCtx, edittedReminder, category, id, () => {
      reminderCtx.setState({
        newReminderAdded: true,
      });
      log('Successfully editted reminder');
    });
  } else {
    log('Unsuccessfully editing reminder');
  }
};

const _editReminder = (appCtx, reminderCtx, category, id) => {
  const user = appCtx.state.activeUser;
  const index = _getReminderIndex(user.reminders[category], id);
  const reminder = user.reminders[category][index];
  reminder.category = reminderCtx.state.category;
  reminder.subCategory = reminderCtx.state.subCategory;
  reminder.name = reminderCtx.state.reminderName;
  reminder.time = reminderCtx.state.reminderTime;
  reminder.note = reminderCtx.state.reminderNote;
  return reminder;
};

export const completeReminderHandler = (ctx, category, id, timeout) => {
  log('Updating status of reminder to completed...');
  setReminderStatus(ctx, category, id, REMINDER_STATUS.completed);
  clearTimeout(timeout);
  log('Successfully completed reminder');
};

export const deleteReminderHandler = (ctx, category, id, timeout) => {
  log('Removing reminder...');
  const request = new Request(API.deleteReminder(category, id), {
    method: 'delete',
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
      if (res === undefined || res.user === null || res.user === undefined) {
        log('Delete reminder request failed to get response');
      } else {
        ctx.setState(
          {
            activeUser: res.user,
          },
          () => {
            clearTimeout(timeout);
            log('Successfully removed reminder');
          },
        );
      }
    })
    .catch((error) => {
      log('Delete reminder request failed with error\n', error);
    });
};

export const setReminderStatus = (ctx, category, id, status) => {
  const user = ctx.state.activeUser;
  const index = _getReminderIndex(user.reminders[category], id);
  const reminder = user.reminders[category][index];
  reminder.status = status;
  _makeUpdateRequest(ctx, reminder, category, id, () => {
    log('Successfully updated reminder');
  });
};

const _makeUpdateRequest = (ctx, reminder, category, id, callback) => {
  const request = new Request(API.updateReminder(category, id), {
    method: 'PATCH',
    body: JSON.stringify({ newReminder: reminder }),
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
      if (res === undefined || res.user === null || res.user === undefined) {
        log('Update reminder request failed to get response');
      } else {
        ctx.setState(
          {
            activeUser: res.user,
          },
          callback,
        );
      }
    })
    .catch((error) => {
      log('Update reminder request failed with error\n', error);
    });
};

export const notifyAboutReminder = (ctx, reminder) => {
  setReminderStatus(ctx, reminder.category, reminder.id, REMINDER_STATUS.overdue);
  addNotificationHandler(ctx, NOTIFICATION_TYPE.reminder, reminder.name, reminder.note);
};

const _getReminderIndex = (list, id) => {
  let i;
  for (i = 0; i < list?.length; i++) {
    if (list[i].id === id) {
      return i;
    }
  }
};

export class Reminder {
  constructor(category, subCategory, name, time, note) {
    this.category = category;
    this.subCategory = subCategory;
    this.name = name;
    this.time = time;
    this.note = note;
    this.id = this._generateId();
    this.status = REMINDER_STATUS.active;
  }

  _generateId = () => {
    return (
      Math.random().toString(16).substr(3, 8) +
      Math.random().toString(16).substr(3, 8) +
      Math.random().toString(16).substr(3, 8)
    );
  };
}
