import { useState, useEffect } from 'react';
import axios from "axios";

const useProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        // Load data by useing IIFE
        (async () => {
          const { data } = await axios.get(`http://localhost:5000/products`);
          setProducts(data);
        })();
      }, []);
    return [products, setProducts]
};

export default useProducts;