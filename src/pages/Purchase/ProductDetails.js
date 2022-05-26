import React from 'react';

const ProductDetails = ({ product }) => {
    console.log(product);
    const { name, image, description, unit_price, Available_qty, minimum_order_qty } = product
    return (
        <>
            <div class="w-full flex flex-col justify-center items-center my-20">
                <div class="card bg-base-100 shadow-xl w-7/12">
                    <figure class="px-8 pt-10">
                        <img style={{ minHeight: 200, maxHeight: 200 }} className='' src={image} alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body">
                        <h2 class="card-title text-2xl">Name: {name}</h2>
                        <p className="text-lg font-semibold">Unit Price: ${unit_price}</p>
                        <p className="text-lg font-semibold">Available Quantity: {Available_qty} pcs</p>
                        <p className="text-lg font-semibold">Minimum Order: {minimum_order_qty} pcs</p>
                        <p className="text-lg font-semibold">Descripttion: {description}</p>
                        <div class="card-actions">
                            <button class="btn mx-auto w-full mt-2 bg-cyan-700 border-none hover:bg-cyan-800">Confirm Your Order</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductDetails;