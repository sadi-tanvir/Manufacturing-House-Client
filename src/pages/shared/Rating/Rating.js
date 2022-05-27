import React from 'react';

const Rating = ({ rating }) => {


    return (
        <div>
            {
                parseInt(rating) === 5 && <>
                    <i class="fa-solid fa-star text-yellow-500"></i>
                    <i class="fa-solid fa-star text-yellow-500"></i>
                    <i class="fa-solid fa-star text-yellow-500"></i>
                    <i class="fa-solid fa-star text-yellow-500"></i>
                    <i class="fa-solid fa-star text-yellow-500"></i>
                </>
            }

            {
                parseInt(rating) === 4 && <>
                    <i class="fa-solid fa-star text-yellow-500"></i>
                    <i class="fa-solid fa-star text-yellow-500"></i>
                    <i class="fa-solid fa-star text-yellow-500"></i>
                    <i class="fa-solid fa-star text-yellow-500"></i>
                    <i class="fa-solid fa-star text-slate-500"></i>
                </>
            }

            {
                parseInt(rating) === 3 && <>
                    <i class="fa-solid fa-star text-yellow-500"></i>
                    <i class="fa-solid fa-star text-yellow-500"></i>
                    <i class="fa-solid fa-star text-yellow-500"></i>
                    <i class="fa-solid fa-star text-slate-500"></i>
                    <i class="fa-solid fa-star text-slate-500"></i>
                </>
            }

            {
                parseInt(rating) === 2 && <>
                    <i class="fa-solid fa-star text-yellow-500"></i>
                    <i class="fa-solid fa-star text-yellow-500"></i>
                    <i class="fa-solid fa-star text-slate-500"></i>
                    <i class="fa-solid fa-star text-slate-500"></i>
                    <i class="fa-solid fa-star text-slate-500"></i>
                </>
            }

            {
                parseInt(rating) === 1 && <>
                    <i class="fa-solid fa-star text-yellow-500"></i>
                    <i class="fa-solid fa-star text-slate-500"></i>
                    <i class="fa-solid fa-star text-slate-500"></i>
                    <i class="fa-solid fa-star text-slate-500"></i>
                    <i class="fa-solid fa-star text-slate-500"></i>
                </>
            }

            {
                parseInt(rating) === 0 && <>
                    <i class="fa-solid fa-star text-slate-500"></i>
                    <i class="fa-solid fa-star text-slate-500"></i>
                    <i class="fa-solid fa-star text-slate-500"></i>
                    <i class="fa-solid fa-star text-slate-500"></i>
                    <i class="fa-solid fa-star text-slate-500"></i>
                </>
            }

        </div>
    );
};

export default Rating;