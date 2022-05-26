import React, { useEffect, useState } from 'react';
import HomeProductCard from './HomeProductCard';
import axios from "axios"
import { apiBaseUrl } from '../../../utils/apiBaseUrl';


const HomeOurProducts = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        const getPrductData = async () =>{
            const res = await axios(`${apiBaseUrl}/products`)
            setProducts(res.data.products);
        }
        getPrductData()
    },[])
    return (
        <>
            <div className="w-full my-20 flex flex-col justify-center items-center">
                <h1 className="text-sky-600 text-5xl font-bold my-5">Our Products</h1>
                <div className="w-11/12 grid grid-cols-1 md:grid-cols-3 gap-5">
                    {
                        products.map(product => <HomeProductCard key={products._id} product={product}/>)
                    }
                </div>
            </div>
        </>
    );
};

export default HomeOurProducts;