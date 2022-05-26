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