import { REMINDER_STATUS, NOTIFICATION_TYPE, ADMIN_ACCOUNT_TYPE } from '../constants';
import { addNotificationHandler } from './notification';

const log = console.log;

export const addReminderHandler = (appCtx, reminderCtx) => {
  log('Adding new reminder...');
  const isInputValid = _reminderInputValidate(appCtx, reminderCtx);
  log('Input validity status: ' + isInputValid);
  if (isInputValid) {
    _addReminder(appCtx, reminderCtx);
    reminderCtx.setState({
      newReminderAdded: true,
    });
    log(`Successfully added new reminder '${reminderCtx.state.reminderName}'`);
  } else {
    log('Unsuccessfully in adding reminder');
  }
};

const _addReminder = (appCtx, reminderCtx) => {
  const user = appCtx.state.activeUser;
  const { category, subCategory, reminderName, reminderTime, reminderNote } = reminderCtx.state;
  const newReminder = new Reminder(category, subCategory, reminderName, reminderTime, reminderNote);
  user.reminders[reminderCtx.state.category].push(newReminder);
  appCtx.setState({
    activeUser: user,
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
    _editReminder(appCtx, reminderCtx, category, id);
    reminderCtx.setState({
      newReminderAdded: true,
    });
    log('Successfully editted reminder');
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
  user.reminders[category][index] = reminder;
  appCtx.setState({
    activeUser: user,
  });
};

export const completeReminderHandler = (ctx, category, id, timeout) => {
  log('Updating status of reminder to completed...');
  setReminderStatus(ctx, category, id, REMINDER_STATUS.completed);
  clearTimeout(timeout);
  log('Successfully completed reminder');
};

export const deleteReminderHandler = (ctx, category, id, timeout) => {
  log('Removing reminder...');
  const user = ctx.state.activeUser;
  const index = _getReminderIndex(user.reminders[category], id);
  const reminders = user.reminders[category];
  reminders.splice(index, 1);
  user.reminders[category] = reminders;
  ctx.setState({
    activeUser: user,
  });
  clearTimeout(timeout);
  log('Successfully removed reminder');
};

export const setReminderStatus = (ctx, category, id, status) => {
  const user = ctx.state.activeUser;
  const index = _getReminderIndex(user.reminders[category], id);
  const reminder = user.reminders[category][index];
  reminder.status = status;
  user.reminders[category][id] = reminder;
  ctx.setState({
    activeUser: user,
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
    return 'r' + Math.random().toString(36).substr(3, 8);
  };
}
