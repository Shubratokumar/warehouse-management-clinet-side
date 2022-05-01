import React from 'react';
import './Footer.css'

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