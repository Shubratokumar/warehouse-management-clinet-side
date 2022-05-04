import React from 'react';
import Inventory from '../Inventory/Inventory';
import "./Inventories.css";
import useItems from './../../../hooks/useItems';
import { useNavigate } from 'react-router-dom';
import { AiOutlineRight } from 'react-icons/ai';

const Inventories = () => {
    const [ items ] = useItems();
    const navigate = useNavigate();
    
    return (
        <div className='inventories bg-info py-5'>
            <div className="container">
                <h2 className='inventory-title text-center py-5'>Avaiable Inventory Items</h2>
                <div className="items-container">
                    {
                        items?.slice(0,6).map(item => <Inventory item={item} key={item._id}></Inventory>)
                    }
                </div>
            </div>
            <div className="container text-end my-3">
                <button type='link' onClick={()=> navigate("/manageinventory")} className="white-btn">Manage Inventories <AiOutlineRight/></button>
            </div>
        </div>
    );
};

export default Inventories;