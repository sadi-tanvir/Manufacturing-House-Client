import React, { useEffect } from 'react';
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const CheckAuth = ({ children }) => {
    const [user, loading, error] = useAuthState(auth);

    // router
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";




    useEffect(() => {
        if (user) {
            navigate(from, { replace: true });
        }
    }, [user, from, navigate])


    return children;
}


export default CheckAuth