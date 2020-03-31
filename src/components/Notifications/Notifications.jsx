import React from 'react';
import { connect } from 'react-redux';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import PropTypes from 'prop-types';
import useStyles from './style';
import ChileTable from '../ChileTable';

function mapStateToProps(state, ownProps) {
  return { state, ownProps };
}

function Notifications({ handleClose, isOpened }) {
  const classes = useStyles();

  return (
    <ClickAwayListener onClickAway={handleClose}>
      <div hidden={!isOpened} className={classes.wrapper}>
        <ChileTable tableName="notifications" />
      </div>
    </ClickAwayListener>
  );
}

Notifications.propTypes = {
  handleClose: PropTypes.func.isRequired,
  isOpened: PropTypes.bool.isRequired,
};

export default connect(
  mapStateToProps,
)(Notifications);
