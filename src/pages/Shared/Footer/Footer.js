import React from 'react';
import './Footer.css';
import { BsFacebook } from 'react-icons/bs';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { FaGooglePlay } from 'react-icons/fa';
import { BsLinkedin } from 'react-icons/bs';
import { BsYoutube } from 'react-icons/bs';

const Footer = () => {
    return (
        <div className='footer  p-5  text-white '>
            <div className="container ">
                <div className="row text-center">
                <div className="col-sm-12 col-lg-6">
                    <p className="footer-text">
                    <span className="text-uppercase">
                    &copy; <span>{new Date().getFullYear()}</span>{" "} 
                    Apex <span className="oranged">Warehouse</span> management | </span> All rights reserved |
                    Privacy Policy
                    </p>
                    <div className='fs-3 text-center mb-3'>
                        <BsFacebook className='footer-icon' />
                        <AiFillTwitterCircle className='fs-2 footer-icon'/>
                        <FaGooglePlay className='footer-icon'/>
                        <BsLinkedin className='footer-icon'/>
                        <BsYoutube className='footer-icon'/>
                    </div>
                </div>
                <div className="col-sm-12 col-lg-6">
                    <p className="footer-text">
                        Warehouse Management Web Design and Developed <br />
                        by
                    <span className="developer text-uppercase"> shubrato kumar</span>
                    </p>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;