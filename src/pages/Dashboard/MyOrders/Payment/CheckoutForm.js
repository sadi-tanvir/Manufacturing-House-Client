import React, { useEffect, useState } from 'react';
import {
    CardElement,
    Elements,
    useStripe,
    useElements,
} from '@stripe/react-stripe-js';
import { apiBaseUrl } from '../../../../utils/apiBaseUrl';



const CheckoutForm = ({ product }) => {
    const { _id, userName, userEmail, userAddress, totalAmount } = product
    const stripe = useStripe()
    const elements = useElements()
    const [cardError, setCardError] = useState("")
    const [success, setSuccess] = useState({
        message: '',
        trx: ''
    })
    const [clientSecret, setClientSecret] = useState("")

    console.log(`this is client secret`, clientSecret);

    useEffect(() => {
        fetch(`${apiBaseUrl}/create-payment-intent`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ price: totalAmount })
        })
            .then(res => res.json())
            .then(data => {
                if (data?.clientSecret) {
                    setClientSecret(data.clientSecret)
                }
            })
    }, [product])

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });


        // if any error
        if (error) {
            setCardError(error.message)
        } else {
            setCardError("")
            setSuccess({ message: '', trx: '' })
        }

        // confirm card payment
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: userName,
                        email: userEmail,
                        address: userAddress
                    },
                },
            },
        );

        if (intentError) {
            setCardError(intentError.message)
            setSuccess({ message: '', trx: '' })
        } else {
            setCardError("")
            setSuccess({
                message: "Congrats! Your payment is Completed.",
                trx: paymentIntent?.id
            })
            fetch(`${apiBaseUrl}/paidProduct/${_id}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({ trxId: paymentIntent?.id })
            })
                .then(res => res.json())
                // .then(data => console.log(data))
        }

    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button class="btn bg-emerald-600 hover:bg-emerald-700 text-white border-0 mt-10 capitalize text-xl ml-auto block px-10" type="submit" disabled={!stripe || !clientSecret}>
                    Please Pay
                </button>
            </form>
            {cardError && <p className="text-red-500">{cardError}</p>}
            {success.message && <p className="text-green-500">{success.message}</p>}
            {success.trx && <p className="text-orange-600">Transaction Id: {success.trx}</p>}
        </>
    );
};

export default CheckoutForm;