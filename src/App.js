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
import MyOrders from './pages/Dashboard/MyOrders';
import AddAReview from './pages/Dashboard/AddAReview';
import MyProfile from './pages/Dashboard/MyProfile';
import Reviews from './pages/Reviews/Reviews';
import setAuthToken from './utils/setAuthToken';
import ManageAllOrders from './pages/Dashboard/ManageAllOrders';
import AddProduct from './pages/Dashboard/AddProduct';
import ManageAllUsers from './pages/Dashboard/ManageAllUsers';

const App = () => {
  if(localStorage.getItem('token')){
    setAuthToken(JSON.stringify(localStorage.getItem('token')))
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
        </Route>
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
      </Routes>
      <Footer />
    </>
  );
};

export default App;