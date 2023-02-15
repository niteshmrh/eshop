import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Checkout(props) {
  const { cart, setCart } = useContext(CartContext);

  console.log(cart);

  const handleIncrementItem = (item) => {
    const findItem = cart.find((element) => element.id === item.id);
    if (findItem) {
      const updatedProduct = cart.map((product) =>
        product.id === item.id ? { ...product, qty: product.qty + 1 } : product
      );
      setCart(updatedProduct);
    }
  };

  const handleDecrementItem = (item) => {
    const findItem = cart.find((element) => element.id === item.id);
    if (findItem && findItem.qty === 1) {
      const updatedProduct = cart.filter((product) => product.id !== item.id);
      setCart(updatedProduct);
    } else {
      const updatedProduct = cart.map((product) =>
        product.id === item.id ? { ...product, qty: product.qty - 1 } : product
      );
      setCart(updatedProduct);
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
                <br />
                <h4>
                  {product.qty} X ${product.price} = $
                  {product.qty * product.price}
                </h4>
                <br />
                <div>
                  <button
                    className="inc-dec=btn"
                    onClick={() => handleDecrementItem(product)}
                  >
                    -
                  </button>
                  <button
                    className="inc-dec=btn"
                    onClick={() => handleIncrementItem(product)}
                  >
                    +
                  </button>
                  <br />
                </div>
              </div>
            </div>
          ))}

          <br />
          <br />
          <h3>Total Price: {handleTotalAmount().toFixed(2)}</h3>
        </div>
      ) : (
        <div>
          <h2>No Data Found!!!</h2>
        </div>
      )}
    </div>
  );
}

export default Checkout;
