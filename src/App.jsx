/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */

import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./componant/navbar";
import Placeorder from "./pages/placeorder/Placeorder";
import Cart from "./pages/Cart/Cart";
import Home from "./pages/Home/Home";
import Footer from "./componant/footer/Footer";
import LoginPopup from "./componant/LoginPopup/LoginPopup";
import { useState } from "react";

function App() {
  const[showLogin ,setShowLogin] = useState(false)
  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
    <div className="app">
      <Navbar  setShowLogin = {setShowLogin} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Cart" element={<Cart/>} />
        <Route path="/order" element={<Placeorder />} />
      </Routes>
    </div>
    <Footer/>
    </>
  );
}
export default App;
