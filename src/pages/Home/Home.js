import React from 'react';
import HomeBusinessSummary from './HomeBusinessSummary/HomeBusinessSummary';
import HomeCarousel from './HomeCarousel/HomeCarousel';
import HomeOurProducts from './HomeOurProducts/HomeOurProducts';
import HomeReview from "./HomeReview/HomeReview"

const Home = () => {
    return (
        <div>
            <HomeCarousel />
            <HomeOurProducts />
            <HomeBusinessSummary />
            <HomeReview />
        </div>
    );
};

export default Home;