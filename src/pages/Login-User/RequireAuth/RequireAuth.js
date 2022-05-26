import React from 'react';
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';

const RequireAuth = ({ children }) => {
    const [user, loading, error] = useAuthState(auth);
    let location = useLocation();

    if (loading) {
      return
    }
  
    if (!user) {
      return <Navigate to="/login" state={{ from: location }} replace />;
    }

    // if (user) {
    //   return <Navigate to="/" state={{ from: location }} replace />;
    // }
  
    return children;
  }


  export default RequireAuth