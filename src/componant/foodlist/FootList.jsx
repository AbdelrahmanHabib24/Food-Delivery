/* eslint-disable react/prop-types */
import { useContext } from "react";
import { assets } from "../../assets/assets";
import "./FoodList.css";
import { StoreContext } from "../statecontext/statecontext";

const FootList = ({ id, description, name, price, image }) => {
  const { addToCart, removetoCart, cartItems } = useContext(StoreContext);

  return (
    <div className="food-list" id={`food-item-${id}`}>
      <div className="food-list-item-img-container">
        <img className="item-img" src={image} alt={name} />
        {!cartItems[id] ? (
          <img
            className="add"
            onClick={() => addToCart(id)}
            src={assets.add_icon_white}
            alt="Add to cart"
          />
        ) : (
          <div className="food-item-counter">
            <img
              onClick={() => removetoCart(id)}
              src={assets.remove_icon_red}
              alt="Remove"
            />
            <p>{cartItems[id]}</p>
            <img
              onClick={() => addToCart(id)}
              src={assets.add_icon_green}
              alt="Add"
            />
          </div>
        )}
      </div>
      <div className="food-list-info">
        <div className="food-list-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="Rating" />
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
