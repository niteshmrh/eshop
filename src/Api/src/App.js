import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Header from "./components/Header";
import Demo from "./components/Demo";
import Checkout from "./pages/Checkout";
import { CartProvider } from "./context/CartContext";

function App(props) {
  return (
    <CartProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path=":id" element={<ProductDetails />} />
        <Route path="cart" element={<Cart />} />
        <Route path="checkout" element={<Checkout />} />
      </Routes>
      {/* <Demo /> */}
    </CartProvider>
  );
}

export default App;
