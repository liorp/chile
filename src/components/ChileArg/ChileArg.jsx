import React from 'react';
import PropTypes from 'prop-types';
import {
  TextField, Select, MenuItem, Checkbox, FormControlLabel, InputLabel, FormControl,
} from '@material-ui/core';
import { MuiPickersUtilsProvider, KeyboardTimePicker, KeyboardDatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
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
          onChange={(e) => onValueChange(parseInt(e.target.value, 10))}
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
    case 'date':
      return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            label={label}
            value={value}
            disabled={enabled == null ? false : !enabled}
            format="dd/MM/yyyy"
            margin="normal"
            variant="inline"
            onChange={(date) => onValueChange(date)}
          />
        </MuiPickersUtilsProvider>
      );
    case 'time':
      return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardTimePicker
            label={label}
            value={value}
            disabled={enabled == null ? false : !enabled}
            margin="normal"
            variant="inline"
            onChange={(time) => onValueChange(time)}
          />
        </MuiPickersUtilsProvider>
      );
    default:
      return <span>InvalidArgType!!!</span>;
  }
}

ChileArg.propTypes = {
  name: PropTypes.string.isRequired,
  nickname: PropTypes.string,
  type: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  value: PropTypes.any,
  enabled: PropTypes.bool,
  required: PropTypes.bool,
  options: PropTypes.string,
  onValueChange: PropTypes.func,
};

ChileArg.defaultProps = {
  nickname: null,
  value: null,
  enabled: null,
  required: null,
  options: null,
  onValueChange: () => {},
};

export default ChileArg;
