import React from 'react';
import HomeReviewCard from './HomeReviewCard';



const HomeReview = () => {
    return (
        <div className="my-20">
            <h2 className="text-cyan-600 text-4xl font-bold text-center my-5">What folks are saying about us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mx-5">
                <HomeReviewCard
                    name="Mr. Abdullah Khan"
                    reviewText="I bought some products from them. I got exactly what I wanted. And their communtication and honesty are much higher. Amy is happy to do business with them."
                />
                <HomeReviewCard
                    name="Mr. Motayer Hossain"
                    reviewText="Very-very good products, very well documented, built with a shop-owner's mind, regularly updated, there is thorough deep work within by the builders, built in instant search."
                />
                <HomeReviewCard
                    name="Mr. Abdul Latif"
                    reviewText="I am very satisfied working with them. Because the quality of their product is as good as their service. Once upon a time there seemed to be a problem with my product. As soon as I told them they solved it better. So I'm happy"
                />
            </div>
        </div>
    );
};

export default HomeReview;