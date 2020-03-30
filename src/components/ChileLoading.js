import React from 'react';
import CircularProgress from "@material-ui/core/CircularProgress";
import {useStyles} from "../style";
import Grow from "@material-ui/core/Grow";

const ChileLoading = ({ indeterminate, resourceName }) => {
    const classes = useStyles();

    return (
        <Grow direction="up" in={true} mountOnEnter unmountOnExit>
            <div className={classes.chileLoading}>
                {indeterminate && (
                    <CircularProgress size={60} />
                )}
                <br/>
                Loading{resourceName && ' ' + resourceName}...
            </div>
        </Grow>
    );
};

export default ChileLoading;
