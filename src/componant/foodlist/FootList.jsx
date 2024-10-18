/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import './FoodList.css'
import { StoreContext } from "../statecontext/statecontext";

const FootList = ({ id, description, name, price, image }) => {
  const{addToCart,removetoCart,cartItems} = useContext(StoreContext)
  return (  
    <div className="food-list" id="food-list">  
      <div className="food-list-item-img-container">  
        <img className="item-img" src={image} alt="" />  
        {!cartItems [id]?(   
          <img  
            className="add"  
            onClick={() => addToCart(id)}  
            src={assets.add_icon_white}  
            alt=""  
          />  
        ):(   
          <div className="food-item-counter">  


            <img  
              onClick={() => removetoCart(id)}  
              src={assets.remove_icon_red}  
              alt=""  
            />  
            <p>{cartItems[id]}</p>  
            <img  
              onClick={() => addToCart(id)}  
              src={assets.add_icon_green}  
              alt=""  
            />  
            
          </div>  
        )}  
      </div>  
      <div className="food-list-info">  
        <div className="food-list-rating">  
          <p>{name}</p>  
          <img src={assets.rating_starts} alt="" />  
        </div>  
        <div>  
          <p className="food-list-description">{description}</p>  
          <p className="food-list-price">${price}</p>  
        </div>  
      </div>  
    </div>  
  );  
};  


export default FootList;
