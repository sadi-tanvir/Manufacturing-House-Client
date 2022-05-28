import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { apiBaseUrl } from "../../utils/apiBaseUrl"
import axios from 'axios';

const MyProfile = () => {
    const [user, loading, error] = useAuthState(auth);
    const [info, setInfo] = useState({
        name: user?.displayName,
        email: user?.email,
        phone: "",
        address: "",
        education: "",
        linkedin: "",
        github: "",
    })
    // Handle Change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setInfo({ ...info, [name]: value })
    }

    const handleUpdate = async (e) => {
        e.preventDefault()
        const { name, email, phone, address, education, linkedin, github } = info

        const res = await axios.put(`${apiBaseUrl}/updateUserInfo/${info.email}`,
            { name, email, phone, address, education, linkedin, github })
    }

    useEffect(() => {
        const userData = async () => {
            const res = await axios(`${apiBaseUrl}/user/${user?.email}`)
            setInfo({
                ...info,
                phone: res.data.user.phone,
                address: res.data.user.address,
                education: res.data.user.education,
                linkedin: res.data.user.linkedin,
                github: res.data.user.github,
            })
        }
        userData()
    }, [])
    return (
        <div>
            <div className=" my-20 flex justify-center items-center md:-mt-8">
                <div className="card w-10/12 md:w-6/12 bg-base-100 shadow-xl py-5">
                    <div className="card-body">
                        <h1 className="text-sky-600 font-bold text-3xl text-center mb-5">My Profile</h1>
                        <form onSubmit={handleUpdate} className="grid grid-cols-1 gap-5" action="">
                            <input onChange={handleChange} readOnly name="name" type="text" value={info.name} className="input input-bordered w-full" />
                            <input onChange={handleChange} readOnly name="email" type="text" value={info.email} className="input input-bordered w-full" />
                            <input onChange={handleChange} name="phone" type="text" value={info.phone} placeholder="Phone Number" className="input input-bordered w-full" />
                            <input onChange={handleChange} name="address" type="text" value={info.address} placeholder="Your Address" className="input input-bordered w-full" />
                            <input onChange={handleChange} name="education" type="text" value={info.education} placeholder="Education Background" className="input input-bordered w-full" />
                            <input onChange={handleChange} name="linkedin" type="text" value={info.linkedin} placeholder="LinkedIn Profile" className="input input-bordered w-full" />
                            <input onChange={handleChange} name="github" type="text" value={info.github} placeholder="github Profile" className="input input-bordered w-full" />
                            <button type="submit" className="btn btn-accent text-white font-bold bg-gradient-to-r from-sky-500 to-sky-600 border-0 rounded-xl w-full">Update Information</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;