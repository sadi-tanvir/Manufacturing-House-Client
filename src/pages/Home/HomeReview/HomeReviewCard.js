import React from 'react';
import avatar from "../../../assets/empty-avatar.jpg"
const HomeReviewCard = ({name,reviewText}) => {
    return (
        <div>
            <div class="card bg-base-100 shadow-xl flex flex-col justify-center items-center">
                <div class="avatar">
                    <div class="w-24 mask mask-hexagon">
                        <img src={avatar} />
                    </div>
                </div>
                <div class="card-body items-center text-center">
                    <p className="">{reviewText}</p>
                    <div className="flex justify-center items-center mt-2">
                        <i class="fa-solid fa-star text-yellow-500"></i>
                        <i class="fa-solid fa-star text-yellow-500"></i>
                        <i class="fa-solid fa-star text-yellow-500"></i>
                        <i class="fa-solid fa-star text-yellow-500"></i>
                        <i class="fa-solid fa-star text-yellow-500"></i>
                    </div>
                    <p className="font-semibold">{name}</p>
                </div>
            </div>
        </div>
    );
};

export default HomeReviewCard;