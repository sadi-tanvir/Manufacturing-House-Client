import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { apiBaseUrl } from '../../../../utils/apiBaseUrl';
import { loadStripe } from '@stripe/stripe-js';
import {
    CardElement,
    Elements,
    useStripe,
    useElements,
} from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L4MS4Cqaut6bPICBKVF9ezBxrYxlN6EbsJzTnART0PnxiNUR1J1PPt4rF8kjMzW4kOKyDHdlsD65BOlFLOK5qXB00QiQnDUqn');



const Payment = () => {
    const [product, setProduct] = useState({})
    const { productId } = useParams()
    const { productName, productImage, totalAmount, payment_status, orderQuantity } = product

    // router
    const navigate = useNavigate()

    // get product by id
    useEffect(() => {
        const getProduct = async () => {
            const res = await axios(`${apiBaseUrl}/getSingleOrder/${productId}`)
            setProduct(res.data.order);
            // console.log(res);
        }
        getProduct()
    }, [])

    return (
        <div className="w-full flex flex-col justify-center items-center">
            <div className="w-10/12">
                <div class="hero min-h-screen">
                    <div class="hero-content grid grid-cols-1 md:grid-cols-2 md:gap-x-10">
                        <div>
                            <h4 class="text-xl font-bold" >TO Pay</h4>
                            <h1 class="text-5xl font-bold text-sky-600">${totalAmount}</h1>
                            <p class="pt-6">{productName}</p>
                            <p class="pb-6 font-bold mt-5 text-sky-600">{orderQuantity} pcs</p>
                            <img src={productImage} class="max-w-xs rounded-lg shadow-2xl" />
                            <button onClick={() => navigate(`/dashboard`)} class="btn bg-sky-600 hover:bg-sky-700 mt-10">Go Back To Your Orders</button>
                        </div>


                        <div>
                            <Elements stripe={stripePromise}>
                                <CheckoutForm product={product} />
                            </Elements>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;