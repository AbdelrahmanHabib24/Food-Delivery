/* eslint-disable react/prop-types */
import "./navbar.css";
import { assets } from "../assets/assets";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { StoreContext } from "./statecontext/statecontext";

const Navbar = ({ setShowLogin }) => {
  const { getTotalCartAmount } = useContext(StoreContext);
  const [activeNav, setActiveNav] = useState("Home");

  return (
    <div className="navbar">
      <div>
        <Link to="/">
          <img className="navbar-logo" src={assets.logo} alt="Logo" />
        </Link>
      </div>
      <ul className="navbar-menu">
        <Link
          to="/"
          onClick={() => setActiveNav("Home")}
          className={activeNav === "Home" ? "active" : ""}
        >
          Home
        </Link>
        <a
          href="#food-display"
          onClick={() => setActiveNav("Menu")}
          className={activeNav === "Menu" ? "active" : ""}
        >
          Menu
        </a>
        <a
          href="#app-download"
          onClick={() => setActiveNav("mobile-app")}
          className={activeNav === "mobile-app" ? "active" : ""}
        >
          Mobile App
        </a>
        <a
          href="#footer"
          onClick={() => setActiveNav("About")}
          className={activeNav === "About" ? "active" : ""}
        >
          About
        </a>
      </ul>
      <div className="navbar-right">
        <div className="basket-icon">
          <img src={assets.search_icon} alt="Search" />
        </div>
        <div className="nav-bar-search">
          <Link to="/cart">
            <img src={assets.basket_icon} alt="Cart" />
          </Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>
        <button onClick={() => setShowLogin(true)}>Sign In</button>
      </div>
    </div>
  );
};

export default Navbar;
