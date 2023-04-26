import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import "./CurrentProduct.css";
import StarIcon from "@mui/icons-material/Star";
import { CartContext } from "../Context/CartContext";

function CurrentProduct(props) {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { cart, setCart } = useContext(CartContext);

  const getData = () => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((res) => {
        // console.log("-------------------", res);
        setProduct(res);
      });
  };
  // console.log(product);
  useEffect(() => {
    getData();
  }, []);

  const handleAddToCart = async (item) => {
    const findItem = cart.find((element) => element.id === item.id);
    if (!findItem) {
      const update = [...cart, { ...item, qty: 1 }];
      await setCart([...cart, { ...item, qty: 1 }]);
      localStorage.setItem("localCart", JSON.stringify(update));
    } else {
      alert("Go To Cart");
    }
  };
  console.log(cart);

  if (!product) {
    return <p style={{ fontSize: "50px", textAlign: "center" }}>Loading...</p>;
  }
  return (
    <div>
      <div>
        <div className="frame">
          <div className="two-half-left">
            <div className="image-size">
              <img src={`${product.image}`} className="item-image" />
            </div>
          </div>
          <div className="two-half-right">
            <div>
              <h1 style={{ color: "GrayText" }}>{product.category}</h1>
            </div>
            <div>
              <h1>{product.catageories}</h1>
            </div>
            <div>
              <h1
                style={{ fontWeight: "lighter", fontSize: "-webkit-xxx-large" }}
              >
                {product.title}
              </h1>
            </div>
            <div>
              <h1 style={{ fontSize: "1.25rem" }}>
                Rating {product.rating.rate} <StarIcon />
              </h1>
            </div>
            <div>
              <h1>$ {product.price}</h1>
            </div>
            <div>
              <h1 style={{ fontWeight: "lighter", fontSize: "24px" }}>
                {product.description}
              </h1>
            </div>
            <div>
              <button className="btn" onClick={() => handleAddToCart(product)}>
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CurrentProduct;
