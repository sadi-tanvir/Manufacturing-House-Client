import React from 'react';



const HomeProductCard = ({product}) => {
    const {name, image, description,unit_price,Available_qty,minimum_order_qty } = product
    return (
        <>
            <div class="card bg-base-100 shadow-xl">
                <figure class="px-8 pt-10">
                    <img style={{minHeight: 200, maxHeight: 200}} className='' src={image} alt="Shoes" class="rounded-xl" />
                </figure>
                <div class="card-body">
                    <h2 class="card-title text-2xl">Name: {name.length > 20 ? name.slice(0, 20) : name}...</h2>
                    <p className="text-lg font-semibold">Unit Price: ${unit_price}</p>
                    <p className="text-lg font-semibold">Available Quantity: {Available_qty} pcs</p>
                    <p className="text-lg font-semibold">Minimum Order: {minimum_order_qty} pcs</p>
                    <p className="text-lg font-semibold">Descripttion: {description.length > 50 ? description.slice(0,50): description}...</p>
                    <div class="card-actions">
                        <button class="btn mx-auto w-full mt-2 bg-cyan-700 border-none hover:bg-cyan-800">Please Order</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomeProductCard;