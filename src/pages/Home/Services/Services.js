import React from 'react';
import './Services.css';
import { GrGrow } from 'react-icons/gr';
import { RiCustomerService2Line } from 'react-icons/ri';
import { FaUserAlt } from 'react-icons/fa';

const Services = () => {
    return (
        <div style={{backgroundColor: "gray"}} className='services py-5 '>
            <div className="container">
                <div className="row g-4">
                    <div className="col-12 col-lg-6 align-self-center">
                        <h2 className='title text-white '>
                            Complete <p ><span className='oranged'>Warehouse</span> Management in one place</p>
                        </h2>                        
                        <p className='sub-title text-white fs-5 fst-italic'>Experience the most comprehensive warehousing and warehouse management systems for your Business</p>
                        <p className='text-white justified'>We provide Secure technology for your business growth. We always focus on  customer satisfaction, operate more efficiently and grow faster. By providing such facilities, now we successfully able to minimalist system loss of our customers of there business and enhanced proctivity. </p>
                        <button className='oranged-btn'>Learn More </button>
                    </div>
                    <div className="col-12 col-lg-6 align-self-center ">
                        <div className='d-flex align-items-center justify-content-center mb-3'>
                            <div className='pe-3'><GrGrow className='icon'></GrGrow> </div>
                            <div> 
                                <h3 className='oranged '>Faster Growth</h3>
                                <p className=' text-white'>With AWS solutions accelerate your business growth.</p>
                            </div>
                        </div>
                        <div className='d-flex align-items-center justify-content-center mb-3'>
                            <div className='pe-3'><RiCustomerService2Line className='icon'></RiCustomerService2Line> </div>
                            <div> 
                                <h3 className='oranged '>Serve Customers</h3>
                                <p className=' text-white'>We always support our customer any situation, wherever they are. </p>
                            </div>
                        </div>
                        <div className='d-flex align-items-center justify-content-center'>
                            <div className='pe-3'><FaUserAlt className='icon'></FaUserAlt> </div>
                            <div> 
                                <h3 className='oranged '>Supply Manpower</h3>
                                <p className=' text-white'>We provide manpower as well you don't need to think about it.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;