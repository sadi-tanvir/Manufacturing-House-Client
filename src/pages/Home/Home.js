import React from 'react';
import HomeBusinessSummary from './HomeBusinessSummary/HomeBusinessSummary';
import HomeCarousel from './HomeCarousel/HomeCarousel';
import HomeOurProducts from './HomeOurProducts/HomeOurProducts';

const Home = () => {
    return (
        <div>
            <HomeCarousel />
            <HomeOurProducts />
            <HomeBusinessSummary />
        </div>
    );
};

export default Home;