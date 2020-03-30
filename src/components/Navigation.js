import React, {Fragment} from 'react';

import TopBar from "./TopBar";
import SideMenu from "./SideMenu";


function Navigation({children}) {

    return (
        <Fragment>
            <TopBar/>
            <SideMenu/>
            {children}
        </Fragment>
    );
}

export default Navigation;
