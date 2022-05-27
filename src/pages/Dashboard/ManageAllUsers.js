import React, { useEffect, useState } from 'react';
import { apiBaseUrl } from "../../utils/apiBaseUrl"
import axios from 'axios'
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';


const ManageAllUsers = () => {
    const [orders, setOrders] = useState([])
    const [users, setUsers] = useState([])
    const [isChange, setChange] = useState({})

    // router
    const navigate = useNavigate()

    console.log(users);


    // delete order
    const deleteUser = async (id) => {
        Swal.fire({ title: 'Are you sure?', icon: 'warning', showCancelButton: true, confirmButtonColor: '#3085d6', cancelButtonColor: '#d33', confirmButtonText: 'Yes, delete it!' }).then((result) => {
            if (result.isConfirmed) {
                const deleteData = async () => {
                    const res = await axios.delete(`${apiBaseUrl}/deleteUser/${id}`)
                    setChange(res.data.deleteUser)
                }
                deleteData()
            }

        })
    }


    const handleMakeAdmin = async (email) => {
        const res = await axios.patch(`${apiBaseUrl}/makeAdmin/${email}`)
        setChange(res.data.saveUser)
    }

    const handleMakeUser = async (email) => {
        const res = await axios.patch(`${apiBaseUrl}/makeUser/${email}`)
        setChange(res.data.saveUser)
    }


    // get all orders
    useEffect(() => {
        const getAllUsers = async () => {
            const res = await axios(`${apiBaseUrl}/allUsers`)
            setUsers(res.data.users)
        }
        getAllUsers()
    }, [isChange])
    return (
        <div className="">
            <div>
                <div class="overflow-x-auto w-full">
                    <table class="table w-full">
                        {/* <!-- head --> */}
                        <thead>
                            <tr>
                                <th>Name & Email</th>
                                <th>Phone</th>
                                <th>Role</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map(user => {
                                    return (
                                        <>
                                            <tr>
                                                <td>
                                                    <div class="flex items-center space-x-3">
                                                        <div>
                                                            <div title={user.name} class="font-bold">{user.name}</div>
                                                            <div title={user?.email} class="font-semibold">{user?.email}</div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    {user.phone}
                                                </td>
                                                <td>
                                                    <span class={`px-4 py-[3px] rounded-full  ${user.role === 'admin' ? 'bg-green-600' : 'bg-cyan-600'} font-bold text-white`}>{user.role}</span>
                                                    {/* <span class="badge badge-ghost bg-sky-600 px-3 font-semibold text-white">paid</span> */}
                                                </td>
                                                <th className="flex flex-col justify-center items-center">
                                                    <button onClick={() => deleteUser(user._id)}class="btn btn-xs bg-red-600 ml-1 mt-1 border-red-600 focus:border-red-600 text-white hover:bg-red-600">
                                                        Delete
                                                    </button>
                                                    {
                                                        user.role === 'admin' ?
                                                            <button onClick={() => handleMakeUser(user.email)} class="btn btn-xs bg-cyan-600 ml-1 mt-1 border-cyan-600 focus:border-cyan-600 text-white hover:bg-cyan-600">
                                                                Make User
                                                            </button> :
                                                            <button onClick={() => handleMakeAdmin(user.email)} class="btn btn-xs bg-green-600 ml-1 mt-1 border-green-600 focus:border-green-600 text-white hover:bg-green-600">
                                                                Make Admin
                                                            </button>
                                                    }
                                                </th>
                                            </tr>
                                        </>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageAllUsers;