import React from 'react';

const ProductsTable = (chileDialog, history) => ({
  title: 'Products',
  columns: [
    {
      title: 'Name',
      field: 'name',
    },
    {
      title: 'Type',
      field: 'type',
      lookup: { 0: 'first type', 1: 'second type' },
    },
    {
      title: 'Price',
      field: 'price',
    },
  ],
  actions: [
    () => ({
      icon: 'add',
      tooltip: 'Create Invoice',
    }),
    () => ({
      icon: 'visibility',
      tooltip: 'View Detail',
      onClick: (event, rowData) => {
        // Do save operation
        chileDialog({
          title: 'Header of modal',
          content: `I have access to the rowData. This includes ${JSON.stringify(rowData)}`,
          children: (
            <>
              <p>I also support custom body elements</p>
            </>
          ),
          actions: {
            cancel: {
              text: 'Cancel',
            },
            confirm: {
              text: 'OK',
            },
          },
        }).then(() => {
        }).catch(() => {
        });
      },
    }),
    () => ({
      icon: 'info',
      tooltip: 'View Detail',
      onClick: (event, rowData) => {
        // Do save operation
        history.push(`/product/${rowData.id}`);
      },
    }),
    () => ({
      icon: 'save',
      tooltip: 'Export to XML',
      isFreeAction: true,
    }),
    () => ({
      icon: 'add',
      tooltip: 'Create',
      isFreeAction: true,
    }),
  ],
});

export default ProductsTable;
