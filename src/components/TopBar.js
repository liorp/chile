import React from 'react';
import {connect} from 'react-redux';
import clsx from "clsx";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AppBar from "@material-ui/core/AppBar";
import PropTypes from "prop-types";
import { useLocation } from 'react-router-dom';
import capitalize from "@material-ui/core/utils/capitalize";
import {useStyles} from "../style";


function mapStateToProps(state, ownProps) {
    return { state, ownProps };
}

function TopBar({ onSideMenuClose, onSideMenuOpen, sideMenuOpen }) {
    const classes = useStyles();
    let location = useLocation();
    let pageName = 'Chile';
        console.log(location);
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
        <AppBar position="absolute" className={classes.appBar}>
            <Toolbar className={classes.toolbar}>
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

TopBar.propTypes = {
    onSideMenuClose: PropTypes.func.isRequired,
    onSideMenuOpen: PropTypes.func.isRequired,
    sideMenuOpen: PropTypes.bool.isRequired
};

export default connect(
    mapStateToProps,
)(TopBar);
