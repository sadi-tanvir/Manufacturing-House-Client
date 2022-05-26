import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { apiBaseUrl } from '../../../utils/apiBaseUrl';
import SocialLogin from '../SocialLogin/SocialLogin';



const Login = () => {
 // router
 const [
     signInWithEmailAndPassword,
     user,
    loading,
    error,
] = useSignInWithEmailAndPassword(auth);

// router
const navigate = useNavigate()
let location = useLocation();
let from = location.state?.from?.pathname || "/";

const handleLogin = (e) => {
    e.preventDefault()
    const { email, password } = e.target;
    signInWithEmailAndPassword(email.value, password.value)
}

useEffect(() => {
    if (user) {
        navigate(from, { replace: true });
    }

    // const sendUserToDB = async () => {
    //     const res = await axios.put(`${apiBaseUrl}/user/${email}`)
    //     console.log(res);
    //     setAuthToken(res.data.token)
    //     localStorage.setItem('token', JSON.stringify(res.data.token))
    // }
    // sendUserToDB()
}, [user])

    return (
        <div className="h-screen flex justify-center items-center">
            <div className="card w-10/12 md:w-4/12 bg-base-100 shadow-xl py-5">
                <div className="card-body">
                    <h1 className="text-sky-600 font-bold text-3xl text-center mb-5">Login</h1>
                    <form onSubmit={handleLogin} className="grid grid-cols-1 gap-5" action="">
                        <input name="email" type="email" placeholder="Type Email" className="input input-bordered w-full" />
                        <input name="password" type="password" placeholder="Type Password" className="input input-bordered w-full" />
                        <button type="submit" className="btn btn-accent text-white font-bold bg-gradient-to-r from-sky-500 to-sky-600 border-0 rounded-xl w-full">Login</button>
                    </form>
                    <div className="flex flex-col w-full border-opacity-50">
                        <div className="">
                            <p className=" text-sm text-center">
                                New to here?
                                <span  onClick={() => navigate('/register')} className="text-red-400 cursor-pointer ml-1">Create new account</span>
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

export default Login;