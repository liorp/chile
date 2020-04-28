import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AppBar from '@material-ui/core/AppBar';
import { useLocation } from 'react-router-dom';
import capitalize from '@material-ui/core/utils/capitalize';
import useStyles from './style';
import Notifications from '../Notifications/Notifications';


function mapStateToProps(state, ownProps) {
  return { state, ownProps };
}

function getPageName(location) {
  let pageName = 'Chile';
  if (location.state && location.state.pageName) {
    pageName = location.state.pageName;
  } else if (location.pathname === '/table') {
    const searchParams = new URLSearchParams(location.search);
    if (searchParams.get('name')) {
      pageName = capitalize(searchParams.get('name'));
    }
  } else {
    pageName = capitalize(location.pathname.slice(1).split('-').join(' '));
  }
  return pageName;
}

function TopBar() {
  const classes = useStyles();
  const location = useLocation();
  const [pageName, setPageName] = useState('');
  const [notificationsPaneOpened, setNotificationsPaneOpened] = useState(false);
  const anchorRef = React.useRef(null);

  const handleNotificationsPaneToggle = () => {
    setNotificationsPaneOpened((prevOpen) => !prevOpen);
  };

  const handleNotificationsPanClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setNotificationsPaneOpened(false);
  };

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(notificationsPaneOpened);
  React.useEffect(() => {
    if (prevOpen.current === true && notificationsPaneOpened === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = notificationsPaneOpened;
  }, [notificationsPaneOpened]);

  useEffect(() => {
    setPageName(getPageName(location));
  }, [location]);

  return (
    <AppBar position="fixed" className={classes.appBar} color="inherit">
      <Toolbar>
        <IconButton ref={anchorRef} color={notificationsPaneOpened ? 'primary' : 'inherit'} onClick={handleNotificationsPaneToggle}>
          <Badge badgeContent={4} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <span className={classes.spacer} />
        <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
          { pageName }
        </Typography>
        <span className={classes.spacer} />
        <IconButton ref={anchorRef} color={notificationsPaneOpened ? 'primary' : 'inherit'} onClick={handleNotificationsPaneToggle}>
          <Badge badgeContent={4} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <Notifications
          handleClose={handleNotificationsPanClose}
          isOpened={notificationsPaneOpened}
        />
      </Toolbar>
    </AppBar>
  );
}

export default connect(
  mapStateToProps,
)(TopBar);
