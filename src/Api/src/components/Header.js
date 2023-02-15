import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

function Header(props) {
  const { cart } = useContext(CartContext);

  return (
    <header>
      <div className="header-left">
        <Link to="/">
          <h2>E-Shop</h2>
        </Link>
      </div>
      <div className="header-right">
        <Link to="/checkout">
          <p>Cart({cart.length})</p>
        </Link>
      </div>
    </header>
  );
}

export default Header;
