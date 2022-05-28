import React from 'react';
import { useNavigate } from 'react-router-dom';



const ProductCard = ({ product,deleteProduct }) => {
    const { _id, name, image, description, unit_price, Available_qty, minimum_order_qty } = product

    // router
    const navigate = useNavigate()

    return (
        <>
            <div class="card bg-base-100 shadow-xl text-slate-600">
                <figure class="px-8 pt-10">
                    <img style={{ minHeight: 200, maxHeight: 200 }} className='' src={image} alt="Shoes" class="rounded-xl" />
                </figure>
                <div class="card-body">
                    <h2 class="card-title text-2xl">{name.length > 20 ? name.slice(0, 20) : name}...</h2>
                    <p className="text-lg font-semibold">Unit Price: ${unit_price}</p>
                    <p className="text-lg font-semibold">Available Quantity: {Available_qty} pcs</p>
                    <p className="text-lg font-semibold">Minimum Order: {minimum_order_qty} pcs</p>
                    <p className="text-lg font-semibold">Descripttion: {description.length > 50 ? description.slice(0, 50) : description}...</p>
                    <div class="grid grid-cols-2 gap-2">
                        <button onClick={() => navigate(`/purchase/${_id}`)} class="text-white rounded py-1 mt-2 bg-sky-700 border-none hover:bg-sky-800">
                            Details
                        </button>
                        <button onClick={() => deleteProduct(_id)} class="text-white rounded py-1 mt-2 bg-red-700 border-none hover:bg-red-800">
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductCard;