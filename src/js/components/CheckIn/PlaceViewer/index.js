import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import EditIcon from '@material-ui/icons/Edit';
import goodIcon from '../../../../assets/good_status.png';
import badIcon from '../../../../assets/bad_status.png';
import { isCheckInValid } from '../../../actions/checkIn';
import { ADMIN_ACCOUNT_TYPE } from '../../../constants';
import './styles.css';

class PlaceViewer extends Component {
  state = {
    user: this.props.activeUser,
    open: false,
  };

  handleClick = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { vertical, horizontal } = { vertical: 'bottom', horizontal: 'center' };
    const { location, activeUser } = this.props;
    return (
      <div id="PlaceViewerWrapper">
        <div id="PlaceViewrHeader">
          <h2>{location?.name}</h2>
          <img src={location?.isAvaliable ? goodIcon : badIcon} alt="status" />
        </div>
        <div id="PlaceContentWrapper">
          <div id="PhotoWrapper">
            <img alt="location view" src={location.imageUrl} />
          </div>
          <div id="PlaceDetailsWrapper">
            <div id="OccupanyWrapper">
              <h3> Occupany Limit: {location?.maxOccupancy} </h3>
              <h4> Current occupany: {location?.currOccupancy} </h4>
            </div>
            <div id="PlaceDescWrapper">
              <p>{location.description}</p>
            </div>
          </div>
        </div>
        {activeUser.type === ADMIN_ACCOUNT_TYPE ? (
          <div id="AdminActions">
            <button
              id="SendAlertBtn"
              className="primary-btn"
              onClick={() => {
                this.handleClick();
                this.props.sendAlertHandler(location);
              }}
            >
              {' '}
              Send Alert{' '}
            </button>
            <Link
              to={`/alert-system/add/${location?.name}/${location?.address}/${encodeURIComponent(
                location?.imageUrl,
              )}/${location?.maxOccupancy}/${location?.description}`}
            >
              <IconButton aria-label="edit">
                <EditIcon />
              </IconButton>
            </Link>
            <IconButton
              onClick={() => {
                this.props.deleteLocationHandler(location);
              }}
              aria-label="delete"
            >
              <DeleteIcon />
            </IconButton>
          </div>
        ) : isCheckInValid(this, location) ? (
          <button id="CheckInBtn" className="primary-btn" onClick={this.props.onCheckInHandler}>
            Check In
          </button>
        ) : (
          ''
        )}
        <Snackbar
          anchorOrigin={{ vertical, horizontal }}
          open={this.state.open}
          autoHideDuration={4000}
          onClose={this.handleClose}
          key={vertical + horizontal}
        >
          <Alert elevation={6} variant="filled" onClose={this.handleClose} severity="success">
            Alert has be sent!
          </Alert>
        </Snackbar>
      </div>
    );
  }
}

export default PlaceViewer;
