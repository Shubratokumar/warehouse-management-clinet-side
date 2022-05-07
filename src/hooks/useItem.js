import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const useItem = () => {
  const [item, setItem] = useState({});
  const { id } = useParams();
  useEffect(() => {
    const url = `https://peaceful-basin-80152.herokuapp.com/products/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, [id]);
  return [item, setItem];
};

export default useItem;
