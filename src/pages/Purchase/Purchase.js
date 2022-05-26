import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { apiBaseUrl } from '../../utils/apiBaseUrl';
import ProductDetails from "./ProductDetails"



const Purchase = () => {
    const [product, setProduct] = useState({})
    const {productId} = useParams()

    // get product by id
    useEffect(() => {
        const getProduct = async () =>{
            const res = await axios(`${apiBaseUrl}/product/${productId}`)
            setProduct(res.data.product);
        }
        getProduct()
    },[])
    return (
        <div>
            <ProductDetails product={product} />
        </div>
    );
};

export default Purchase;