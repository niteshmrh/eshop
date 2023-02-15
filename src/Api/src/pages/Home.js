import React, { useEffect, useState } from "react";
import ProductItem from "../components/ProductItem";
import axios from "axios";

function Home(props) {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      setProduct(response.data);
    });
  }, []);

  return (
    <div className="section">
      <h2>Our Products</h2>
      <div className="product-wrapper">
        {product.map((item) => (
          <ProductItem key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
}

export default Home;
