import React from 'react';
import './dashboard.css';
import Sidebar from '../layouts/sidebar';
import { Outlet } from 'react-router-dom';
import Navbar from '../layouts/navbar';

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="sidebar">
        <Sidebar />
      </div>

      <div className="navbar">
        <Navbar />
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}

export default Dashboard;
