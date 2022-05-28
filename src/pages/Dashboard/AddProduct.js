import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { apiBaseUrl } from "../../utils/apiBaseUrl"
import axios from 'axios';

const AddProduct = () => {
    const [user, loading, error] = useAuthState(auth);
    const [product, setProduct] = useState({
        name: "",
        image: "",
        description: "",
        unit_price: "",
        Available_qty: "",
        minimum_order_qty: "",
    })
    // Handle Change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const { name,image,description,unit_price,Available_qty,minimum_order_qty} = product

        const res = await axios.post(`${apiBaseUrl}/addProduct`,
            { name,image,description,unit_price,Available_qty,minimum_order_qty })
            setProduct({
                name: "",
                image: "",
                description: "",
                unit_price: "",
                Available_qty: "",
                minimum_order_qty: "",
            })
    }

    // useEffect(() => {
    //     const userData = async () => {
    //         const res = await axios(`${apiBaseUrl}/user/${user?.email}`)
    //         setInfo({
    //             ...info,
    //             phone: res.data.user.phone,
    //             address: res.data.user.address,
    //             education: res.data.user.education,
    //             linkedin: res.data.user.linkedin,
    //             github: res.data.user.github,
    //         })
    //     }
    //     userData()
    // }, [])
    return (
        <div>
            <div className="my-20 flex justify-center items-center md:-mt-8">
                <div className="card w-10/12 md:w-6/12 bg-base-100 shadow-xl py-5">
                    <div className="card-body">
                        <h1 className="text-sky-600 font-bold text-3xl text-center mb-5">Add Product</h1>
                        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5" action="">
                            <input onChange={handleChange} name="name" type="text" value={product.name} placeholder="product name" className="input input-bordered w-full" />
                            <input onChange={handleChange} name="image" type="text" value={product.image} placeholder="product image" className="input input-bordered w-full" />
                            <input onChange={handleChange} name="description" type="text" value={product.description} placeholder="product description" className="input input-bordered w-full" />
                            <input onChange={handleChange} name="unit_price" type="text" value={product.unit_price} placeholder="unit price" className="input input-bordered w-full" />
                            <input onChange={handleChange} name="Available_qty" type="text" value={product.Available_qty} placeholder="Available Quantity" className="input input-bordered w-full" />
                            <input onChange={handleChange} name="minimum_order_qty" type="text" value={product.minimum_order_qty} placeholder="Minimum Order Quantity" className="input input-bordered w-full" />
                            <button type="submit" className="btn btn-accent text-white font-bold bg-gradient-to-r from-sky-500 to-sky-600 border-0 rounded-xl w-full">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;