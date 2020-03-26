import React from 'react';
import {useStyles} from "../style";
import {Card, CardHeader, FormControl, Select, MenuItem, InputLabel}
    from '@material-ui/core';


const mockProductTypes = ['Camera', 'TV', 'Phone'];
const mockProductFields = {
    Camera: {
        model: 'str',
        price: 'float',
        weight: 'int',
        pixels: 'int',
        color: 'str',
    },
    TV: {
        model: 'str',
        price: 'float',
        weight: 'int',
        pixels: 'int',
    },
    Phone: {
        model: 'str',
        price: 'float',
        weight: 'int',
        pixels: 'int',
        isIPhone: 'boolean',
    },
};

function CreateNewProduct() {
    const classes = useStyles();
    const productTypes = mockProductTypes.map((type, i) => 
        <MenuItem value={type} id={i}>{type}</MenuItem>);
    return (
        <Card className={classes.card}>
            <CardHeader title="Create a new product" />
            <FormControl>
                <InputLabel>Product Type</InputLabel>
                <Select value={mockProductTypes[0]}>
                    {productTypes}
                </Select>
            </FormControl>
        </Card>
    );
}

export default CreateNewProduct;
