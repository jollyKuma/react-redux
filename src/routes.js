import React. { Component } from 'react'
import { Route, Link } from 'react-router-dom'

import App from './App'
import Dashboard from './components/Dashboard'

const MainRoutes = () => {
  return (
    <div>
      <ul>
        <li><Link to="/dashboard">Dashboard</Link></li>
      </ul>
      <Route exact path="/dashboard" component={Dashboard} />
    </div>
  )
}
