import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import {NavLink as RouterNavLink} from "react-router-dom";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import ListSubheader from "@material-ui/core/ListSubheader";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";
import List from "@material-ui/core/List";
import {useStyles} from "../styles/sideBar";
import ListItemLink from "./LinkListItem";
import Button from "@material-ui/core/Button";
import SettingsIcon from '@material-ui/icons/Settings';
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import {useChileDialog} from "./ChileDialog";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import packageJson from '../../package.json';


const mainMenuItems = (
    <div>
        <ListSubheader inset>Main Menu</ListSubheader>
        <ListItemLink to="/table?name=products" primary="Products" icon={<ShoppingCartIcon/>}/>
        <ListItemLink to="/table?name=products" primary="Products" icon={<ShoppingCartIcon/>}/>
        <ListItemLink to="/table?name=products" primary="Products" icon={<ShoppingCartIcon/>}/>
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

function SideMenu() {
    const classes = useStyles();
    const chileDialog = useChileDialog();

    const openSettings = () => () => {
        chileDialog({
            title: 'Settings',
            content: `Set Chile settings`,
            children: (
                <Fragment>
                    <p>I also support custom body elements</p>
                </Fragment>
            ),
            actions: {
                confirm: {
                    text: 'Close'
                },
            }
        }).then(() => {
            console.log('Dialog ran');
        }).catch(() => {
            console.log('Dialog cancel');
        });
    };

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
                <li>
                    <ListItem button onClick={openSettings()}>
                        <ListItemIcon><SettingsIcon/></ListItemIcon>
                        <ListItemText>Settings</ListItemText>
                    </ListItem>
                </li>
                <li>
                    <ListItem>
                        <ListItemText>v{packageJson.version} ({process.env.REACT_APP_ENVIRONMENT})</ListItemText>
                    </ListItem>
                </li>
            </List>
        </Drawer>
    );
}

export default connect(
    mapStateToProps,
)(SideMenu);
