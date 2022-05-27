import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { apiBaseUrl } from '../../../utils/apiBaseUrl';
import HomeReviewCard from './HomeReviewCard';



const HomeReview = () => {
    const [reviews, setReviews] = useState([])

    // get All Reviews
    useEffect(() => {
        const getReviews = async () =>{
            const res = await axios(`${apiBaseUrl}/reviews`)
            setReviews(res.data.reviews);
        }
        getReviews()
    },[])

    console.log(reviews);
    return (
        <div className="my-20">
            <h2 className="text-sky-600 text-4xl font-bold text-center my-5">What folks are saying about us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mx-5">
                {
                    reviews.map(review => <HomeReviewCard key={review._id} review={review} />)
                }
            </div>
        </div>
    );
};

export default HomeReview;