import React from 'react';
import { userParams, useParams } from 'react-router-dom';

function UserPage(props) {

    const { username } = props.match.params;

    return (<div>
        {username} page.
        </div>);
}

export default UserPage;