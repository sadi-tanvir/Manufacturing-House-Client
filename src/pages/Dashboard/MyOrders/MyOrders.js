import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { apiBaseUrl } from '../../../utils/apiBaseUrl';
import Swal from "sweetalert2"

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
        <div>
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
                                                        <div class="mask mask-squircle w-12 h-12">
                                                            <img src={order?.productImage} alt="Avatar Tailwind CSS Component" />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div title={order?.productName} class="font-bold">{order?.productName.length > 20 ? order?.productName.slice(0, 20) : order?.productName}...</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>${order?.unit_price}</td>
                                            <td>{order?.orderQuantity}pcs</td>
                                            <td>${order?.unit_price * order?.orderQuantity}</td>
                                            <td>
                                                {
                                                    order?.payment_status ?
                                                    <span class="bg-green-600 px-5 py-1 rounded-2xl font-semibold text-white">
                                                            Paid
                                                        </span>
                                                        :
                                                        <span class="px-5 py-1 rounded-2xl bg-red-600 font-semibold text-white">
                                                            Unpaid
                                                        </span>
                                                }
                                            </td>
                                            <th>
                                                <div className="flex justify-center items-center">
                                                    {!order?.payment_status && <button onClick={() => navigate(`/payment/${order._id}`)} class="btn bg-green-600 hover:bg-green-700 border-0 text-white btn-xs mr-2">Make Payment</button>}
                                                    
                                                    <div className="flex flex-col justify-center items-center">
                                                        {!order?.payment_status && <button onClick={() => deleteOrder(order?._id)} class="btn btn-xs bg-red-600 border-red-600 focus:border-red-600 text-white hover:bg-red-600">cancel</button>}
                                                        <button onClick={() => navigate(`/purchase/${order.productId}`)} class="btn btn-info btn-xs mt-1">details</button>
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