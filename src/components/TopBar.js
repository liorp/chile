import React from 'react';
import {connect} from 'react-redux';
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AppBar from "@material-ui/core/AppBar";
import { useLocation } from 'react-router-dom';
import capitalize from "@material-ui/core/utils/capitalize";
import {useStyles} from "../styles/topBar";


function mapStateToProps(state, ownProps) {
    return { state, ownProps };
}

function TopBar() {
    const classes = useStyles();
    const location = useLocation();
    let pageName = 'Chile';
    if (location.state && location.state.pageName) {
        pageName = location.state.pageName;
    } else if (location.pathname === '/table') {
        let searchParams = new URLSearchParams(location.search);
        if (searchParams.get("name")) {
            pageName = capitalize(searchParams.get("name"));
        }
    } else {
        pageName = capitalize(location.pathname.slice(1).split('-').join(' '));
    }
    return (
        <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
                <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                    { pageName }
                </Typography>
                <span style={{flexGrow: 2}}/>
                <IconButton color="inherit">
                    <Badge badgeContent={4} color="secondary">
                        <NotificationsIcon/>
                    </Badge>
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}

export default connect(
    mapStateToProps,
)(TopBar);
