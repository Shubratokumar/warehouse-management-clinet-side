import React from 'react';
import "./Banner.css";
import BannerImage from "../../../Assets/Images/storehouse-workers-keeping-records.webp";

const Banner = () => {
    return (
        <div className='banner pt-4'>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-6 align-self-center">
                        <h2 className='title text-white'>
                            Welcome to 
                            <p className='text-uppercase'>Apex <span style={{color: "crimson"}}>warehouse</span> <br /> management.</p>
                        </h2>                        
                        <p className='sub-title text-white'>Transfrom Your Business with AWM .</p>
                    </div>
                    <div className="col-12 col-lg-6 align-self-center py-3 my-3 rounded">
                        <img src={BannerImage} alt="" className="img-fluid" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;