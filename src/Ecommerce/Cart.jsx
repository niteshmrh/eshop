import React, { useContext, useEffect } from "react";
import "./Cart.css";
import { CartContext } from "../Context/CartContext";
import { textAlign } from "@mui/system";

function Cart(props) {
  const { cart, setCart } = useContext(CartContext);
  // console.log(cart);

  // useEffect(() => {
  //   const items = JSON.parse(localStorage.getItem("list"));
  //   console.log(items);
  //   if (items) {
  //     return items;
  //   } else {
  //     return [];
  //   }
  // }, [cart]);

  //  useEffect(() => {
  //   localStorage.setItem("list", JSON.stringify(cart));
  // }, [cart]);

  const handleIncBtn = (item) => {
    const findItem = cart.find((element) => element.id === item.id);
    if (findItem) {
      const updateProduct = cart.map((product) =>
        product.id === item.id ? { ...product, qty: product.qty + 1 } : product
      );
      setCart(updateProduct);
      localStorage.setItem("localCart", JSON.stringify(updateProduct));
    }
  };

  const handleDecBtn = (item) => {
    const findItem = cart.find((element) => element.id === item.id);
    if (findItem && findItem.qty === 1) {
      const updatedProduct = cart.filter((product) => product.id !== item.id);
      setCart(updatedProduct);
      localStorage.setItem("localCart", JSON.stringify(updatedProduct));
    } else {
      const updatedProduct = cart.map((product) =>
        product.id === item.id ? { ...product, qty: product.qty - 1 } : product
      );
      setCart(updatedProduct);
      localStorage.setItem("localCart", JSON.stringify(updatedProduct));
    }
  };

  const handleTotalAmount = () => {
    return cart.reduce((a, b) => a + b.price * b.qty, 0);
  };

  return (
    <div className="checkout-page">
      {cart.length > 0 ? (
        <div>
          {cart.map((product) => (
            <div className="checkout-lists" key={product.id}>
              <div className="checkout-image">
                <img src={product.image} alt="" />
              </div>
              <div className="checkout-desc">
                <h2>{product.title}</h2>
                <h4>
                  {" "}
                  {product.qty} X $ {product.price} = ${" "}
                  {(product.qty * product.price).toFixed(2)}
                </h4>
                <button
                  className="inc-dec-btn"
                  onClick={() => handleIncBtn(product)}
                >
                  +
                </button>
                <button
                  className="inc-dec-btn"
                  onClick={() => handleDecBtn(product)}
                >
                  -
                </button>
              </div>
            </div>
          ))}
          <h2>Total Amount : {handleTotalAmount().toFixed(2)}</h2>
        </div>
      ) : (
        <div>
          <h1 style={{ textAlign: "center" }}>Add item in cart</h1>
        </div>
      )}
    </div>
  );
}

export default Cart;
