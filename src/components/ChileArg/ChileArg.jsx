import React from 'react';
import PropTypes from 'prop-types';
import {
  TextField, Select, MenuItem, Checkbox, FormControlLabel, InputLabel, FormControl,
} from '@material-ui/core';
import useStyles from './style';


function ChileArg({
  name, nickname, type, value, enabled, required, options, onValueChange,
}) {
  const classes = useStyles();
  const label = nickname || name;

  switch (type) {
    case 'int':
      return (
        <TextField
          label={label}
          type="number"
          value={value}
          required={required}
          disabled={enabled == null ? false : !enabled}
          onChange={(e) => onValueChange(e.target.value)}
        />
      );
    case 'str':
      return (
        <TextField
          label={label}
          value={value}
          required={required}
          disabled={enabled == null ? false : !enabled}
          onChange={(e) => onValueChange(e.target.value)}
        />
      );
    case 'bool':
      return (
        <FormControlLabel
          className={classes.checkBoxFormControlLabel}
          label={label}
          control={
            (
              <Checkbox
                checked={value || false}
                required={required}
                disabled={enabled == null ? false : !enabled}
                onChange={(e) => onValueChange(e.target.checked)}
              />
            )
          }
        />
      );
    case 'enum':
      return (
        <FormControl className={classes.formControl}>
          <InputLabel>{label}</InputLabel>
          <Select
            // should be {value ?? ''} but lint doesn't like it and it can't be disabled!
            value={value != null ? value : ''}
            required={required}
            disabled={enabled == null ? false : !enabled}
            onChange={(e) => onValueChange(e.target.value)}
          >
            {options.map(
              (opt) => (<MenuItem value={opt} key={opt}>{opt}</MenuItem>),
            )}
          </Select>
        </FormControl>
      );
    default:
      return <span>InvalidArgType!!!</span>;
  }
}

ChileArg.propTypes = {
  name: PropTypes.string.isRequired,
  nickname: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  value: PropTypes.any,
  enabled: PropTypes.bool,
  required: PropTypes.bool,
  options: PropTypes.string,
  onValueChange: PropTypes.func.isRequired,
};

ChileArg.defaultProps = {
  value: null,
  enabled: null,
  required: null,
  options: null,
};

export default ChileArg;
