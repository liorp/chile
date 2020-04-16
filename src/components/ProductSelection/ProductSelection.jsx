import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Card, CardHeader } from '@material-ui/core';
import { ToggleButton } from '@material-ui/lab';
import useStyles from './style';
import ChileArg from '../ChileArg/ChileArg';


function ProductSelection({ onChange }) {
  const classes = useStyles();
  const [products, setProducts] = useState([...Array(15).keys()]);
  const [selectedProducts, setSelectedProducts] = useState([]);


  useEffect(() => onChange(selectedProducts)); // todo add scheduling

  const onSearchChange = () => {
    setProducts([]); // todo ...
  };

  const onProductToggled = (product) => {
    if (selectedProducts.indexOf(product) >= 0) {
      // remove
      setSelectedProducts((selected) => selected.filter((p) => p !== product));
    } else {
      // add
      setSelectedProducts((selected) => [...selected, product]);
    }
  };

  const getProductButtons = () => products.map((p) => (
    <ToggleButton
      key={p}
      value={p}
      selected={selectedProducts.indexOf(p) >= 0}
      onChange={() => onProductToggled(p)}
    >
      {p}
    </ToggleButton>
  ));

  return (
    <Card className={classes.card}>
      <CardHeader title="Select Product(s)" />
      <ChileArg type="str" name="search" nickname="Search Products" onValueChange={onSearchChange} />
      <div className={classes.productsContainer}>
        {getProductButtons()}
      </div>
    </Card>
  );
}
ProductSelection.propTypes = {
  onChange: PropTypes.func,
};
ProductSelection.defaultProps = {
  onChange: () => {},
};

export default ProductSelection;
