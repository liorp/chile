import React from 'react';
import PropTypes from 'prop-types';
import MaterialTable from "material-table";
import {useStyles} from "../style";


function ChileTable() {
    const classes = useStyles();

    return (
        <div className={classes.chileTable}>
            <MaterialTable
              columns={[
                { title: "Adı", field: "name" },
                { title: "Soyadı", field: "surname" },
                { title: "Doğum Yılı", field: "birthYear", type: "numeric" },
                {
                  title: "Doğum Yeri",
                  field: "birthCity",
                  lookup: { 34: "İstanbul", 63: "Şanlıurfa" }
                }
              ]}
              data={[
                { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 }
              ]}
              title="Demo Title"
              style={{flexGrow: "2"}}
            />
          </div>
    );
}

ChileTable.propTypes = {

};

export default ChileTable;
