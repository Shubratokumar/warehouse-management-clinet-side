import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import SocialLogin from "./../SocialLogin/SocialLogin";
import {
  useSignInWithEmailAndPassword,
  useSendPasswordResetEmail,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { toast } from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithEmailAndPassword, user, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
  const navigate = useNavigate();
  const location = useLocation();

  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordBlur = (event) => {
    setPassword(event.target.value);
  };

  // redirect to the respective location
  let from = location.state?.from?.pathname || "/";

  if (user) {
    // navigate(from, { replace: true });
  }

  const handleSignIn = async (event) => {
    event.preventDefault();
    await signInWithEmailAndPassword(email, password);
    const { data } = await axios.post(
      "https://peaceful-basin-80152.herokuapp.com/login",
      { email }
    );
    localStorage.setItem("accessToken", data.accessToken);
    navigate(from, { replace: true });
    if (email && password) {
      await toast.success("Successfully Login !!!");
    }
    if (error) {
      await toast.error("Oops!!! There is an error.");
    }
  };
  
  const resetPassword = async () => {
    if (email) {
      await sendPasswordResetEmail(email);
      await toast.success("Email Sent successfully !!!");
    } else {
      toast.error("Please enter your email first !!!");
    }
  };
  return (
    <div className="log-container ">
      <div className="log-form">
        <h1 className="log-title">Login to your account</h1>
        <form onSubmit={handleSignIn}>
          <div className="input-field ">
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
        <p className="mt-3 px-3">
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
        <SocialLogin></SocialLogin>
      </div>
    </div>
  );
};

export default Login;
