import React from 'react';
import CircularProgress from "@material-ui/core/CircularProgress";
import {useStyles} from "../style";

const ChileLoading = ({ indeterminate, resourceName }) => {
    const classes = useStyles();

    return (
        <div className={classes.chileLoading}>
            {indeterminate && (
                <CircularProgress size={60} />
            )}
            <br/>
            Loading{resourceName && ' ' + resourceName}...
        </div>
    );
};

export default ChileLoading;
