import React from 'react';
import MaterialTable from "material-table";
import {useStyles} from "../styles/chileTable";
import {useLocation, useHistory} from "react-router-dom";
import tableNameToComponent from "./Tables";
import {useChileDialog} from "./ChileDialog";
import Grow from "@material-ui/core/Grow";


function ChileTable({tableName}) {
    const classes = useStyles();
    const location = useLocation();
    const history = useHistory();
    const dialog = useChileDialog();

    const searchParams = new URLSearchParams(location.search);
    const realTableName = searchParams.get("name") || tableName;
    const table = tableNameToComponent[realTableName](dialog, history);
    for (let column of table.columns) {
        if (!column.cellStyle) {
            column.cellStyle = {
                textAlign: 'center'
            }
        }
        if (!column.headerStyle) {
            column.headerStyle = {
                textAlign: 'center'
            }
        }
    }

    return (
        <Grow in={true}>
            <div className={classes.root}>
                <MaterialTable
                    columns={table.columns}
                    data={[
                        {id: 1, name: "Mehmet1", surname: "Baran", birthYear: 1987, birthCity: 63},
                        {id: 2, name: "Mehmet2", surname: "Baran", birthYear: 1987, birthCity: 63}
                    ]}
                    actions={table.actions}
                    title={table.title}
                    options={{
                        actionsColumnIndex: -1,
                        pageSizeOptions: [5, 15, 40],
                        ...table.options
                    }}
                />
            </div>
        </Grow>
    );
}

export default ChileTable;
