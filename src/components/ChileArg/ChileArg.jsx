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
                checked={value}
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
            value={value}
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
  value: PropTypes.string.isRequired,
  enabled: PropTypes.bool.isRequired,
  required: PropTypes.bool.isRequired,
  options: PropTypes.string.isRequired,
  onValueChange: PropTypes.func.isRequired,
};


export default ChileArg;
