import { useState, useEffect } from "react";
import axios from "axios";

const useProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    // Load data by useing IIFE
    (async () => {
      const { data } = await axios.get(
        `https://peaceful-basin-80152.herokuapp.com/products`
      );
      setProducts(data);
    })();
  }, []);
  return [products, setProducts];
};

export default useProducts;
