import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import axios from "axios"
import { apiBaseUrl } from '../../../utils/apiBaseUrl';
import Swal from 'sweetalert2';


const ManageProducts = () => {
    const [products, setProducts] = useState([])
    const [isDelete, setIsDelete] = useState({})

    // delete product
    const deleteProduct = async (id) => {
        Swal.fire({ title: 'Are you sure?', icon: 'warning', showCancelButton: true, confirmButtonColor: '#3085d6', cancelButtonColor: '#d33', confirmButtonText: 'Yes, cancel it!' }).then((result) => {
            if (result.isConfirmed) {
                const deleteData = async () => {
                    const res = await axios.delete(`${apiBaseUrl}/deleteProduct/${id}`)
                    setIsDelete(res)
                }
                deleteData()
            }
        })
    }


    // get products
    useEffect(() => {
        const getProductData = async () =>{
            const res = await axios(`${apiBaseUrl}/products`)
            setProducts(res.data.products);
        }
        getProductData()
    },[isDelete])
    return (
        <>
            <div className="w-full flex flex-col justify-center items-center">
                <h1 className="text-sky-600 text-5xl font-bold my-5">Manage Products</h1>
                <div className="w-11/12 grid grid-cols-1 md:grid-cols-2 gap-5">
                    {
                        products.map(product => <ProductCard key={products._id} product={product} deleteProduct={deleteProduct}/>)
                    }
                </div>
            </div>
        </>
    );
};

export default ManageProducts;