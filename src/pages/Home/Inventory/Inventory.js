import React from 'react';
import { useNavigate } from 'react-router-dom';

const Inventory = ({item}) => {
    const {name, image, description, price, quantity, _id, supplier} = item;
    const navigate = useNavigate();
    return (
        <div className=' shadow p-2 mb-3 bg-body rounded'>
            <div className="card h-100">
                <img height="300px" className='w-100' src={image}  alt="" />
                <div className="card-body">
                <h5 className="card-title fs-3">{name}</h5>
                <hr />
                <p className="card-text fs-5 fst-italic justified">{description.slice(0,260)} ...</p>
                <hr />
                <p className="card-text"><span className="salmoned">Price</span> : $ {price}</p>
                <p className="card-text"><span className="salmoned">Quantity</span> : {quantity}</p>                
                <p className="card-text"><span className="salmoned">Supplier</span> : {supplier}</p>                
            </div>
                <div className="card-footer">
                    <button onClick={()=>navigate(`/inventory/${_id}`)} className="btn btn-outline-primary w-100">Update Stock</button>
                </div>
            </div>        
        </div>
    );
};

export default Inventory;