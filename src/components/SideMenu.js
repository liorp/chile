import React from 'react';
import {connect} from 'react-redux';
import Drawer from "@material-ui/core/Drawer";
import PropTypes from "prop-types";
import Divider from "@material-ui/core/Divider";
import {NavLink as RouterNavLink} from "react-router-dom";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import ListSubheader from "@material-ui/core/ListSubheader";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";
import List from "@material-ui/core/List";
import {useStyles} from "../style";
import ListItemLink from "./LinkListItem";
import Button from "@material-ui/core/Button";
import SettingsIcon from '@material-ui/icons/Settings';


const mainMenuItems = (
    <div>
        <ListSubheader inset>Main Menu</ListSubheader>
        <ListItemLink to="/table?name=products" primary="Products" icon={<ShoppingCartIcon/>}/>
    </div>
);

const secondaryMenuItems = (
    <div>
        <ListSubheader inset>Quick Access</ListSubheader>
        <ListItemLink to="/add-a-camera" primary="Add a camera" icon={<AddAPhotoIcon/>}/>
    </div>
);

function mapStateToProps(state, ownProps) {
    return {state, ownProps};
}

function SideMenu({sideMenuOpen}) {
    const classes = useStyles();
    return (
        <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
                paper: classes.drawerPaper
            }}
        >
            <div className={classes.appBarSpacer}/>
            <Button component={RouterNavLink} to="/home" disableRipple={true} disableElevation={true}
                    className={classes.chileLogo}>
                <span>🌶</span>
            </Button>
            <Button component={RouterNavLink} to="/home" disableRipple={true} disableElevation={true} variant={'text'}
                    className={classes.chileName}>
                <span>Chile</span>
            </Button>
            <Divider/>
            <List>{mainMenuItems}</List>
            <Divider/>
            <List>{secondaryMenuItems}</List>
            <Divider/>
            <span style={{flexGrow: 2}}/>
            <List>
                <ListItemLink to="/settings" primary="Settings" icon={<SettingsIcon/>}/>
            </List>
        </Drawer>
    );
}

SideMenu.propTypes = {
    sideMenuOpen: PropTypes.bool.isRequired
};

export default connect(
    mapStateToProps,
)(SideMenu);
