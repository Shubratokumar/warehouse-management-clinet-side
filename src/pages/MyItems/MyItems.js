import React, { useEffect, useState } from "react";
import auth from "./../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import axios from "axios";
import toast from "react-hot-toast";
import { AiOutlineDelete } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";

const MyItems = () => {
  const [products, setProducts] = useState([]);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    const email = user?.email;
    // using IIFE
    (async () => {
      const url = `https://peaceful-basin-80152.herokuapp.com/product?email=${email}`;
      try {
        const { data } = await axios.get(url, {
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        });
        setProducts(data);
      } catch (error) {
        if (error.response.status === 401 || error.response.status === 403) {
          toast.error(error.message);
          signOut(auth);
          navigate("/login");
        }
      }
    })();
  }, [user, navigate]);

  const handleRemove = (id) => {
    const removeProduct = window.confirm(
      `Are you sure to remove this inventory ?`
    );
    if (removeProduct) {
      const url = `https://peaceful-basin-80152.herokuapp.com/product/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          const remainingProducts = products.filter(
            (product) => product._id !== id
          );
          setProducts(remainingProducts);
          toast.success("Successfully item removed.");
        });
    }
  };

  return (
    <div>
      <div className="container my-3">
        <h2 className="text-center text-info my-5">My Products</h2>
        <div className="table-responsive">
          <table className="table align-middle table-hover ">
            <thead className="table-dark">
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Image</th>
                <th scope="col">Supplier</th>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
                <th scope="col">Update</th>
                <th scope="col">Remove</th>
              </tr>
            </thead>
            <tbody>
              {products?.map((product) => {
                return (
                  <tr key={product._id} className="col align-self-center">
                    <td>{product.name}</td>
                    <td className="w-25 h-50">
                      <img className="w-50" src={product.image} alt="" />
                    </td>
                    <td>{product.supplier}</td>
                    <td>$ {product.price}</td>
                    <td>{product.quantity}</td>
                    <td>
                      <button
                        className="oranged-btn"
                        onClick={() => navigate(`/inventory/${product._id}`)}
                      >
                        Update stock
                      </button>
                    </td>
                    <td>
                      <button
                        className="oranged-btn"
                        onClick={() => handleRemove(product._id)}
                      >
                        <AiOutlineDelete />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyItems;
