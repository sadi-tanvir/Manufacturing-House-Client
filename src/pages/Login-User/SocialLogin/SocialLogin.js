import axios from 'axios';
import React, { useEffect } from 'react';
import auth from '../../../firebase.init';
import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';



const SocialLogin = () => {
    const [user, loading, error] = useAuthState(auth);
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

    // router
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const handleSigning = async () => {
        await signInWithGoogle()
    }

    useEffect(() => {
        if(user){
            navigate(from, { replace: true });
        }
        
        // const sendUserToDB = async () => {
        //     const res = await axios.put(`${apiBaseUrl}/user/${user.email}`, {name:user.displayName,email:user.email})
        //     console.log(res);
        //     setAuthToken(res.data.token)
        //     localStorage.setItem('token', JSON.stringify(res.data.token))
        // }
        // sendUserToDB()

    },[user])
    return (
        <>
            <button onClick={handleSigning}className="btn btn-outline btn-info w-full">CONTINUE WITH GOOGLE</button>
        </>
    );
};

export default SocialLogin;