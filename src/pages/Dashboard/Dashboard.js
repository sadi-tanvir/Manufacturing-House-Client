import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <h1 className="text-2xl text-secondary font-bold">Welcome To Your Dashboard</h1>
        <Outlet />
      </div>
      <div className="drawer-side">
        <label for="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li><Link to="/dashboard">My Products</Link></li>
          <li><Link to="/dashboard/addAreview">Add A Review</Link></li>
          <li><Link to="/dashboard/myProfile">My Profile</Link></li>
        </ul>

      </div>
    </div>
  );
};

export default Dashboard;