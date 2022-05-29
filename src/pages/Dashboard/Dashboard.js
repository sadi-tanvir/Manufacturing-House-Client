import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import CustomLink from '../shared/CustomLink/CustomLink';
import { useSelector } from "react-redux"
import emptyAvatar from "../../assets/empty-avatar.jpg"
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Dashboard = () => {
  const [user, loading, error] = useAuthState(auth);
  const { isAdmin } = useSelector(state => state.adminReducer)
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col my-10">
        {/* <h1 className="text-2xl text-secondary font-bold">Welcome To Your Dashboard</h1> */}
        <label for="my-drawer-2" class="drawer-button lg:hidden"></label>
        <Outlet />
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-3/5 md:w-60 bg-base-100 text-base-content">
          <div className="flex flex-col justify-center items-center">
            <div class="avatar online">
              <div class="w-16 shadow-md rounded-full">
                <img src={user?.photoURL || emptyAvatar} alt='user pic' />
              </div>
            </div>
            <h1 className="text-lg font-bold mt-1 text-sky-600">{user?.displayName}</h1>
            <p className="text-sm font-semibold">{user?.email}</p>
          </div>
          <div class="divider"></div>
          {
            !isAdmin && <>
              <CustomLink className="shadow-md no-underline font-semibold md:font-bold rounded-md text-sm px-3 py-2 block mt-2" to='/dashboard/myOrders'>
                My Orders
              </CustomLink>
              <CustomLink className="shadow-md no-underline font-semibold md:font-bold rounded-md text-sm px-3 py-2 block mt-2" to='/dashboard/addAreview'>
                Add A Review
              </CustomLink>
            </>
          }

          {
            isAdmin && <>
              <CustomLink className="shadow-md no-underline font-semibold md:font-bold rounded-md text-sm px-3 py-2 block mt-2" to='/dashboard/manageAllOrders'>
                Manage All Orders
              </CustomLink>
              <CustomLink className="shadow-md no-underline font-semibold md:font-bold rounded-md text-sm px-3 py-2 block mt-2" to='/dashboard/manageAllUsers'>
                Mange All Users
              </CustomLink>
              <CustomLink className="shadow-md no-underline font-semibold md:font-bold rounded-md text-sm px-3 py-2 block mt-2" to='/dashboard/manageProducts'>
                Manage Products
              </CustomLink>
              <CustomLink className="shadow-md no-underline font-semibold md:font-bold rounded-md text-sm px-3 py-2 block mt-2" to='/dashboard/addProduct'>
                Add Product
              </CustomLink>
            </>
          }
          <CustomLink className="shadow-md no-underline font-semibold md:font-bold rounded-md text-sm px-3 py-2 block mt-2" to='/dashboard/myProfile'>
            My Profile
          </CustomLink>
        </ul>


      </div>
    </div>
  );
};

export default Dashboard;