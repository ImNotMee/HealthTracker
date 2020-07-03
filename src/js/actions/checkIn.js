const log = console.log;

export const viewPlace = (ctx, locations, location) => {
  log(`Viewing ${location}...`);
  log('Displaying place details', locations[location], '...');
  ctx.setState({
    locationViewed: locations[location],
  });
};

export const checkInHandler = (ctx, location) => {
  log(`Checking in user...`);
  const { activeUser, locationsDB } = ctx.state;
  locationsDB[location.id].currOccupancy += 1;
  locationsDB[location.id].isAvaliable = _isAvaliable(locationsDB[location.id]);
  activeUser.checkedInLocation = location;
  activeUser.checkInHistory.push({ location: location, time: new Date() });
  ctx.setState({
    activeUser: activeUser,
    locationsDB: locationsDB,
  });
  log(`User successfully checked in at ${ctx.state.activeUser.checkedInLocation?.name}`);
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

export const checkoutHandler = (ctx) => {
  log(`Checking-out user...`);
  const { activeUser, locationsDB } = ctx.state;
  const location = activeUser.checkedInLocation;
  locationsDB[location.id].currOccupancy -= 1;
  locationsDB[location.id].isAvaliable = _isAvaliable(locationsDB[location.id]);
  activeUser.checkedInLocation = undefined;
  ctx.setState({
    activeUser: activeUser,
    locationsDB: locationsDB,
  });
  log(
    `User ${
      ctx.state.activeUser.checkedInLocation === undefined ? 'successfully' : 'unsuccessfully'
    } checked-out from ${location?.name}`,
  );
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
