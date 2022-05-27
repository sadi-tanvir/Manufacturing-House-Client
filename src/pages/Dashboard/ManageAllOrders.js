import React, { useEffect, useState } from 'react';
import { apiBaseUrl } from "../../utils/apiBaseUrl"
import axios from 'axios'


const ManageAllOrders = () => {
    const [orders, setOrders] = useState([])
console.log(orders);
    // get all orders
    useEffect(() => {
        const getAllOrders = async () => {
            const res = await axios(`${apiBaseUrl}/allOrders`)
            setOrders(res.data.orders)
        }
        getAllOrders()
    }, [])
    return (
        <div>
            <div>
                <div class="overflow-x-auto w-full">
                    <table class="table w-full">
                        {/* <!-- head --> */}
                        <thead>
                            <tr>
                                <th>Buyer</th>
                                <th>Product</th>
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
                                                                <img src={order.productImage} alt=" " />
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div title="" class="font-bold">{order.userName}</div>
                                                            <div title="" class="font-semibold">{order?.userEmail.length > 15 ? order?.userEmail.slice(0, 20) : order?.userEmail}...</div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>{order?.productName.length > 20 ? order?.productName.slice(0, 20) : order?.productName}...</td>
                                                <td>${order.unit_price}</td>
                                                <td>{order.orderQuantity}pcs</td>
                                                <td>${order.unit_price * order.orderQuantity}</td>
                                                <td>
                                                    <span class="badge badge-ghost  px-3 bg-red-600 font-semibold text-white">unpaid</span>
                                                    {/* <span class="badge badge-ghost bg-sky-600 px-3 font-semibold text-white">paid</span> */}
                                                </td>
                                                <th className="flex flex-col justify-center items-center">
                                                    <button class="btn btn-xs bg-red-600 ml-1 border-red-600 focus:border-red-600 text-white hover:bg-red-600">cancel</button>
                                                    <button class="btn btn-info btn-xs mt-1">details</button>
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
        </div>
    );
};

export default ManageAllOrders;