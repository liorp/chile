import React, { useState } from 'react';
import { Card, CardHeader, Divider } from '@material-ui/core';
import useStyles from './style';
import ChileForm from '../ChileForm';


const mockProductFields = {
  Camera: [
    { name: 'model', type: 'str', required: true },
    { name: 'price', type: 'int' },
    { name: 'weight', type: 'int' },
    { name: 'pixels', type: 'int' },
    { name: 'color', type: 'enum', options: ['red', 'blue', 'transparent'] },
  ],
  TV: [
    { name: 'model', type: 'str' },
    { name: 'price', type: 'int' },
    { name: 'pixels', type: 'int' },
    { name: 'madeInChina', type: 'bool', nickname: 'Made in Chile' },
  ],
  Phone: [
    { name: 'model', type: 'str' },
    { name: 'price', type: 'int', required: true },
    { name: 'weight', type: 'int' },
    { name: 'pixels', type: 'int' },
    { name: 'isIPhone', type: 'bool', nickname: 'Is IPhone' },
  ],
};

function CreateNewProduct() {
  const classes = useStyles();
  const [selectedType, setSelectedType] = useState('');

  return (
    <Card className={classes.card}>
      <CardHeader title="Create a new product" />

      <ChileForm
        initialArgs={[{
          type: 'enum', name: 'productType', nickname: 'Product Type', options: Object.keys(mockProductFields),
        }]}
        onFormUpdate={(selectedValue) => {
          setSelectedType(selectedValue.productType);
        }}
      />

      <br />
      <Divider variant="middle" />

      {selectedType ? (
        <ChileForm
          initialArgs={mockProductFields[[selectedType]]}
          onFormUpdate={console.log}
          completeButton="Create"
          onComplete={(args) => console.log(`=> ${JSON.stringify(args)}`)}
          key={selectedType}
        />
      ) : ''}
    </Card>
  );
}

export default CreateNewProduct;
