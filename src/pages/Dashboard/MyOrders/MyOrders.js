import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { apiBaseUrl } from '../../../utils/apiBaseUrl';
import Swal from "sweetalert2"
import TransactionId from './TransectionId';

const MyOrders = () => {
    // firebase
    const [user, loading, error] = useAuthState(auth);

    // state
    const [orders, setOrders] = useState([])
    const [isDelete, setDelete] = useState({})
    // router
    const navigate = useNavigate()

    // delete order
    const deleteOrder = async (id) => {
        Swal.fire({ title: 'Are you sure?', icon: 'warning', showCancelButton: true, confirmButtonColor: '#3085d6', cancelButtonColor: '#d33', confirmButtonText: 'Yes, cancel it!' }).then((result) => {
            if (result.isConfirmed) {
                const deleteData = async () => {
                    const res = await axios.delete(`${apiBaseUrl}/deleteOrder/${id}`)
                    setDelete(res)
                }
                deleteData()
            }

        })
    }

    // get my orders
    useEffect(() => {
        const getOrders = async () => {
            const res = await axios(`${apiBaseUrl}/myOrders/${user?.email}`)
            setOrders(res.data.orders);
        }
        getOrders()
    }, [user, isDelete])

    return (
        <div className="mx-5 md:mx-0">
            <h1 className="text-3xl md:text-5xl text-sky-600 font-bold text-center mb-5 uppercase md:mb-8 mt-2">My Orders</h1>
            <div class="overflow-x-auto w-full">
                <table class="table w-full">
                    {/* <!-- head --> */}
                    <thead class="">
                        <tr class="text-white">
                            <th class="bg-sky-600">Name</th>
                            <th class="bg-sky-600">Unit Price</th>
                            <th class="bg-sky-600">Order Quantity</th>
                            <th class="bg-sky-600">Total Tk</th>
                            <th class="bg-sky-600">payment status</th>
                            <th class="bg-sky-600">Transaction Id</th>
                            <th class="bg-sky-600"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(order => {
                                return (
                                    <>
                                        <tr>
                                            <td>
                                                <div class="flex items-center space-x-3">
                                                    <div class="avatar">
                                                        <div class="mask mask-squircle w-12 h-12 shadow-lg">
                                                            <img class="" src={order?.productImage} alt="Avatar Tailwind CSS Component" />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div title={order?.productName} class="font-bold">{order?.productName.length > 20 ? order?.productName.slice(0, 20) : order?.productName}...</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <span class="bg-slate-500 text-sm px-7 py-1 inline-block rounded-2xl font-semibold text-white">
                                                    ${order?.unit_price}
                                                </span>
                                            </td>
                                            <td>
                                                <span class="bg-slate-500 text-sm px-5 py-1 inline-block rounded-2xl font-semibold text-white">
                                                    {order?.orderQuantity} pcs
                                                </span>
                                            </td>
                                            <td>
                                                <span class="bg-slate-500 text-sm px-7 py-1 inline-block rounded-2xl font-semibold text-white">
                                                    ${order?.totalAmount}
                                                </span>
                                            </td>
                                            <td>
                                                {
                                                    order?.payment_status ?
                                                        <>
                                                            <span class="bg-green-600 text-sm px-7 py-1 inline-block rounded-2xl font-semibold text-white">
                                                                Paid
                                                            </span>
                                                        </>
                                                        :
                                                        <span class="px-5 text-sm py-1 rounded-2xl bg-red-600 font-semibold text-white">
                                                            Unpaid
                                                        </span>
                                                }
                                            </td>
                                            <td>
                                                {
                                                    order.payment_status ?
                                                        <>
                                                            <label for="transaction-id" className="shadow-lg text-sm py-1 px-3 rounded-3xl text-white font-bold bg-green-500 cursor-pointer">
                                                                See Transaction  Id
                                                            </label>
                                                            <TransactionId trxId={order?.trxId} />
                                                        </> :
                                                        <p className="shadow-lg text-sm py-1 px-3 rounded-3xl text-white font-bold bg-slate-500 text-center">
                                                            N/A
                                                        </p>
                                                }
                                            </td>
                                            <th>
                                                <div className="flex justify-center items-center ml-3">

                                                    <div className="flex flex-col justify-center items-center ml-3">
                                                        {!order?.payment_status && <button onClick={() => navigate(`/payment/${order._id}`)} className="shadow-xl text-sm py-1 px-3 rounded-md text-white font-bold bg-green-500">Make Payment</button>}
                                                        <button onClick={() => navigate(`/purchase/${order.productId}`)} className="shadow-xl text-sm mt-1 py-1 px-10 rounded-md text-white font-bold bg-cyan-500">details</button>
                                                        {!order?.payment_status && <button onClick={() => deleteOrder(order?._id)} className="shadow-xl text-sm py-1 px-10 rounded-md text-white font-bold bg-red-500 mt-1">cancel</button>}
                                                    </div>
                                                </div>
                                            </th>
                                        </tr>
                                    </>
                                )
                            })
                        }
                    </tbody>




                    {/* <!-- foot --> */}
                    {/* <tfoot>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </tfoot> */}

                </table>
            </div>
        </div>
    );
};

export default MyOrders;