import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Card, CardHeader } from '@material-ui/core';
import { ToggleButtonGroup, ToggleButton } from '@material-ui/lab';
import DatePicker from 'react-date-picker';
import TimePicker from 'react-time-picker';
import useStyles from './style';


function OneTimeScheduling() {
  return (
    <div>
      <p>OneTime</p>
      <span>Choose Date </span>
      <DatePicker value={new Date()} onChange={() => {}} />
      <br />
      <span>Choose Hour </span>
      <TimePicker value={new Date()} onChange={() => {}} />
    </div>
  );
}
function RepeatingScheduling() {
  return <p>Repeating</p>;
}
function OnNewSupplyScheduling() {
  return <p>OnNewSupply</p>;
}

const SchedulingTypes = {
  ONE_TIME: {
    name: 'One Time',
    component: OneTimeScheduling,
  },
  REPEATING: {
    name: 'Repeating',
    component: RepeatingScheduling,
  },
  ON_NEW_SUPPLY: {
    name: 'On New Supply',
    component: OnNewSupplyScheduling,
  },
};


function SchedulingTypeButtons({ selectedType, onChange }) {
  const handleChange = (event, value) => onChange(value);

  return (
    <ToggleButtonGroup exclusive value={selectedType} onChange={handleChange}>
      {Object.values(SchedulingTypes).map((schedulingType) => (
        <ToggleButton value={schedulingType} key={schedulingType.name}>
          {schedulingType.name}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
}

SchedulingTypeButtons.propTypes = {
  selectedType: PropTypes.shape({
    name: PropTypes.string.isRequired,
    component: PropTypes.element.isRequired,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
};


function Scheduling() {
  const classes = useStyles();
  const [schedulingType, setSchedulingType] = useState(SchedulingTypes.ONE_TIME);

  return (
    <Card className={classes.card}>
      <CardHeader title="Skejuling" />
      <SchedulingTypeButtons selectedType={schedulingType} onChange={setSchedulingType} />
      <schedulingType.component />
    </Card>
  );
}

export default Scheduling;
