import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import CustomLink from '../shared/CustomLink/CustomLink';

const Dashboard = () => {
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col my-10">
        {/* <h1 className="text-2xl text-secondary font-bold">Welcome To Your Dashboard</h1> */}
        <Outlet />
      </div>
      <div className="drawer-side">
        <label for="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
          <CustomLink className="no-underline font-semibold md:font-bold rounded-md text-sm px-3 py-2 block mt-5" to='/dashboard'>
            My Products
          </CustomLink>
          <CustomLink className="no-underline font-semibold md:font-bold rounded-md text-sm px-3 py-2 block mt-5" to='/dashboard/addAreview'>
            Add A Review
          </CustomLink>
          <CustomLink className="no-underline font-semibold md:font-bold rounded-md text-sm px-3 py-2 block mt-5" to='/dashboard/myProfile'>
            My Profile
          </CustomLink>
          <CustomLink className="no-underline font-semibold md:font-bold rounded-md text-sm px-3 py-2 block mt-5" to='/dashboard/ManageAllOrders'>
            Manage All Orders
          </CustomLink>
          <CustomLink className="no-underline font-semibold md:font-bold rounded-md text-sm px-3 py-2 block mt-5" to='/dashboard/addProduct'>
            Add Product
          </CustomLink>
        </ul>


      </div>
    </div>
  );
};

export default Dashboard;