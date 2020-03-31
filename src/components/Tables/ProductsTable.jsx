import React from 'react';

const ProductsTable = (chileDialog, history) => ({
  title: 'Products',
  columns: [
    { title: 'Adı', field: 'name' },
    {
      title: 'Soyadı',
      field: 'surname',
    },
    {
      title: 'Doğum Yılı',
      field: 'birthYear',
      cellStyle: {
        textAlign: 'center',
      },
      headerStyle: {
        textAlign: 'center',
      },
    },
    {
      title: 'Doğum Yeri',
      field: 'birthCity',
      lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
    },
  ],
  actions: [
    {
      icon: 'add',
      tooltip: 'Create Invoice',
    },
    {
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
    },
    {
      icon: 'info',
      tooltip: 'View Detail',
      onClick: (event, rowData) => {
        // Do save operation
        history.push(`/product/${rowData.id}`);
      },
    },
    {
      icon: 'save',
      tooltip: 'Export to XML',
      isFreeAction: true,
    },
    {
      icon: 'add',
      tooltip: 'Create',
      isFreeAction: true,
    },
  ],
});

export default ProductsTable;
