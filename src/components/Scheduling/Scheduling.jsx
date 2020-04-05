import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Card, CardHeader } from '@material-ui/core';
import { ToggleButtonGroup, ToggleButton } from '@material-ui/lab';
import useStyles from './style';
import ChileForm from '../ChileForm';


function OneTimeScheduling({ value, onChange }) {
  return (
    <ChileForm
      initialArgs={[
        { type: 'date', name: 'date', value: value.date },
        { type: 'time', name: 'time', value: value.time }]}
      onFormUpdate={onChange}
    />
  );
}
OneTimeScheduling.propTypes = {
  value: PropTypes.shape({
    date: PropTypes.instanceOf(Date),
    time: PropTypes.instanceOf(Date),
  }).isRequired,
  onChange: PropTypes.func.isRequired,
};
function RepeatingScheduling({ value, onChange }) {
  return (
    <ChileForm
      initialArgs={[
        {
          type: 'int',
          name: 'interval',
          value: value.interval,
          nickname: 'Interval (days)',
          required: true,
        },
        { type: 'date', name: 'date', value: value.date },
        { type: 'time', name: 'time', value: value.time },
      ]}
      onFormUpdate={onChange}
    />
  );
}
RepeatingScheduling.propTypes = {
  value: PropTypes.shape({
    date: PropTypes.instanceOf(Date),
    time: PropTypes.instanceOf(Date),
    interval: PropTypes.number,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
};
function OnNewSupplyScheduling() {
  return <p>OnNewSupply</p>;
}

const SchedulingData = {
  ONE_TIME: {
    name: 'One Time',
    component: OneTimeScheduling,
    value: { date: new Date(), time: new Date() },
  },
  REPEATING: {
    name: 'Repeating',
    component: RepeatingScheduling,
    value: { date: new Date(), time: new Date(), interval: 7 },
  },
  ON_NEW_SUPPLY: {
    name: 'On New Supply',
    component: OnNewSupplyScheduling,
    value: {},
  },
};


function SchedulingTypeButtons({ selectedType, onChange }) {
  const handleChange = (event, value) => {
    // value is null when nothing is selected, so not allowing that
    if (value != null) onChange(value);
  };

  return (
    <ToggleButtonGroup exclusive value={selectedType} onChange={handleChange}>
      {Object.entries(SchedulingData).map((scheduling) => (
        <ToggleButton value={scheduling[0]} key={scheduling[0]}>
          {scheduling[1].name}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
}

SchedulingTypeButtons.propTypes = {
  selectedType: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};


function Scheduling({ onChange }) {
  const classes = useStyles();
  const [selectedType, setSelectedType] = useState(Object.keys(SchedulingData)[0]);
  const selectedData = SchedulingData[selectedType];

  const onValueChange = (newValue) => onChange({ type: selectedType, value: newValue });

  useEffect(() => onValueChange(selectedData.value));

  return (
    <Card className={classes.card}>
      <CardHeader title="Skejuling" />
      <SchedulingTypeButtons selectedType={selectedType} onChange={setSelectedType} />
      <selectedData.component value={selectedData.value} onChange={onValueChange} />
    </Card>
  );
}
Scheduling.propTypes = {
  onChange: PropTypes.func,
};
Scheduling.defaultProps = {
  onChange: () => {},
};

export default Scheduling;
