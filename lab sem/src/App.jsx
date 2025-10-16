import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Profile from './components/Profile'
import Settings from './components/Settings'

function App() {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>React Vite Nested Routes Example</h1>
      <nav>
        <Link to="/dashboard">Go to Dashboard</Link>
      </nav>

      <Routes>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App