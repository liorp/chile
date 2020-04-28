import React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grow from '@material-ui/core/Grow';
import useStyles from './style';

const ChileLoading = ({ indeterminate, resourceName }) => {
  const classes = useStyles();

  return (
    <Grow direction="up" in mountOnEnter unmountOnExit addEndListener={() => {}}>
      <div className={classes.root}>
        {indeterminate && (
        <CircularProgress size={60} />
        )}
        <br />
        Loading
        {resourceName && ` ${resourceName}`}
        ...
      </div>
    </Grow>
  );
};

ChileLoading.propTypes = {
  indeterminate: PropTypes.bool.isRequired,
  resourceName: PropTypes.string.isRequired,
};

export default ChileLoading;
