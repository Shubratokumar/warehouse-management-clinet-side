import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
// import SocialLogin from "./../SocialLogin/SocialLogin";

const Login = () => {

    const handleEmailBlur = event  =>{
        
    }
    const handlePasswordBlur = event =>{

    }
    const handleSignIn = event =>{

    }
    const resetPassword = () =>{

    }
  return (
    <div className="log-container ">
      <div className="log-form">
        <h1 className="log-title">Login</h1>
        <form onSubmit={handleSignIn}>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <div>
              <input
                onBlur={handleEmailBlur}
                type="email"
                name="email"
                id="email"
                required
              />
            </div>
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <div>
              <input
                onBlur={handlePasswordBlur}
                type="password"
                name="password"
                id="password"
                required
              />
            </div>
          </div>
          <button type="submit" className="submit-btn">
            Login
          </button>
        </form>
        <p className="mt-3">
          New to Apex Warehouse Management?{" "}
          <Link className="text-decoration-none oranged" to="/register">
            Create New Account
          </Link>
        </p>
        <p>
          Forgot Password?
          <button
            onClick={resetPassword}
            className="link-btn btn btn-link text-decoration-none oranged"
          >
            Reset Password
          </button>
        </p>
        {/* <SocialLogin></SocialLogin> */}
      </div>
    </div>
  );
};

export default Login;
