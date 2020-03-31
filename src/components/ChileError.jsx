import React from 'react';
import PropTypes from 'prop-types';

const ChileError = ({ error }) => (
  <div>
    Error occurred:
    {error.message}
  </div>
);

ChileError.propTypes = {
  error: PropTypes.shape({
    message: PropTypes.string.isRequired,
  }).isRequired,
};

export default ChileError;
