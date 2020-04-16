import React from 'react';
import useStyles from './style';
import Scheduling from '../Scheduling';
import ProductSelection from '../ProductSelection';


function NewDelivery() {
  const classes = useStyles();

  return (
    <div className={classes.horizontalContainer}>
      <ProductSelection />
      <Scheduling />
    </div>
  );
}

export default NewDelivery;
