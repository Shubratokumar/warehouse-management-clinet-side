import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiOutlineDelete } from 'react-icons/ai';

const ManageInventory = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    // Load data by useing IIFE
    (async () => {
      const { data } = await axios.get(`http://localhost:5000/products`);
      setProducts(data);
    })();
  }, []);


  return (
    <div>
      <div className="container">
        <h2 className="text-center my-5">Manage Inventory Products</h2>
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
                            <tr className="col align-self-center">
                                <td>{product.name}</td>
                                <td className="w-25"><img className="w-50" src={product.image} alt="" /></td>
                                <td>{product.supplier}</td>
                                <td>$ {product.price}</td>
                                <td>{product.quantity}</td>
                                <td><button className="oranged-btn"><AiOutlineDelete/></button></td>
                            </tr>
                        )
                    })
                }          
            </tbody>
            </table>
        </div>
      </div>
    </div>
  );
};

export default ManageInventory;
