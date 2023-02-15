import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { CartContext } from "../context/CartContext";

function ProductDetails(props) {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { cart, setCart } = useContext(CartContext);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`).then((response) => {
      setProduct(response.data);
    });
  }, []);

  console.log(cart);

  const handleAddCart = (item) => {
    const findItem = cart.find((element) => element.id === item.id);
    if (!findItem) {
      setCart([...cart, { ...item, qty: 1 }]);
    } else {
      alert("Go To Cart");
    }
  };

  if (!product) {
    return <p>Loading...</p>;
  }
  return (
    <div className="product-details">
      <div className="product-image">
        <img src={`${product.image}`} alt="" />
      </div>
      <div className="product-detail-content">
        <p>{product.category}</p>
        <br />
        <h3>{product.title}</h3>
        <br />
        <h1>${product.price}</h1>
        <br />
        <p>{product.description}</p>
        <br />
        <button className="btn" onClick={() => handleAddCart(product)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductDetails;
