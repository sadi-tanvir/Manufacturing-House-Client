import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { apiBaseUrl } from '../../utils/apiBaseUrl';
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
        Swal.fire({ title: 'Are you sure?', icon: 'warning', showCancelButton: true, confirmButtonColor: '#3085d6', cancelButtonColor: '#d33', confirmButtonText: 'Yes, delete it!' }).then((result) => {
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
            const res = await axios(`${apiBaseUrl}/myOrders?email=${user?.email}`)
            setOrders(res.data.orders);
        }
        getOrders()
    }, [user, isDelete])

    return (
        <div>
            <div class="overflow-x-auto w-full">
                <table class="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Unit Price</th>
                            <th>Order Quantity</th>
                            <th>Total Tk</th>
                            <th>payment status</th>
                            <th></th>
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
                                                        <div class="font-bold">{order?.productName.length > 20 ? order?.productName.slice(0, 20) : order?.productName}...</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>${order?.unit_price}</td>
                                            <td>{order?.orderQuantity}pcs</td>
                                            <td>${order?.unit_price * order?.orderQuantity}</td>
                                            <td>
                                                <span class="badge badge-ghost  px-3 bg-red-600 font-semibold text-white">unpaid</span>
                                                {/* <span class="badge badge-ghost bg-sky-600 px-3 font-semibold text-white">paid</span> */}
                                            </td>
                                            <th>
                                                <button onClick={() => navigate(`/purchase/${order.productId}`)} class="btn btn-info btn-xs">details</button>
                                                <button onClick={() => deleteOrder(order?._id)} class="btn btn-xs bg-red-600 ml-1 border-red-600 focus:border-red-600 text-white hover:bg-red-600">delete</button>
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