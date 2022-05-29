import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { apiBaseUrl } from '../../../utils/apiBaseUrl';
import ForgotPassword from '../ForgotPassword/ForgotPassword';
import SocialLogin from '../SocialLogin/SocialLogin';
import { useDispatch } from "react-redux"
import { SET_ADMIN } from "../../../redux/actions/types"



const Login = () => {
    const [authUser] = useAuthState(auth);
    const [isClose, setClose] = useState(true)
    const [info, setInfo] = useState({
        email: '',
        password: ''
    })

    // redux
    const dispatch = useDispatch()

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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInfo({ ...info, [name]: value })
    }

    const handleLogin = async (e) => {
        e.preventDefault()
        const { email, password } = info;
        await signInWithEmailAndPassword(email, password)
        const res = await axios(`${apiBaseUrl}/user/${email}`)
        localStorage.setItem('userRole', JSON.stringify(res.data.role))
        if(res.data.role === 'admin'){
            dispatch({ type: SET_ADMIN })
        }
    }

    useEffect(() => {
        if (user) {
            navigate(from, { replace: true });
        }

        const sendUserToDB = async () => {
            const res = await axios.put(`${apiBaseUrl}/user/${info.email}`, { email: info.email, name: authUser?.displayName })
            // console.log(`manualLogin`,res);
            // setAuthToken(res.data.token)
            // localStorage.setItem('token', JSON.stringify(res.data.token))
        }
        sendUserToDB()
    }, [user, authUser])

    return (
        <div className="h-screen flex justify-center items-center">
            <div className="card w-10/12 md:w-4/12 bg-base-100 shadow-xl py-5">
                <div className="card-body">
                    <h1 className="text-sky-600 font-bold text-3xl text-center mb-5">Login</h1>
                    <form onSubmit={handleLogin} className="grid grid-cols-1 gap-5" action="">
                        <input onChange={handleChange} name="email" type="email" placeholder="Type Email" className="input input-bordered w-full" />
                        <input onChange={handleChange} name="password" type="password" placeholder="Type Password" className="input input-bordered w-full" />
                        <button type="submit" className="btn btn-accent text-white font-bold bg-gradient-to-r from-sky-500 to-sky-600 border-0 rounded-xl w-full">Login</button>
                    </form>
                    <div className="flex flex-col w-full border-opacity-50">
                        <div className="flex justify-between items-center">
                            <p className="text-sm ml-1">
                                New to here?
                                <span onClick={() => navigate('/register')} className="text-red-400 cursor-pointer ml-1">Register</span>
                            </p>
                            <p className="text-sm ml-10">
                                {/* <span onClick={() => navigate('/register')} className="text-red-600 cursor-pointer ml-1"></span> */}
                                <label for='forgot-password' className="text-red-600 cursor-pointer ml-1">Lost Password?</label>
                                {isClose && <ForgotPassword setClose={setClose} />}
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