import React from 'react';
import PropTypes from 'prop-types';

import {HashRouter as Router, Redirect, Route, Switch} from 'react-router-dom'

import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Navigation from './components/Navigation';

import {Provider} from 'react-redux'

import './App.css';
import {useStyles} from "./style";
import HomePage from "./components/HomePage";
import ChileTable from "./components/ChileTable";
import clsx from "clsx";


function Footer() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © LP '}
            <Link color="inherit" href="https://chile.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const darkTheme = createMuiTheme({
    palette: {
        type: 'dark',
    },
});

function App({store}) {
    const classes = useStyles();
    return (
        <Provider store={store}>
            <Router>
                <ThemeProvider theme={darkTheme}>
                    <CssBaseline/>
                    <div className={classes.root}>
                        <Navigation>
                            <div className={classes.navigationContent}>
                                <div className={classes.appBarSpacer} />
                                <Switch>
                                    <Redirect exact from="/" to="/home"/>
                                    <Route path="/home" component={HomePage}/>
                                    <Route path="/table" component={ChileTable}/>
                                    <Route path="/user" component={UserPage}/>
                                </Switch>
                                <Footer/>
                            </div>
                        </Navigation>
                    </div>
                </ThemeProvider>
            </Router>
        </Provider>
    );
}

App.propTypes = {
    store: PropTypes.object.isRequired
};

export default App;
