import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Card, CardHeader } from '@material-ui/core';
import { ToggleButtonGroup, ToggleButton } from '@material-ui/lab';
import DatePicker from 'react-date-picker';
import TimePicker from 'react-time-picker';
import useStyles from './style';


function OneTimeScheduling({ value, onChange }) {
  return (
    <div>
      <p>OneTime</p>
      <span>Choose Date </span>
      <DatePicker value={value.date} onChange={(date) => onChange({ date })} />
      <br />
      <span>Choose Hour </span>
      <TimePicker value={value.time} onChange={(time) => onChange({ time })} disableClock />
    </div>
  );
}
OneTimeScheduling.propTypes = {
  value: PropTypes.shape({
    date: PropTypes.instanceOf(Date),
    time: PropTypes.instanceOf(Date),
  }).isRequired,
  onChange: PropTypes.func.isRequired,
};
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
    defaultScheduling: () => ({ date: new Date(), time: new Date() }),
  },
  REPEATING: {
    name: 'Repeating',
    component: RepeatingScheduling,
    defaultScheduling: () => ({
      date: new Date(),
      time: new Date(),
      interval: 7, // in days
    }),
  },
  ON_NEW_SUPPLY: {
    name: 'On New Supply',
    component: OnNewSupplyScheduling,
    defaultScheduling: () => ({ date: new Date(), time: new Date() }), // start date
  },
};


function SchedulingTypeButtons({ selectedType, onChange }) {
  const handleChange = (event, value) => {
    // value is null when nothing is selected, so not allowing that
    if (value != null) onChange(value);
  };

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
    component: PropTypes.func.isRequired,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
};


function Scheduling({ onChange }) {
  const classes = useStyles();
  const [schedulingType, setSchedulingType] = useState(SchedulingTypes.ONE_TIME);
  const [schedulingValue, setSchedulingValue] = useState(schedulingType.defaultScheduling());

  const handlePartialChange = (val) => setSchedulingValue((current) => ({ ...current, ...val }));

  useEffect(() => (onChange || (() => {}))({ schedulingType, schedulingValue }));

  return (
    <Card className={classes.card}>
      <CardHeader title="Skejuling" />
      <SchedulingTypeButtons selectedType={schedulingType} onChange={setSchedulingType} />
      <schedulingType.component value={schedulingValue} onChange={handlePartialChange} />
    </Card>
  );
}
Scheduling.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default Scheduling;
