import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import {useSelector} from "react-redux"






const UserAuth = ({ children }) => {
    // react firebase
    const [user, loading, error] = useAuthState(auth);
    // router
    let location = useLocation();
    let navigate = useNavigate();
    // react redux
    const {isAdmin} = useSelector(state => state.adminReducer)
  
    // admin will be redirected to the homepage
    useEffect(() => {
        if(isAdmin){
          navigate('/')
        }
    },[isAdmin,user])

    if (!user) {
      // Redirect them to the /login page, but save the current location they were
      // trying to go to when they were redirected. This allows us to send them
      // along to that page after they login, which is a nicer user experience
      // than dropping them off on the home page.
      return <Navigate to="/login" state={{ from: location }} replace />;
    }

  
    return children;
  }


  export default UserAuth;