import React from 'react';
import PropTypes from 'prop-types';
import MaterialTable from 'material-table';
import { useLocation, useHistory } from 'react-router-dom';
import Grow from '@material-ui/core/Grow';
import TablePagination from '@material-ui/core/TablePagination';
import tableNameToComponent from '../Tables';
import { useChileDialog } from '../ChileDialog';
import useStyles from './style';


function ChileTable({ tableName }) {
  const classes = useStyles();
  const location = useLocation();
  const history = useHistory();
  const dialog = useChileDialog();

  const searchParams = new URLSearchParams(location.search);
  const realTableName = searchParams.get('name') || tableName;
  const table = tableNameToComponent[realTableName](dialog, history);
  const columns = table.columns.map((column) => {
    const c = column;
    if (!c.cellStyle) {
      c.cellStyle = {
        textAlign: 'center',
      };
    }
    if (!column.headerStyle) {
      c.headerStyle = {
        textAlign: 'center',
      };
    }
    return c;
  });

  return (
    <Grow in>
      <div className={classes.root}>
        <MaterialTable
          columns={columns}
          data={[
            {
              id: 1, name: 'Mehmet1', surname: 'Baran', birthYear: 1987, birthCity: 63,
            },
            {
              id: 2, name: 'Mehmet2', surname: 'Baran', birthYear: 1987, birthCity: 63,
            },
          ]}
          actions={table.actions || []}
          title={table.title}
          options={{
            actionsColumnIndex: -1,
            pageSizeOptions: [5, 15, 40],
            ...table.options,
          }}
          components={{
            Pagination: (props) => (
              // eslint-disable-next-line react/jsx-props-no-spreading
              <TablePagination {...props} className={classes.pagination} />
            ),
          }}
        />
      </div>
    </Grow>
  );
}

ChileTable.propTypes = {
  tableName: PropTypes.string.isRequired,
};

export default ChileTable;
