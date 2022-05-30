import React from 'react';
import { Route, Routes } from "react-router-dom"
import Home from './pages/Home/Home';
import Navbar from './pages/shared/Navbar/Navbar';
import Footer from "./pages/shared/Footer/Footer"
import Purchase from './pages/Purchase/Purchase';
import Login from './pages/Login-User/Login/Login';
import Register from './pages/Login-User/Register/Register';
import RequireAuth from './pages/Login-User/RequireAuth/RequireAuth';
import CheckAuth from "./pages/Login-User/RequireAuth/CheckAuth"
import Dashboard from './pages/Dashboard/Dashboard';
import MyOrders from './pages/Dashboard/MyOrders/MyOrders';
import AddAReview from './pages/Dashboard/AddAReview';
import MyProfile from './pages/Dashboard/MyProfile';
import ManageAllOrders from './pages/Dashboard/ManageAllOrders';
import AddProduct from './pages/Dashboard/AddProduct';
import ManageAllUsers from './pages/Dashboard/ManageAllUsers';
import ManageProducts from './pages/Dashboard/MangeProducts/ManageProducts';
import Error404 from './pages/Error/Error404';
import Payment from './pages/Dashboard/MyOrders/Payment/Payment';
import { useDispatch } from "react-redux"
import { SET_ADMIN } from "./redux/actions/types"
import AdminAuth from './pages/Login-User/RequireAuth/AdminAuth';
import UserAuth from "./pages/Login-User/RequireAuth/UserAuth"
import Portfolio from './pages/Portfolio/Portfolio';
import Blogs from './pages/Blogs/Blogs';
import { ToastContainer } from 'react-toastify';

const App = () => {
  // redux
  const dispatch = useDispatch()

  const checkUser = JSON.parse(localStorage.getItem('userRole'))
  if (checkUser === 'admin') {
    dispatch({ type: SET_ADMIN })
  }

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/purchase/:productId" element={
          <RequireAuth>
            <Purchase />
          </RequireAuth>
        } />

        {/* dashboard board start */}
        <Route path="/dashboard" element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        }>
          <Route path='manageAllOrders' element={
            <AdminAuth>
              <ManageAllOrders />
            </AdminAuth>
          } />
          <Route path="myOrders" element={<MyOrders />} />
          <Route path="addAreview" element={
            <UserAuth>
              <AddAReview />
            </UserAuth>
          } />
          <Route path="myProfile" element={<MyProfile />} />

          <Route path="addProduct" element={
            <AdminAuth>
              <AddProduct />
            </AdminAuth>
          } />
          <Route path="manageAllUsers" element={
            <AdminAuth>
              <ManageAllUsers />
            </AdminAuth>
          } />
          <Route path="manageProducts" element={
            <AdminAuth>
              <ManageProducts />
            </AdminAuth>
          } />
        </Route>
        {/* dashboard board end */}

        <Route path="/payment/:productId" element={
          <RequireAuth>
            <Payment />
          </RequireAuth>
        } />

        <Route path="/blogs" element={<Blogs />} />

        <Route path="/portfolio" element={
          <RequireAuth>
            <Portfolio />
          </RequireAuth>
        } />

        <Route path="/login" element={
          <CheckAuth>
            <Login />
          </CheckAuth>
        } />

        <Route path="/register" element={
          <CheckAuth>
            <Register />
          </CheckAuth>
        } />

        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
      
      {/* toast notification container */}
      <ToastContainer />
    </>
  );
};

export default App;