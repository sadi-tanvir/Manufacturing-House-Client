import { async } from '@firebase/util';
import axios from 'axios';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { apiBaseUrl } from '../../utils/apiBaseUrl';




const PurchaseConfirmModal = ({ product,setModal }) => {
    const { _id, name, image, Available_qty,unit_price, minimum_order_qty } = product
    // firebase
    const [user, loading, error] = useAuthState(auth);
    // state
    const [info, setInfo] = useState({
        userName: user?.displayName,
        userEmail: user?.email,
        userPhone: '',
        userAddress: '',
        orderQuantity: minimum_order_qty
    })
    const [checkQty, setCheckQty] = useState({
        min: false,
        max: false
    })


    const handleChange = (e) => {
        const { name, value } = e.target;
        setInfo({ ...info, [name]: value })
    }

    const checkOrderQuantity = () => {
        const { orderQuantity } = info;
        if (orderQuantity < minimum_order_qty) {
            setCheckQty({ max: false, min: true })
            return;
        } else if (orderQuantity > Available_qty) {
            setCheckQty({ min: false, max: true })
            return;
        }
        setCheckQty({ max: false, min: false })
    }


    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
           await checkOrderQuantity()
           axios.post(`${apiBaseUrl}/order`, {
                productId: _id,
                productName: name,
                productImage: image,
                unit_price:unit_price,
                userName: info.userName,
                userEmail: info.userEmail,
                userPhone: info.userPhone,
                userAddress: info.userAddress,
                orderQuantity: info.orderQuantity,
                totalAmount: info.orderQuantity * unit_price
            }).then(res => {
                console.log(res);
                if(res.data.success === true){
                    setModal(null)
                }else{
                    setModal(" ")
                }
            })
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>

            {/* <!-- Put this part before </body> tag --> */}
            <input type="checkbox" id='confirm-purchase' className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <div className="">
                        <h2 className='text-info font-semibold text-start text-2xl text-center mt-3'>
                            Purchase for: {name}
                        </h2>

                        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 pt-5 justify-items-center w-full px-8">
                            {/* <input onChange={handleChange} name="date" disabled type="text" value={new Date()} className="input input-bordered input-md w-full" /> */}
                            <input onChange={handleChange} disabled name="userName" value={info.userEmail} type="text" className="input input-bordered input-md w-full" />
                            <input onChange={handleChange} disabled name="userEmail" type="text" value={info.userEmail} className="input input-bordered input-md w-full" />
                            <input onChange={handleChange} required name="userPhone" placeholder="phone number" type="text" value={info.userPhone} className="input input-bordered input-md w-full" />
                            <input onChange={handleChange} required name="userAddress" placeholder="Address" type="text" value={info.userAddress} className="input input-bordered input-md w-full" />
                            <input onChange={handleChange} required name="orderQuantity" placeholder="Product quantity" type="text" value={info.orderQuantity} className="input input-bordered input-md w-full" />
                            {checkQty.min && <small className="mr-auto text-red-500">you can't order less than {minimum_order_qty}pcs</small>}
                            {checkQty.max && <small className="mr-auto text-red-500">you can't order more than {Available_qty}pcs</small>}
                            <button className="btn btn-primary text-white font-bold bg-gradient-to-r from-info to-info border-0 rounded-lg w-full">place order</button>
                        </form>
                    </div>
                    <div className="modal-action">
                        <label for='confirm-purchase' className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PurchaseConfirmModal;