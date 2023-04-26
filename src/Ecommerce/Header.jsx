import React, { useContext } from "react";
import "./Header.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import LoginIcon from "@mui/icons-material/Login";
import { CartContext } from "../Context/CartContext";

function Header(props) {
  const navigate = useNavigate();
  const { cart } = useContext(CartContext);
  return (
    <div className="header">
      <div className="logo">
        <NavLink to="/" className="logo-text">
          E-MART
        </NavLink>
      </div>
      <div className="middle">
        <NavLink to="/" className="middle-button">
          Home
        </NavLink>
        <NavLink to="/product" className="middle-button">
          Product
        </NavLink>
        <NavLink to="/contact" className="middle-button">
          Contact
        </NavLink>
        <NavLink to="/about" className="middle-button">
          About Us
        </NavLink>
      </div>
      <div className="login-act">
        <button className="login-activity-login" onClick={() => navigate("/")}>
          <LoginIcon></LoginIcon>
          <div className="letter-login">Login</div>
        </button>
        <button
          className="login-activity-registration"
          onClick={() => navigate("/registration")}
        >
          <HowToRegIcon></HowToRegIcon>
          <div className="letter-registration">Registration</div>
        </button>
        <NavLink to="/cart">
          <button className="login-activity-cart">
            <ShoppingCartIcon></ShoppingCartIcon>
            <div className="letter-cart">Cart({cart.length})</div>
          </button>
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
