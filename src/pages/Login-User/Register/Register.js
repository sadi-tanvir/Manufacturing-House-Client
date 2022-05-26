import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useUpdateProfile } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from "../../../firebase.init"
import SocialLogin from '../SocialLogin/SocialLogin';
import { apiBaseUrl } from "../../../utils/apiBaseUrl"
import axios from 'axios'



const Register = () => {
    const [userInfo, setUserInfo] = useState({
        name: '',
        email: '',
        password: ''
    })
    // firbase registration
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        registerError,
    ] = useCreateUserWithEmailAndPassword(auth);
    // firebase update profile
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    // handle change input
    const handleChange = (e) => {
        const {name, value} = e.target;
        setUserInfo({...userInfo, [name]:value})
    }


    // router
    const navigate = useNavigate()

    const handleLogin = async (e) => {
        e.preventDefault()
        const { name, email, password } = userInfo;
        await createUserWithEmailAndPassword(email, password)
        await updateProfile({ displayName: name });
        // const res = await axios.put(`${apiBaseUrl}/user/${email.value}`, {name:name.value,email:email.value})
        // setAuthToken(res.data.token)
        // localStorage.setItem('token', res.data.token)
    }


    // if (user) {
    //     navigate('/')
    // }

    return (
        <div className="h-screen flex justify-center items-center">
            <div className="card w-10/12 md:w-4/12 bg-base-100 shadow-xl py-5">
                <div className="card-body">
                    <h1 className="text-info font-semibold text-3xl text-center mb-5">Register</h1>
                    <form onSubmit={handleLogin} className="grid grid-cols-1 gap-5" action="">
                        <input onChange={handleChange} name="name" type="text" placeholder="Type Your Name" className="input input-bordered w-full" />
                        <input onChange={handleChange} name="email" type="email" placeholder="Type Email" className="input input-bordered w-full" />
                        <input onChange={handleChange} name="password" type="password" placeholder="Type Password" className="input input-bordered w-full" />
                        <button type="submit" className="btn btn-info text-white font-bold bg-gradient-to-r from-info to-info border-0 rounded-xl w-full">Register</button>
                    </form>
                    <div className="flex flex-col w-full border-opacity-50">
                        <div className="">
                            <p className=" text-sm text-center">
                                Already have an account?
                                <span onClick={() => navigate('/login')} className="text-red-400 cursor-pointer ml-1">Login</span>
                            </p>
                        </div>
                        <div className="divider">OR</div>
                        <div className="">
                            <SocialLogin />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;