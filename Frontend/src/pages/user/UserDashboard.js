import React from 'react';
import Sidebar from '../../components/Sidebar';

const UserDashboard = () => {
  return (
    <div className="dashboard-container">
      <Sidebar role="user" />
      <div className="dashboard-content">
        <h1>User Dashboard</h1>
        {/* Add additional user-related content here */}
      </div>
    </div>
  );
};

export default UserDashboard;
