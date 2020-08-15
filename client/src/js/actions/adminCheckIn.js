import { NOTIFICATION_TYPE, API } from '../constants';
import { Notification } from './notification';

const log = console.log;

export const sendAlertHandler = (ctx, location) => {
  log('Alerting users...');
  const request = new Request(API.alertAllByLoc, {
    method: 'PATCH',
    body: JSON.stringify({
      location,
      type: NOTIFICATION_TYPE.alert,
      title: `You Have Recently Visted ${location.name} Which Has Had A COVID Case`,
      message: `A covid case has been reported at ${location.name}`,
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
      if (res === undefined || res.count === undefined) {
        log('Alert users request failed to get response');
      } else {
        log(`${res.count} alerts sent`);
      }
    })
    .catch((error) => {
      log('Alerts user request failed with error\n', error);
    });
  log('Successfully alerted users ');
};

export const deleteLocationHandler = (ctx, adCtx, location) => {
  log('Deleting location...');
  const locs = ctx.state.locationsDB;
  const key = location._id;
  const request = new Request(API.deleteLocation(key), {
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
      if (res === undefined || res.deletedLocation === null || res.deletedLocation === undefined) {
        log('Delete location request failed to get response');
      } else {
        delete locs[res.deletedLocation.name];
        ctx.setState(
          {
            locationsDB: locs,
          },
          () => {
            log('Successfully deleted location', key, ctx.state.locationsDB);
          },
        );

        adCtx.setState({
          locationViewed: undefined,
        });
      }
    })
    .catch((error) => {
      log('Delete location request failed with error\n', error);
    });
};

export const addLocationHandler = (ctx, addLocCtx) => {
  log('Adding new location...');
  if (_locationInputValidate(addLocCtx)) {
    const locDB = ctx.state.locationsDB;
    const { locationName, address, imageUrl, maxOccupancy, description } = addLocCtx.state;
    const request = new Request(API.addLocation, {
      method: 'post',
      body: JSON.stringify({
        name: locationName,
        isAvaliable: true,
        address,
        country: 'Canada',
        imageUrl,
        maxOccupancy,
        currOccupancy: 0,
        description,
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
        if (res === undefined || res.newLoc === null || res.newLoc === undefined) {
          log('Add location request failed to get response');
        } else {
          locDB[res.newLoc.name] = res.newLoc;
          ctx.setState(
            {
              locationsDB: locDB,
            },
            () => {
              log('Successfully added new location to DB', ctx.state.locationsDB);
            },
          );
          addLocCtx.setState({
            newLocationAdded: true,
          });
        }
      })
      .catch((error) => {
        log('Add location request failed with error\n', error);
      });
  } else {
    log('Unuccessful in adding new location to DB');
  }
};

export const editLocationHandler = (ctx, locCtx) => {
  log('Editing location...');
  if (_locationInputValidate(locCtx)) {
    _editLocation(ctx, locCtx);
  } else {
    log('Unsuccessful in editing location');
  }
};

const _editLocation = (appCtx, locCtx) => {
  const locs = appCtx.state.locationsDB;
  const loc = locs[locCtx.state.locationName];
  const request = new Request(API.updateLocation(loc._id), {
    method: 'PUT',
    body: JSON.stringify({
      newLocation: {
        name: locCtx.state.locationName,
        isAvaliable: loc.isAvaliable,
        address: locCtx.state.address,
        country: loc.country,
        imageUrl: locCtx.state.imageUrl,
        maxOccupancy: locCtx.state.maxOccupancy,
        currOccupancy: loc.currOccupancy,
        description: locCtx.state.description,
      },
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
      if (res === undefined || res.updatedLocation === null || res.updatedLocation === undefined) {
        log('update location request failed to get response');
      } else {
        locs[res.updatedLocation.name] = res.updatedLocation;
        appCtx.setState({
          locationsDB: locs,
        });
        locCtx.setState(
          {
            newLocationAdded: true,
          },
          () => {
            log('Successfully updated location', res.updatedLocation);
          },
        );
      }
    })
    .catch((error) => {
      log('Add update request failed with error\n', error);
    });
};

const _locationInputValidate = (locCtx) => {
  log('Validating reminder inputs...');
  const isNameValid = _isInvalid(locCtx.state.locationName);
  const isAddressValid = _isInvalid(locCtx.state.address);
  const isImageUrlValid = _isInvalid(locCtx.state.imageUrl);
  const isMaxOccValid = _isInvalid(locCtx.state.maxOccupancy);
  const isDescValid = _isInvalid(locCtx.state.description);

  locCtx.setState({
    isNameValid: isNameValid,
    isAddressValid: isAddressValid,
    isImageUrlValid: isImageUrlValid,
    isMaxOccValid: isMaxOccValid,
    isDescValid: isDescValid,
  });

  return isNameValid && isAddressValid && isImageUrlValid && isMaxOccValid && isDescValid;
};

const _isInvalid = (value) => {
  return (
    value !== null &&
    value !== undefined &&
    value !== '' &&
    value !== 'select' &&
    value !== 'undefined'
  );
};
