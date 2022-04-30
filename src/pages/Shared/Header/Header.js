import React from "react";
import { Link } from "react-router-dom";
import CustomLink from "../../CustomLink/CustomLink";
import auth from "./../../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import { signOut } from 'firebase/auth';
import "./Header.css";
import BrandLogo from "../../../Assets/Images/apex.jpg"

const Header = () => {
  const [user] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth);
    toast.success("Successfully Logout!!!", {
      duration: 3000,
      style: {
        background: "black",
        color: "white",
      },
    });
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light shadow p-3 mb-4 bg-body rounded-3 sticky-top">
      <div className="container">
        <Link className="navbar-brand" to="/">
            <img src={BrandLogo} alt="" className="brand-logo"/>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav  me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <CustomLink className="nav-link" aria-current="page" to="/">
                Home
              </CustomLink>
            </li>
            <li className="nav-item">
              <CustomLink className="nav-link" to="/blogs">
                Blogs
              </CustomLink>
            </li>
            <li className="nav-item">
              <CustomLink className="nav-link" to="/about">
                About
              </CustomLink>
            </li>            
          </ul>
          <div className="d-flex">
            {user?.uid ? (
              <>
                <img
                  className="login-img"
                  src={user?.photoURL ? user?.photoURL : ""}
                  alt=""
                />
                <CustomLink className="nav-link" to="user">
                  {user?.displayName ? user?.displayName : ""}
                </CustomLink>
                <CustomLink onClick={handleSignOut} className="nav-link" to="/login">
                  Signout
                </CustomLink>
              </>
            ) : (
                <>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <CustomLink className="nav-link" to="/about">
                            About
                        </CustomLink>
                        </li>
                        <li className="nav-item">
                        <CustomLink className="nav-link" to="/login">
                            Login
                        </CustomLink>
                        </li>
                    </ul>                    
                </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
