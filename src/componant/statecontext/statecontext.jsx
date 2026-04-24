/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { food_list } from "../../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItem] = useState({});

  const addToCart = (itemId) => {
    if (!cartItems[itemId]) {
      setCartItem((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };

  const removetoCart = (itemId) => {
    if (cartItems[itemId] > 1) {
      setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    } else {
      // Remove item completely when count reaches 0
      setCartItem((prev) => {
        const updated = { ...prev };
        delete updated[itemId];
        return updated;
      });
    }
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        const iteminfo = food_list.find((product) => product._id === item);
        if (iteminfo) {
          totalAmount += iteminfo.price * cartItems[item];
        }
      }
    }
    return totalAmount;
  };

  const contextValue = {
    food_list,
    cartItems,
    setCartItem,
    addToCart,
    removetoCart,
    getTotalCartAmount,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;