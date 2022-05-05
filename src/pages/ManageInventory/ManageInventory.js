import React from "react";
import { AiOutlineDelete } from 'react-icons/ai';
import { AiOutlineRight } from 'react-icons/ai';
import { useNavigate } from "react-router-dom";
import useProducts from './../../hooks/useProducts';

const ManageInventory = () => {
  const [products, setProducts] = useProducts([]);  
  const navigate = useNavigate();  

 const handleRemove = (id) =>{
   const removeProduct = window.confirm(`Are you sure to remove this inventory ?`);
   if(removeProduct){
     const url = `http://localhost:5000/product/${id}`;
    fetch(url, {
      method : "DELETE"
    })
    .then(res => res.json())
    .then(data => {
      const remainingProducts = products.filter(product => product._id !== id)
      setProducts(remainingProducts)
    })
   }  

 }

  return (
    <div>
      <div className="container my-3">
        <h2 className="text-center text-info my-5">Manage Inventory Products</h2>
        <div className="table-responsive">
            <table className="table align-middle table-hover ">
            <thead className="table-dark">
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
                                <td>
                                <button className="oranged-btn" onClick={()=>handleRemove(product._id)}><AiOutlineDelete/></button>
                                  {/* <>
                                   Button trigger modal  
                                    <button type="button"  data-bs-toggle="modal" data-bs-target="#exampleModal">
                                      
                                    </button>
                                         Modal 
                                    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                      <div className="modal-dialog">
                                        <div className="modal-content">
                                          <div className="modal-header">
                                            <h5 className="modal-title text-danger" id="exampleModalLabel">Confirmation Message !!!</h5>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                          </div>
                                          <div className="modal-body">                                            
                                            Are you sure to remove {product.name} from inventory ?
                                          </div>
                                          <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>                                            
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </> */}
                                </td>
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
