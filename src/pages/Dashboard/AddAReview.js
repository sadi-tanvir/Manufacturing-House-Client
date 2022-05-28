import axios from 'axios';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { apiBaseUrl } from '../../utils/apiBaseUrl';

const AddAReview = () => {
    const [user, loading, error] = useAuthState(auth);
    const [review, setReview] = useState({
        rating: 5,
        message: ""
    })

    // handle change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setReview({ ...review, [name]: value })
    }

    // handle submit
    const handleSubmit = async (e) => {
        e.preventDefault()
        const res = await axios.post(`${apiBaseUrl}/review`, {
            email: user?.email,
            name: user?.displayName,
            rating: review.rating,
            message: review.message
        })

        console.log(res);
        if (res.data.success === true) {
            setReview({
                rating: "",
                message: ""
            })
        }

    }
    return (
        <div>
            <div className="h-screen flex justify-center items-center md:-mt-10">
                <div className="card w-10/12 md:w-6/12 bg-base-100 shadow-xl py-5">
                    <div className="card-body">
                        <h1 className="text-sky-600 font-bold text-3xl text-center mb-5">Add A Review</h1>
                        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5" action="">
                            <input onChange={handleChange} name="rating" type="number" value={review.rating} placeholder="rating maximum 5" className="input input-bordered w-full" />
                            <textarea onChange={handleChange} name="message" class="textarea textarea-bordered" value={review.message} placeholder="type your experience with us" id="" cols="10" rows="10"></textarea>
                            <button type="submit" className="btn btn-accent text-white font-bold bg-gradient-to-r from-sky-500 to-sky-600 border-0 rounded-xl w-full">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddAReview;