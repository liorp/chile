import React from 'react';

const Shipments = () => ({
  title: 'Shipments',
  columns: [
    {
      title: 'Customer',
      field: 'customer',
    },
    {
      title: 'Route',
      field: 'route',
      render: (rowData) => (
        <p>
          {rowData && rowData.route.map((value, index) => (
            <span key={value.id}>
              {value.text}
              {index !== rowData.route.length - 1 && ' ➡️ '}
            </span>
          ))}
        </p>
      ),
    },
  ],
});

export default Shipments;
