import React from 'react';
import { connect } from 'react-redux';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import { NavLink as RouterNavLink } from 'react-router-dom';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ListSubheader from '@material-ui/core/ListSubheader';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import List from '@material-ui/core/List';
import Button from '@material-ui/core/Button';
import SettingsIcon from '@material-ui/icons/Settings';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Typography from '@material-ui/core/Typography';
import { useChileDialog } from '../ChileDialog';
import ListItemLink from '../LinkListItem';
import useStyles from './style';
import packageJson from '../../../package.json';


const mainMenuItems = (
  <div>
    <ListSubheader>Main Menu</ListSubheader>
    <ListItemLink to="/table?name=products" primary="Products" icon={<ShoppingCartIcon />} />
    <ListItemLink to="/table?name=products" primary="Products" icon={<ShoppingCartIcon />} />
    <ListItemLink to="/table?name=products" primary="Products" icon={<ShoppingCartIcon />} />
    <ListItemLink to="/table?name=products" primary="Products" icon={<ShoppingCartIcon />} />
  </div>
);

const secondaryMenuItems = (
  <div>
    <ListSubheader>Quick Access</ListSubheader>
    <ListItemLink to="/add-a-camera" primary="Add a camera" icon={<AddAPhotoIcon />} />
  </div>
);

function mapStateToProps(state, ownProps) {
  return { state, ownProps };
}

function SideMenu() {
  const classes = useStyles();
  const chileDialog = useChileDialog();

  const openSettings = () => () => {
    chileDialog({
      title: 'Settings',
      content: 'Set Chile settings',
      children: (
        <>
          <p>I also support custom body elements</p>
        </>
      ),
      actions: {
        confirm: {
          text: 'Close',
        },
      },
    }).then(() => {
    }).catch(() => {
    });
  };

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.appBarSpacer} />
      <Button
        component={RouterNavLink}
        to="/home"
        disableRipple
        disableElevation
        variant="text"
        className={classes.homePageButton}
      >
        <span className={classes.chileLogo}>🌶</span>
        &nbsp;
        <span>Chile</span>
      </Button>
      <Divider />
      <List>{mainMenuItems}</List>
      <Divider />
      <List>{secondaryMenuItems}</List>
      <Divider />
      <span style={{ flexGrow: 2 }} />
      <List>
        <li>
          <ListItem button onClick={openSettings()}>
            <ListItemIcon><SettingsIcon /></ListItemIcon>
            <ListItemText>Settings</ListItemText>
          </ListItem>
        </li>
        <li>
          <ListItem>
            <ListItemText>
              <Typography variant="caption">
                v
                {packageJson.version}
                {' '}
                (
                {process.env.REACT_APP_ENVIRONMENT}
                )
              </Typography>
            </ListItemText>
          </ListItem>
        </li>
      </List>
    </Drawer>
  );
}

export default connect(
  mapStateToProps,
)(SideMenu);
