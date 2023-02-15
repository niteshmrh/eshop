import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = (props) => {
  const [cart, setCart] = useState([]);

  const state = {
    cart,
    setCart,
  };

  return (
    <CartContext.Provider value={state}>{props.children}</CartContext.Provider>
  );
};
