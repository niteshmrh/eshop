import React from "react";
// import Website from './Website/Website';
import Login1 from "./LoginPages/Login1";
import Home from "./Ecommerce/Home";
import { Routes, Route } from "react-router-dom";
import Header from "./Ecommerce/Header";
import Product from "./Ecommerce/CurrentProduct";
import Contact from "./Ecommerce/Contact";
import About from "./Ecommerce/About";
import RegistrationForm from "./Registration/RegistrationForm";
import Allproduct from "./Ecommerce/Allproduct";
import CurrentProduct from "./Ecommerce/CurrentProduct";
import PageNotFound from "./Ecommerce/PageNotFound";
import { CartProvider } from "./Context/CartContext";
import Cart from "./Ecommerce/Cart";


function App(props) {
  return (
    <CartProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Login1 />}></Route>
        <Route path="/home" element={<Home type="home" />}></Route>
        <Route path="/contact" element={<Contact type="contact" />}></Route>
        <Route path="/about" element={<About type="about" />}></Route>
        <Route path="/registration" element={<RegistrationForm type="registration" />}></Route>
        <Route path="/product" element={<Allproduct type="product" />}></Route>
        <Route path="product/:id" element={<CurrentProduct type="current-product" />}></Route>
        <Route path="cart" element={<Cart type="cart"/>}></Route>
        <Route path="*" element={<PageNotFound/>}></Route>
        {/* <Route path="product">
          <Route index element={<Allproduct type="product"/>}></Route>
          <Route path=":id" element={<CurrentProduct type="current-product" />}></Route>
        </Route> */}

        {/* <Route path="product" element={<Allproduct />} />
        <Route path="currentproduct/:id" element={<CurrentProduct />} /> */}

        {/* <Route path="/product">
          <Route index element={<Allproduct type="product"/>} />
          <Route path=":id" element={<CurrentProduct type="current-product" />} />
        </Route> */}
        
      </Routes>
    </CartProvider>
  );
}

export default App;
