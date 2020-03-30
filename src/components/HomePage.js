import React from 'react';
import {useStyles} from "../styles/homePage";
import {connect} from "react-redux";
import ChileTable from "./ChileTable";


function mapStateToProps(state, ownProps) {
    return {state, ownProps};
}

function HomePage() {
    const classes = useStyles();

    return (
        <main className={classes.root}>
            <div className={classes.firstLine}>
                <ChileTable tableName={'products'}/>
                <ChileTable tableName={'products'}/>
            </div>
            <div>
                <ChileTable tableName={'products'}/>
            </div>
        </main>
    );
}

export default connect(
    mapStateToProps,
)(HomePage);
