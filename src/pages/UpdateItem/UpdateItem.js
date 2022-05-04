import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import useItem from "../../hooks/useItem";
import { AiOutlineRight } from 'react-icons/ai';

const UpdateItem = () => {
  const [item, setItem] = useItem();
  const { name, image, description, price, supplier, sold } = item;
  const navigate = useNavigate();
  const { id } = useParams();

  const handleDelivered = (id) => {
    const { quantity, ...rest} = item;
    const newQuantity = parseInt(quantity) - 1;
    const newItem = {...rest, quantity: newQuantity};
    setItem(newItem)
    const url = `http://localhost:5000/products/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newItem),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  const handleStockUpdate = (event) =>{
    event.preventDefault()
    const stockQuantity = event.target.quantity.value;
    const { quantity, ...rest} = item;
    const newQuantity = Number(quantity) + Number(stockQuantity);
    const newItem = {...rest, quantity: newQuantity};
    setItem(newItem)   
    const url = `http://localhost:5000/products/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newItem),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
      event.target.reset()
  }

  return (
    <div className="update-container">
      <div className="container my-3">
        <div className="row">
          <div className="col-12 col-lg-6 align-self-center py-3 my-3 rounded">
            <img src={image} alt="" className="img-fluid rounded-3 shadow" />
          </div>
          <div className="col-12 col-lg-6">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title fs-3">{name}</h5>
                <p className="card-text">
                  <span className="salmoned">Supplier</span> : {supplier}
                </p>
                <p className="card-text">
                  <span className="salmoned">ID</span> : {id}
                </p>
                <hr />
                <p className="card-text fs-5 fst-italic justified">
                  {description}
                </p>
                <p className="card-text">
                  <span className="salmoned">Price</span> : $ {price}
                </p>
                <p className="card-text">
                  <span className="salmoned">Sold</span> : {sold}
                </p>
                <p className="card-text">
                  <span className="salmoned">Quantity</span> : {item.quantity}
                </p>
              </div>
              <div className="card-footer">
                <div className="mb-3">
                  <form onSubmit={handleStockUpdate}>
                    <div className="mb-3">
                      <label htmlFor="quantity" className="form-label">
                        Update Quantity
                      </label>
                      <input
                        name="quantity"
                        type="number"
                        className="form-control"
                        id="exampleInput"
                        aria-describedby="Help"
                      />
                    </div>
                    <button type="submit" className="btn btn-outline-primary w-100">
                      Stock Update
                    </button>
                  </form>
                </div>
                <div>
                  <button
                    onClick={()=>handleDelivered(id)}
                    className="btn btn-outline-info w-100"
                  >
                    Delivered
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container text-end my-3">
          <button type='link' onClick={()=> navigate("/manageinventory")} className="oranged-btn">Manage Inventories <AiOutlineRight/></button>
      </div>
    </div>
  );
};

export default UpdateItem;
