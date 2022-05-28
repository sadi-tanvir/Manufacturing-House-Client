import React, { useEffect, useState } from 'react';
import { apiBaseUrl } from "../../utils/apiBaseUrl"
import axios from 'axios'
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';


const ManageAllOrders = () => {
    const [orders, setOrders] = useState([])
    const [isChange, setIsChange] = useState({})

    // router
    const navigate = useNavigate()

    // total order quantity
    const orderQtyArr = orders.map(order => order.orderQuantity)
    const totalOrderQty = orderQtyArr.reduce((pre, curr) => pre + curr, 0)
    // total Tk
    const totalOrderCostArr = orders.map(order => order.unit_price * order.orderQuantity)
    const totalOrderCost = totalOrderCostArr.reduce((pre, curr) => pre + curr, 0)

    // delete order
    const deleteOrder = async (id) => {
        Swal.fire({ title: 'Are you sure?', icon: 'warning', showCancelButton: true, confirmButtonColor: '#3085d6', cancelButtonColor: '#d33', confirmButtonText: 'Yes, cancel it!' }).then((result) => {
            if (result.isConfirmed) {
                const deleteData = async () => {
                    const res = await axios.delete(`${apiBaseUrl}/deleteOrder/${id}`)
                    setIsChange(res)
                }
                deleteData()
            }

        })
    }

    // handle make paid
    const handleMakePaid = (id) => {
        Swal.fire({ title: 'Are you sure?', icon: 'warning', showCancelButton: true, confirmButtonColor: '#3085d6', cancelButtonColor: '#d33', confirmButtonText: 'Yes, make paid it!' }).then((result) => {
            if (result.isConfirmed) {
                const updateData = async () => {
                    const res = await axios.patch(`${apiBaseUrl}/paidProduct/${id}`)
                    setIsChange(res)
                }
                updateData()
            }

        })
    }

    // handle make paid
    const handleMakeUnpaid = (id) => {
        Swal.fire({ title: 'Are you sure?', icon: 'warning', showCancelButton: true, confirmButtonColor: '#3085d6', cancelButtonColor: '#d33', confirmButtonText: 'Yes, make Unpaid it!' }).then((result) => {
            if (result.isConfirmed) {
                const updateData = async () => {
                    const res = await axios.patch(`${apiBaseUrl}/unpaidProduct/${id}`)
                    setIsChange(res)
                }
                updateData()
            }

        })
    }

    // handle make shipped product
    const handleMakeSipped = (id) => {
        Swal.fire({ title: 'Are you sure?', icon: 'warning', showCancelButton: true, confirmButtonColor: '#3085d6', cancelButtonColor: '#d33', confirmButtonText: 'Yes, make Shipped it!' }).then((result) => {
            if (result.isConfirmed) {
                const updateData = async () => {
                    const res = await axios.patch(`${apiBaseUrl}/shippedProduct/${id}`)
                    setIsChange(res)
                }
                updateData()
            }

        })
    }

    // handle make pending product
    const handleMakePending = (id) => {
        Swal.fire({ title: 'Are you sure?', icon: 'warning', showCancelButton: true, confirmButtonColor: '#3085d6', cancelButtonColor: '#d33', confirmButtonText: 'Yes, make Shipped it!' }).then((result) => {
            if (result.isConfirmed) {
                const updateData = async () => {
                    const res = await axios.patch(`${apiBaseUrl}/pendingProduct/${id}`)
                    setIsChange(res)
                }
                updateData()
            }

        })
    }


    // get all orders
    useEffect(() => {
        const getAllOrders = async () => {
            const res = await axios(`${apiBaseUrl}/allOrders`)
            setOrders(res.data.orders)
        }
        getAllOrders()
    }, [isChange])
    return (
        <div className="">
            <div>
                <div class="overflow-x-auto w-full">
                    <table class="table w-full">
                        {/* <!-- head --> */}
                        <thead>
                            <tr className="text-white">
                                <th class="bg-sky-600">Buyer</th>
                                <th class="bg-sky-600">Product</th>
                                <th class="bg-sky-600">Price & Qty</th>
                                <th class="bg-sky-600">Total Tk</th>
                                <th class="bg-sky-600">current status</th>
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
                                                                <img src={order.productImage} alt=" " />
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div title={order.userName} class="font-bold">{order?.userName.length > 10 ? order?.userName.slice(0, 10) : order?.userName}...</div>
                                                            <div title={order?.userEmail} class="font-semibold">{order?.userEmail.length > 10 ? order?.userEmail.slice(0, 10) : order?.userEmail}...</div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td title={order?.productName}>{order?.productName.length > 15 ? order?.productName.slice(0, 15) : order?.productName}...</td>
                                                <td>
                                                    <div>
                                                        <div>{order.orderQuantity}pcs</div>
                                                        <div>${order.unit_price}</div>
                                                    </div>
                                                </td>
                                                <td>${order.unit_price * order.orderQuantity}</td>
                                                <td>
                                                    <div className="flex flex-col justify-center items-center">
                                                        {
                                                            order?.payment_status ?
                                                                <span class=" rounded-2xl shadow-xl py-1  px-5 bg-green-600 font-semibold text-white text-sm">
                                                                    paid
                                                                </span> :
                                                                <span class=" rounded-2xl shadow-xl py-1  px-3 bg-red-600 font-semibold text-white text-sm">
                                                                    Unpaid
                                                                </span>
                                                        }
                                                        {
                                                            order?.shipped ?
                                                                <span class=" rounded-2xl shadow-xl py-1 ml-1 bg-cyan-600 px-3 font-semibold text-white text-sm mt-1">
                                                                    shipped
                                                                </span> :
                                                                <span class=" rounded-2xl shadow-xl py-1 ml-1 bg-pink-500 px-3 font-semibold text-white text-sm mt-1">
                                                                    Pending
                                                                </span>
                                                        }

                                                    </div>
                                                </td>
                                                <th className="flex flex-col justify-center items-center">
                                                    {order?.payment_status || <button onClick={() => deleteOrder(order?._id)} class="rounded-2xl shadow-xl py-1  px-3 bg-red-600 font-semibold text-white text-sm">delete</button>}
                                                    
                                                    {
                                                        order?.shipped ?
                                                            <button onClick={() => handleMakePending(order?._id)} class="rounded-2xl shadow-xl py-1  px-3 bg-pink-600 font-semibold text-white text-sm mt-1">
                                                                make pending
                                                            </button> :
                                                            <button onClick={() => handleMakeSipped(order?._id)} class="rounded-2xl shadow-xl py-1  px-3 bg-sky-600 font-semibold text-white text-sm mt-1">
                                                                make Shipped
                                                            </button>

                                                    }

                                                    {
                                                        order?.payment_status ?
                                                            <button onClick={() => handleMakeUnpaid(order?._id)} class="rounded-2xl shadow-xl py-1  px-3 bg-red-600 font-semibold text-white text-sm mt-1">
                                                                make unpaid
                                                            </button> :
                                                            <button onClick={() => handleMakePaid(order?._id)} class="rounded-2xl shadow-xl py-1  px-3 bg-green-600 font-semibold text-white text-sm mt-1">
                                                                make paid
                                                            </button>
                                                    }

                                                    {/* <button onClick={() => navigate(`/purchase/${order.productId}`)} class="rounded-2xl shadow-xl py-1  px-3 bg-sky-600 font-semibold text-white text-sm mt-1">make undone</button> */}
                                                </th>
                                            </tr>
                                        </>
                                    )
                                })
                            }
                        </tbody>




                        {/* <!-- foot --> */}
                        <tfoot>
                            <tr>
                                <th></th>
                                <th></th>
                                <th>Total Item: {orders.length}</th>
                                <th>Order Qty: {totalOrderQty}pcs</th>
                                <th>Total Cost ${totalOrderCost}</th>
                                <th></th>
                                {/* <th></th> */}
                            </tr>
                        </tfoot>

                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageAllOrders;