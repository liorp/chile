import React from 'react';
import PropTypes from 'prop-types';

import {
  BrowserRouter as Router, Redirect, Route, Switch,
} from 'react-router-dom';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Provider } from 'react-redux';
import Navigation from './components/Navigation';


import './App.css';
import useStyles from './style';
import HomePage from './components/HomePage/HomePage';
import ChileTable from './components/ChileTable/ChileTable';
import { ChileDialogProvider } from './components/ChileDialog';
import Product from './components/Product/Product';


const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

function App({ store }) {
  const classes = useStyles();
  return (
    <Provider store={store}>
      <Router>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <ChileDialogProvider>
            <div className={classes.root}>
              <Navigation>
                <div className={classes.navigationContent}>
                  <div className={classes.appBarSpacer} />
                  <Switch>
                    <Redirect exact from="/" to="/home" />
                    <Route path="/home" component={HomePage} />
                    <Route path="/table" component={ChileTable} />
                    <Route path="/product/:id" component={Product} />
                  </Switch>
                </div>
              </Navigation>
            </div>
          </ChileDialogProvider>
        </ThemeProvider>
      </Router>
    </Provider>
  );
}

App.propTypes = {
  // See https://github.com/reduxjs/react-redux/issues/692#issuecomment-298165999
  store: PropTypes.shape({
    subscribe: PropTypes.func.isRequired,
    dispatch: PropTypes.func.isRequired,
    getState: PropTypes.func.isRequired,
  }).isRequired,
};

export default App;
