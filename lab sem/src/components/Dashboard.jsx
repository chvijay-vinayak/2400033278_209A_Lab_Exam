import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div style={{ border: '2px solid black', padding: '20px', marginTop: '20px' }}>
      <h2>Dashboard</h2>
      <nav style={{ marginBottom: '10px' }}>
        <Link to="profile" style={{ marginRight: '10px' }}>Profile</Link>
        <Link to="settings">Settings</Link>
      </nav>

      {/* Outlet renders child route */}
      <Outlet />
    </div>
  )
}

export default Dashboard