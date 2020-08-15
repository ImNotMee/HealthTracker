import { API } from '../constants';
const log = console.log;

export const viewPlace = (ctx, locations, location) => {
  log(`Viewing ${location}...`);
  log('Displaying place details', locations[location], '...');
  ctx.setState({
    locationViewed: locations[location],
  });
};

export const checkInHandler = (ctx, ciCtx, location) => {
  log(`Checking in user...`);
  const { activeUser, locationsDB } = ctx.state;
  // locationsDB[location.id].currOccupancy += 1;
  // locationsDB[location.id].isAvaliable = _isAvaliable(locationsDB[location.id]);
  // activeUser.checkedInLocation = location;
  // activeUser.checkInHistory.push({ location: location, time: new Date() });

  const request = new Request(API.checkin(location._id), {
    method: 'PATCH',
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
      if (res === undefined || res.user === undefined || res.location === undefined) {
        log('Checkin user request failed to get response');
      } else {
        locationsDB[location.name] = res.location;
        console.log('RESSS: ', res);
        console.log('RESUSERR', res.user);
        ctx.setState(
          {
            activeUser: res.user,
            locationsDB: locationsDB,
          },
          () => {
            ctx.forceUpdate();
            ciCtx.setState(
              {
                user: res.user,
                checkedInLocation: ctx.state.activeUser.checkedInLocation,
              },
              () => {
                log(
                  `User successfully checked in at ${ctx.state.activeUser.checkedInLocation?.name}`,
                );
              },
            );
          },
        );
      }
    })
    .catch((error) => {
      log('User checkin request failed with error\n', error);
    });
};

const _isAvaliable = (location) => {
  return location.maxOccupancy > location.currOccupancy;
};

export const isCheckInValid = (ctx, location) => {
  return (
    (ctx.state.user?.checkedInLocation !== null || ctx.state.selectedLocation !== undefined) &&
    ctx.state.user?.checkedInLocation?.id !== location?.id
  );
};

export const checkoutHandler = (ctx, ciCtx) => {
  log(`Checking-out user...`);
  const { activeUser, locationsDB } = ctx.state;
  const request = new Request(API.checkout(activeUser.checkedInLocation._id), {
    method: 'PATCH',
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
      if (res === undefined || res.user === undefined || res.location === undefined) {
        log('Checkout user request failed to get response');
      } else {
        locationsDB[activeUser.checkedInLocation.name] = res.location;
        console.log('RESSScheckout: ', res);
        console.log('RESUSERR checkout', res.user);
        ctx.setState(
          {
            activeUser: res.user,
            locationsDB: locationsDB,
          },
          () => {
            // ctx.forceUpdate();
            ciCtx.setState(
              {
                user: res.user,
                checkedInLocation: ctx.state.activeUser.checkedInLocation,
              },
              () => {
                log(
                  `User ${
                    ctx.state.activeUser.checkedInLocation === undefined
                      ? 'successfully'
                      : 'unsuccessfully'
                  } checked-out from ${activeUser.checkedInLocation?.name}`,
                );
              },
            );
          },
        );
      }
    })
    .catch((error) => {
      log('User checkin request failed with error\n', error);
    });
  // const location = activeUser.checkedInLocation;
  // locationsDB[location.name].currOccupancy -= 1;
  // locationsDB[location.name].isAvaliable = _isAvaliable(locationsDB[location.name]);
  // activeUser.checkedInLocation = undefined;
  // ctx.setState({
  //   activeUser: activeUser,
  //   locationsDB: locationsDB,
  // });
  // log(
  //   `User ${
  //     ctx.state.activeUser.checkedInLocation === undefined ? 'successfully' : 'unsuccessfully'
  //   } checked-out from ${location?.name}`,
  // );
};

export class AppLocation {
  constructor(name, maxOccupancy, address, description, image) {
    this.id = name;
    this.name = name;
    this.isAvaliable = true;
    this.address = address;
    this.country = 'Canada';
    this.maxOccupancy = maxOccupancy;
    this.currOccupancy = 0;
    this.description = description;
    this.imageUrl = image;
  }
}
