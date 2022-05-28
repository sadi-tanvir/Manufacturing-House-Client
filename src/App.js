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
// import Payment from './pages/Payment/Payment';

const App = () => {
  
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

        <Route path="/dashboard" element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        }>
          <Route index element={<MyOrders />} />
          <Route path="addAreview" element={<AddAReview />} />
          <Route path="myProfile" element={<MyProfile />} />
          <Route path="ManageAllOrders" element={<ManageAllOrders />} />
          <Route path="addProduct" element={<AddProduct />} />
          <Route path="manageAllUsers" element={<ManageAllUsers />} />
          <Route path="manageProducts" element={<ManageProducts />} />
        </Route>
        <Route path="/payment/:productId" element={
          <RequireAuth>
            <Payment />
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
    </>
  );
};

export default App;