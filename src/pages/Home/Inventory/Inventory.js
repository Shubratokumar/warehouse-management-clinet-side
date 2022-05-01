import React from 'react';

const Inventory = ({item}) => {
    const {name, image, description, price, quantity} = item;
    return (
        <div className=' shadow p-2 mb-3 bg-body rounded'>
            <div className="card h-100">
                <img height="400px" className='w-100' src={image}  alt="" />

            </div>
            
        </div>
    );
};

export default Inventory;