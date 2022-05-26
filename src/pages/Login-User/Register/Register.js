import React from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useUpdateProfile } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from "../../../firebase.init"
import useToken from '../../../hooks/useToken';
import SocialLogin from '../SocialLogin/SocialLogin';
import {apiBaseUrl} from "../../../utils/apiBaseUrl"
import axios from 'axios'
import setAuthToken from "../../../utils/setAuthToken"



const Register = () => {
    // firbase registration
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        registerError,
    ] = useCreateUserWithEmailAndPassword(auth);
    // firebase update profile
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    
   

    // router
    const navigate = useNavigate()

    const handleLogin = async (e) => {
        e.preventDefault()
        const { name,email,phone, password } = e.target;
        await createUserWithEmailAndPassword(email.value, password.value)
        await updateProfile({ displayName:name.value,phoneNumber:phone.value });
        const res = await axios.put(`${apiBaseUrl}/user/${email.value}`, {name:name.value,email:email.value})
        setAuthToken(res.data.token)
        localStorage.setItem('token', res.data.token)
    }


    // if (user) {
    //     navigate('/')
    // }

    return (
        <div className="h-screen flex justify-center items-center">
            <div className="card w-4/12 bg-base-100 shadow-xl py-5">
                <div className="card-body">
                    <h1 className="text-accent font-semibold text-3xl text-center mb-5">Register</h1>
                    <form onSubmit={handleLogin} className="grid grid-cols-1 gap-5" action="">
                        <input name="name" type="text" placeholder="Type Your Name" className="input input-bordered w-full" />
                        <input name="email" type="email" placeholder="Type Email" className="input input-bordered w-full" />
                        <input name="phone" type="number" placeholder="Type Your Phone" className="input input-bordered w-full" />
                        <input name="password" type="password" placeholder="Type Password" className="input input-bordered w-full" />
                        <button type="submit" className="btn btn-accent text-white font-bold bg-gradient-to-r from-accent to-accent border-0 rounded-xl w-full">Register</button>
                    </form>
                    <div className="flex flex-col w-full border-opacity-50">
                        <div className="">
                            <p className=" text-sm text-center">
                                Already have an account?
                                <span onClick={() => navigate('/login')} className="text-secondary cursor-pointer ml-1">Login</span>
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