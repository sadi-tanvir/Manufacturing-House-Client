import React from 'react';
import { Route, Routes } from "react-router-dom"
import Home from './pages/Home/Home';
import Navbar from './pages/shared/Navbar/Navbar';
import Footer from "./pages/shared/Footer/Footer"
import Purchase from './pages/Purchase/Purchase';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/purchase/:productId" element={<Purchase />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;