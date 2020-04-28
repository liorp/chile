import React, { useCallback, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import MaterialTable from 'material-table';
import { useLocation, useHistory } from 'react-router-dom';
import Grow from '@material-ui/core/Grow';
import TablePagination from '@material-ui/core/TablePagination';
import tableNameToComponent from '../Tables';
import { useChileDialog } from '../ChileDialog';
import useStyles from './style';
import api from '../../utils';

/**
 * query = {
 *   filters: []
 *   orderBy: undefined
 *   orderDirection: ""
 *   page: 1
 *   pageSize: 5
 *   search: ""
 *   totalCount: 1
 * }
 */


function ChileTable({ tableName }) {
  const classes = useStyles();
  const location = useLocation();
  const history = useHistory();
  const dialog = useChileDialog();

  const searchParams = new URLSearchParams(location.search);
  const realTableName = tableName || searchParams.get('name');
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
  const data = useCallback((query) => api.mockFetchResource({ resource: realTableName, ...query }),
    [realTableName]);
  const tableRef = useRef(null);
  useEffect(() => {
    if (tableRef.current) {
      tableRef.current.onQueryChange();
    }
  }, [realTableName, tableRef]);

  const ChileTableInner = React.useMemo(
    () => React.forwardRef((props, ref) => (
      <Grow in>
        <div className={classes.root}>
          <MaterialTable
            ref={ref}
            columns={columns}
            data={data}
            actions={table.actions || []}
            title={table.title}
            options={{
              actionsColumnIndex: -1,
              pageSizeOptions: [5, 15, 40],
              filtering: true,
              search: true,
              filterCellStyle: {
                textAlign: 'center',
              },
              ...table.options,
            }}
            components={{
              Pagination: (paginationProps) => (
                // eslint-disable-next-line react/jsx-props-no-spreading
                <TablePagination {...paginationProps} className={classes.pagination} />
              ),
            }}
          />
        </div>
      </Grow>
    )),
    [classes.pagination, classes.root, columns, data, table.actions, table.options, table.title],
  );

  return <ChileTableInner ref={tableRef} />;
}

ChileTable.defaultProps = {
  tableName: null,
};

ChileTable.propTypes = {
  tableName: PropTypes.string,
};

export default ChileTable;
