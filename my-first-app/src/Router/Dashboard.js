import React from 'react'
import Profile from './Profile'
import Settings from './Settings'

import { BrowserRouter as  Router, Route, Routes, Link, useMatch } from 'react-router-dom';

// Dashboard component that contains nested routes
const Dashboard = () => {
    // useRouteMatch provides the current URL and path
    let { path, url } = useMatch();

    return (
        <div>
            <ul>
                <li>
                    <Link to={`${url}/profile`}>Profile</Link>
                </li>
                <li>
                    <Link to={`${url}/settings`}>Settings</Link>
                </li>
            </ul>

            {/* Nested routes within the Dashboard component */}
            <Routes>
                {/* Default route that displays a message */}
                <Route exact path={path}>
                    <h3>Please select an option.</h3>
                </Route>
                {/* Nested route for Profile */}
                <Route path={`${path}/profile`}>
                    <Profile />
                    </Route>
                {/* Nested route for Settings */}
                <Route path={`${path}/settings`}>
                    <Settings />
                </Route>
            </Routes>
        </div>
    );
};
export default Dashboard