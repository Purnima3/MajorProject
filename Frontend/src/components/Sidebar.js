import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'; // Import a separate CSS file for styling the sidebar

const Sidebar = ({ role }) => {
  return (
    <div className="sidebar">
      <h2>{role === 'admin' ? 'Admin Dashboard' : 'User Dashboard'}</h2>
      <ul>
        {role === 'admin' ? (
          <>
            <li>
              <Link to="/admin/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/admin/users">Manage Users</Link>
            </li>
            <li>
              <Link to="/admin/settings">Settings</Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/user/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/user/profile">Profile</Link>
            </li>
            <li>
              <Link to="/user/settings">Settings</Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default Sidebar;
