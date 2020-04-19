import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import useStyles from './style';
import Scheduling from '../Scheduling';
import ProductSelection from '../ProductSelection';


function NewDelivery() {
  const classes = useStyles();
  const [products, setProducts] = useState([]);
  const [scheduling, setScheduling] = useState();

  const isInputValid = () => products.length && scheduling;

  const createDelivery = () => {
    // TODO: post { products, scheduling }
  };

  return (
    <>
      <Button variant="contained" disabled={!isInputValid()} onClick={createDelivery}>
        Create!
      </Button>

      <div className={classes.horizontalContainer}>
        <ProductSelection onChange={setProducts} />
        <Scheduling onChange={setScheduling} />
      </div>
    </>
  );
}

export default NewDelivery;
