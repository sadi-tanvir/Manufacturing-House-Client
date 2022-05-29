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
        <div className=""><div className="mx-5 md:mx-0">
        <h1 className="text-2xl md:text-4xl text-slate-600 font-bold text-center mb-5 uppercase md:mb-8 mt-2">Manage All Users</h1>
                <div class="overflow-x-auto w-full">
                    <table class="table w-full">
                        {/* <!-- head --> */}
                        <thead className="text-white">
                            <tr>
                                <th class="bg-sky-600">Name & Email</th>
                                <th class="bg-sky-600">Phone</th>
                                <th class="bg-sky-600">Role</th>
                                <th class="bg-sky-600"></th>
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
                                                    {user.phone && <span class="bg-slate-500 px-5 py-1 text-sm inline-block rounded-2xl font-semibold text-white">{user.phone}</span>}
                                                </td>
                                                <td>
                                                    {/* <span class={`px-4 py-[3px] rounded-full  font-bold text-white`}></span> */}
                                                    <span class={` ${user.role === 'admin' ? 'bg-green-600' : 'bg-cyan-600'} px-7 py-1 inline-block rounded-2xl  text-sm font-semibold text-white`}>
                                                        {user.role}
                                                    </span>
                                                </td>
                                                <th className="flex flex-col justify-center items-center">
                                                    <button onClick={() => deleteUser(user._id)} className="shadow-xl mt-1 py-1 px-8 text-sm rounded-md text-white font-bold bg-red-600">
                                                        Delete
                                                    </button>
                                                    {
                                                        user.role === 'admin' ?
                                                            <button onClick={() => handleMakeUser(user.email)} className="shadow-xl mt-1 py-1 px-5  text-sm rounded-md text-white font-bold bg-cyan-600">
                                                                Make User
                                                            </button> :
                                                            <button onClick={() => handleMakeAdmin(user.email)} className="shadow-xl  text-sm mt-1 py-1 px-3 rounded-md text-white font-bold bg-green-600">
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