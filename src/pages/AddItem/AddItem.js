import React from "react";
import './Additem.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';
import  axios  from 'axios';
import { toast } from 'react-hot-toast';

const AddItem = () => {
  const [user ] = useAuthState(auth);


  const handleAddInventory = (e) =>{
      e.preventDefault()
      const product = {
          email: user?.email,
          name: e.target.name.value,
          description: e.target.description.value,
          supplier: e.target.supplier.value,
          price: e.target.price.value,
          quantity: e.target.quantity.value,
          sold: e.target.sold.value,
          image: e.target.image.value
      }
      console.log(product)
      axios.post(`http://localhost:5000/product`, product)
      .then(response => {
        const {data} = response;
        if(data.insertedId){
          toast.success("Successfully added a new inventory!!!")
        }
      })
      
  }
  return (
    <div className="add-container py-5">
      <div className="container">
        <h2 className="text-center text-white my-5">Add A New Inventory</h2>
        <div className="form-container w-50 mx-auto my-4 shadow p-4 rounded">
          <form onSubmit={handleAddInventory}>
            <div className="mb-3">
              <label className="form-label">
                Your Email
              </label>
              <input
                type="text"
                value={user?.email}
                className="form-control"
                readOnly
                disabled
              />
            </div>
            <div className="mb-3">
              <label className="form-label">
                Product Name
              </label>
              <input
                type="text"
                name="name"
                className="form-control"
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">
                Description
              </label>
              <textarea
                type="text"
                name="description"
                className="form-control"
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">
                Supplier Name
              </label>
              <input
                type="text"
                name="supplier"
                className="form-control"
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">
                Price
              </label>
              <input
                type="number"
                name="price"
                className="form-control"
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">
                Quantity
              </label>
              <input
                type="number"
                name="quantity"
                className="form-control"
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">
                Sold
              </label>
              <input
                type="number"
                name="sold"
                className="form-control"
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">
                Image Url
              </label>
              <input
                type="text"
                name="image"
                className="form-control"
                required
              />
            </div>
            <div className="text-end me-5">
              <button type="submit" className="white-btn">
                Add Inventory
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddItem;
