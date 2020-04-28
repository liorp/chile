import React from 'react';
import PropTypes from 'prop-types';
import TopBar from './TopBar/TopBar';
import SideMenu from './SideMenu/SideMenu';


function Navigation({ children }) {
  return (
    <>
      <TopBar />
      <SideMenu />
      {children}
    </>
  );
}


Navigation.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Navigation;
