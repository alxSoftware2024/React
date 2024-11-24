import {BrowserRouter as Router, Route, Routes, Link, useMatch } from 'react-router-dom';
import React from 'react'
import Dashboard from './Dashboard'
function NestedRouting() {
  return (
    <Router>
    <div>
        <nav>
            <Link to="/Dashboard">Dashboard</Link>
        </nav>
        <Routes>
            {/* Route to Dashboard component */}
            <Route path="/Dashboard" component={Dashboard} />
            {/* Default route to Home component */}
            <Route path="/">
                Home
            </Route>
        </Routes>
    </div>
</Router>
  )
}

export default NestedRouting