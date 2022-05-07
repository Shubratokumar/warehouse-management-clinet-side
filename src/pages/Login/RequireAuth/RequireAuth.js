import React from 'react';
import auth from './../../../firebase.init';
import { useLocation, Navigate } from "react-router-dom";
import { useAuthState } from 'react-firebase-hooks/auth';
import Loading from './../Loading/Loading';

const RequireAuth = ({ children }) => {
    const [user, loading ] = useAuthState(auth);
    let location = useLocation();

    if (loading){
        return <Loading/>
    }
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
      }
    
    if (!user.emailVerified) {
        return (
        <div style={{'height': "400px"}} className="d-flex justify-content-center align-items-center">
            <div className="text-center">
                <h3 className="text-danger py-3">Your Email address is not verified !</h3>
                <h5 className="text-info pb-3">Please verify your email first !</h5>
                <button className='oranged-btn'>Send me verification email again</button>
            </div>
        </div>
        )
    }  
    return children
};

export default RequireAuth;