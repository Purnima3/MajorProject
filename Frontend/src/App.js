// /frontend/src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import AdminDashboard from './pages/admin/AdminDashboard';
import UserDashboard from './pages/user/UserDashboard';
import Home from './pages/Home';
import { useState, useEffect } from 'react';

// Fake authentication check for illustration (use actual auth logic)
const isAuthenticated = () => {
  // Retrieve user data from local storage or state (implement actual logic here)
  const user = localStorage.getItem('user');
  return user ? JSON.parse(user) : null;
};

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check authentication and set user data
    const loggedInUser = isAuthenticated();
    setUser(loggedInUser);
  }, []);

  return (
    <Router>
      <Routes>
        {/* Default Home Page */}
        <Route path="/" element={<Home />} />

        {/* Auth Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Admin Routes - Protected */}
        <Route
          path="/admin/dashboard"
          element={
            user?.role === 'admin' ? (
              <AdminDashboard />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />

        {/* User Routes - Protected */}
        <Route
          path="/user/dashboard"
          element={
            user?.role === 'user' ? (
              <UserDashboard />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />

        {/* Redirect to login if the route is unknown */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
};

export default App;
