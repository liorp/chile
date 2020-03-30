import React, {Fragment} from 'react';

import TopBar from "./TopBar";
import SideMenu from "./SideMenu";


function Navigation({children}) {
    const [sideMenuOpen, setSideMenuOpen] = React.useState(true);
    const handleSideMenuOpen = () => {
        setSideMenuOpen(true);
    };
    const handleSideMenuClose = () => {
        setSideMenuOpen(false);
    };

    return (
        <Fragment>
            <TopBar onSideMenuClose={handleSideMenuClose} onSideMenuOpen={handleSideMenuOpen}
                    sideMenuOpen={sideMenuOpen}/>
            <SideMenu sideMenuOpen={sideMenuOpen}/>
            {children}
        </Fragment>
    );
}

export default Navigation;
