/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import "./navbar.css"

import { assets } from "../assets/assets"
import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { StoreContext } from "./statecontext/statecontext"
const Navbar = ({setShowLogin}) => {
    const {getTotalCartAmount} = useContext(StoreContext)

    const[state ,setstate] = useState("Home")
  return (
    <div className="navbar">
        <div >
           <Link to= '/'> <img className="navbar-logo"src={assets.logo} alt="" /> </Link>
        </div>
            <ul className="navbar-menu">
                <Link to='/' onClick = {()=>{setstate("Home")}} className ={state === "Home" ? "active" :""}>Home </Link>
                <a href="#explore-Menu-list" onClick = {()=>{setstate("Menu")}} className ={state === "Menu" ? "active" :""}>Menu</a>
                <a href="#app-download" onClick = {()=>{setstate("mobile-app")}} className ={state === "mobile-app" ? "active" :""}>mobile-app</a>
                <a href="#footer" onClick = {()=>{setstate("About")}} className ={state === "About" ? "active" :""}>about</a>
            </ul>
             
        <div className="navbar-right">
            <div className="basket-icon">
            <img src={assets.search_icon} alt="" />

            </div>
            <div className="nav-bar-search">
            <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>

                <div className={getTotalCartAmount() ===0?"":"dot"}></div>
            </div>
            <button onClick={()=>setShowLogin(true)} >signin</button>
        </div>
      
    </div>
  )
}

export default Navbar
