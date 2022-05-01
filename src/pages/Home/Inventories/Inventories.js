import React, { useEffect, useState } from 'react';
import Inventory from '../Inventory/Inventory';
import "./Inventories.css";

const Inventories = () => {
    const [items, setItems] = useState([]);
    useEffect(()=>{
        fetch("data.json")
        .then(res => res.json())
        .then(data => setItems(data))
    },[])
    return (
        <div className='inventories bg-info py-5'>
            <div className="container">
                <h2 className='inventory-title text-center py-5'>Avaiable Inventory Items : {items.length}</h2>
                <div className="items-container">
                    {
                        items.map(item => <Inventory item={item} key={item._id}></Inventory>)
                        // items.slice(0,3).map(item => <Inventory item={item} key={item._id}></Inventory>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Inventories;