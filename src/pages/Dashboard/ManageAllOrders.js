import React, { useEffect, useState } from 'react';
import { apiBaseUrl } from "../../utils/apiBaseUrl"
import axios from 'axios'
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';


const ManageAllOrders = () => {
    const [orders, setOrders] = useState([])
    const [isDelete, setDelete] = useState({})

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
                    setDelete(res)
                }
                deleteData()
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
    }, [isDelete])
    return (
        <div className="">
            <div>
                <div class="overflow-x-auto w-full">
                    <table class="table w-full">
                        {/* <!-- head --> */}
                        <thead>
                            <tr>
                                <th>Buyer</th>
                                <th>Product</th>
                                <th>Price & Qty</th>
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
                                                    <span class="badge badge-ghost  px-3 bg-red-600 font-semibold text-white">unpaid</span>
                                                    {/* <span class="badge badge-ghost bg-sky-600 px-3 font-semibold text-white">paid</span> */}
                                                </td>
                                                <th className="flex flex-col justify-center items-center">
                                                    <button onClick={() => deleteOrder(order?._id)} class="btn btn-xs bg-red-600 ml-1 border-red-600 focus:border-red-600 text-white hover:bg-red-600">cancel</button>
                                                    <button onClick={() => navigate(`/purchase/${order.productId}`)} class="btn btn-info btn-xs mt-1">details</button>
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
                                <th></th>
                            </tr>
                        </tfoot>

                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageAllOrders;