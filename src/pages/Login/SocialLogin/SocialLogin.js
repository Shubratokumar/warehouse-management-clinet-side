import React from "react";
import GoogleLogo from "../../../Assets/Images/google.svg";
import FacebookLogo from "../../../Assets/Images/Facebook.svg";
import GitHubLogo from "../../../Assets/Images/Github.svg";
import auth from "../../../firebase.init";
import { toast } from 'react-hot-toast';
import {
  useSignInWithFacebook,
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const [signInWithGoogle, user1, error1] = useSignInWithGoogle(auth);
  const [signInWithFacebook, user2, error2] = useSignInWithFacebook(auth);
  const [signInWithGithub, user3, error3] = useSignInWithGithub(auth);
  const navigate = useNavigate();
  const location = useLocation();
  
    // redirect 
  let from = location.state?.from?.pathname || "/";

  if(user1 || user2 || user3){  
    navigate(from, { replace: true });
  } 

  const handleGoogleSignIn = async () => {
    await signInWithGoogle();
    if (!error1) {
      await toast.success("Successfully Login with Google!!!");
    }
  };
  const handlefacebookSignIn = async () => {
    await signInWithFacebook();
    if (!error2) {
      await toast.success("Successfully Login  with Facebook!!!");
    }
  };
  const handleGitHubSignIn = async () => {
    await signInWithGithub();
    if (!error3) {
      await toast.success("Successfully Login  with GitHub!!!");
    }
  };
  return (
    <div>
      <div className="divider justify-content-center">
        <div className="line-left" />
        <p> or </p>
        <div className="line-right" />
      </div>
      <div className="social-container">
        <div className="input-wrapper mb-2">
          <button onClick={handleGoogleSignIn} className="social-log">
            <img src={GoogleLogo} alt="" />
            <p> Continue with Google </p>
          </button>
        </div>
        <div className="input-wrapper mb-2">
          <button onClick={handlefacebookSignIn} className="social-log">
            <img src={FacebookLogo} alt="" />
            <p> Continue with Facebook </p>
          </button>
        </div>
        <div className="input-wrapper mb-2">
          <button onClick={handleGitHubSignIn} className="social-log">
            <img src={GitHubLogo} alt="" />
            <p> Continue with GitHub </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SocialLogin;
