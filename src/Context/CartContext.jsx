import React, { createContext, useState, useEffect } from "react";
export const CartContext = createContext();

// const getCartList = () => {
//   const items = JSON.parse(localStorage.getItem("list"));
//   console.log(items);
//   if (items) {
//     return JSON.parse(localStorage.getItem("list"));
//   } else {
//     return [];
//   }
// };



export const CartProvider = (props) => {
  const [cart, setCart] = useState([]); /*getCartList()*/

  const state = {
    cart,
    setCart,
  };
  
  // useEffect(() => {
  //   localStorage.setItem("list", JSON.stringify(cart));
  // }, [cart]);

  // fetching the data from local storage
  
  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem("localCart"));
    if (cartData) {
      setCart(cartData);
    } else {
      setCart([]);
    }
  }, []);

  return (
    <CartContext.Provider value={state}>{props.children}</CartContext.Provider>
  );
};
