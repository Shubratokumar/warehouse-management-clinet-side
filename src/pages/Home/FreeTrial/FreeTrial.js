import React from 'react';

const FreeTrial = () => {
    return (
        <div className='bg-primary text-white py-5'>
            <div className='container'>
                <div className="row ">
                    <div className="col-sm-12 col-lg-6">
                        <h1>Would you like a free trial?</h1>
                        <p className='fs-5 fst-italic'>Get started today with a free trial or schedule a real-time demo to learn more about us.</p>
                    </div>
                    <div className="col-sm-12 col-lg-6  text-center align-self-center">
                        <button className='oranged-btn'>Start Free Trail</button>
                    </div>
                </div>
            </div>            
        </div>
    );
};

export default FreeTrial;