import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiOutlineDelete } from 'react-icons/ai';
import { AiOutlineRight } from 'react-icons/ai';
import { useNavigate } from "react-router-dom";

const ManageInventory = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    // Load data by useing IIFE
    (async () => {
      const { data } = await axios.get(`http://localhost:5000/products`);
      setProducts(data);
    })();
  }, []);
 const handleRemove = (id) =>{
     console.log(id)
 }

  return (
    <div>
      <div className="container my-3">
        <h2 className="text-center text-info my-5">Manage Inventory Products</h2>
        <div className="table-responsive">
            <table class="table align-middle table-hover ">
            <thead class="table-dark">
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Image</th>
                    <th scope="col">Supplier</th>
                    <th scope="col">Price</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Remove</th>                
                </tr>
            </thead>
            <tbody>
                {
                    products?.map(product => {                        
                        return(
                            <tr key={product._id} className="col align-self-center">
                                <td>{product.name}</td>
                                <td className="w-25 h-50"><img className="w-50" src={product.image} alt="" /></td>
                                <td>{product.supplier}</td>
                                <td>$ {product.price}</td>
                                <td>{product.quantity}</td>
                                <td><button onClick={()=>handleRemove(product._id)} className="oranged-btn"><AiOutlineDelete/></button></td>
                            </tr>
                        )
                    })
                }          
            </tbody>
            </table>
        </div>
      </div>
      <div className="container text-end my-3">
          <button type='link' onClick={()=> navigate("/additem")} className="oranged-btn">Add a New Inventory <AiOutlineRight/></button>
      </div>
    </div>
  );
};

export default ManageInventory;
