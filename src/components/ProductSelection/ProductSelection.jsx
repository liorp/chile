import React, { useState, useEffect } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import PropTypes from 'prop-types';
import { Card, CardHeader } from '@material-ui/core';
import { ToggleButton } from '@material-ui/lab';
import useStyles from './style';
import ChileArg from '../ChileArg/ChileArg';
import api from '../../utils';


function ProductSelection({ onChange }) {
  const classes = useStyles();

  // TODO: change temp 'users'
  const fetchProducts = async () => api.fetchResource('users');

  const [products, setProducts] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [setSearchTextDebounced] = useDebouncedCallback(setSearchText, 400);

  useEffect(() => onChange(selectedProducts), [onChange, selectedProducts]);
  useEffect(() => {
    fetchProducts().then((result) => {
      // TODO: send filter text to server rather than filtering here
      setProducts(result.filter((r) => r.name.toLowerCase().includes(searchText.toLowerCase())));
    });
  }, [searchText]);

  const onProductToggled = (product) => {
    if (selectedProducts.indexOf(product) >= 0) {
      // remove selection
      setSelectedProducts((selected) => selected.filter((p) => p !== product));
    } else {
      // add selection
      setSelectedProducts((selected) => [...selected, product]);
    }
  };

  const getProductButtons = () => products.map((p) => (
    <ToggleButton
      key={p.id}
      value={p.id}
      selected={selectedProducts.indexOf(p.id) >= 0}
      onChange={() => onProductToggled(p.id)}
    >
      {p.name}
    </ToggleButton>
  ));

  return (
    <Card className={classes.card}>
      <CardHeader title="Select Product(s)" />
      <ChileArg type="str" name="search" nickname="Search Products" onValueChange={setSearchTextDebounced} />
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
