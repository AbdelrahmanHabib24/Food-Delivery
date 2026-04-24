/* eslint-disable react/jsx-key */
import { StoreContext } from "../../componant/statecontext/statecontext";
import "./cart.css";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { food_list, cartItems, removetoCart, getTotalCartAmount } =
    useContext(StoreContext);
  const navigation = useNavigate();

  const subtotal = getTotalCartAmount();
  const deliveryFee = subtotal === 0 ? 0 : 2;
  const total = subtotal === 0 ? 0 : subtotal + deliveryFee;

  return (
    <div className="cart">
      {subtotal === 0 ? (
        <div className="cart-empty">
          <h2>Your cart is empty</h2>
          <p>Looks like you haven't added anything to your cart yet.</p>
          <button onClick={() => navigation("/")} className="continue-btn">
            Explore Menu
          </button>
        </div>
      ) : (
        <>
          <div className="cart-items-container">
            <div className="cart-items-title">
              <p>Items</p>
              <p>Title</p>
              <p>Price</p>
              <p>Quantity</p>
              <p>Total</p>
              <p>Remove</p>
            </div>
            <div className="cart-items-list">
              {food_list.map((item) => {
                if (cartItems[item._id] > 0) {
                  return (
                    <div key={item._id} className="cart-items-title cart-items-item">
                      <img src={item.image} alt={item.name} className="item-image" />
                      <p className="item-name">{item.name}</p>
                      <p className="item-price">${item.price.toFixed(2)}</p>
                      <p className="item-qty">{cartItems[item._id]}</p>
                      <p className="item-total">${(item.price * cartItems[item._id]).toFixed(2)}</p>
                      <button
                        onClick={() => removetoCart(item._id)}
                        className="cross-btn"
                        aria-label="Remove item"
                      >
                        ×
                      </button>
                    </div>
                  );
                }
                return null;
              })}
            </div>
          </div>
          <div className="cart-bottom">
            <div className="cart-total">
              <h2>Cart Totals</h2>
              <div className="cart-total-content">
                <div className="cart-total-details">
                  <p>Subtotal</p>
                  <p>${subtotal.toFixed(2)}</p>
                </div>
                <hr />
                <div className="cart-total-details">
                  <p>Delivery Fee</p>
                  <p className={deliveryFee === 0 ? "free-delivery" : ""}>
                    {deliveryFee === 0 ? "FREE" : `$${deliveryFee.toFixed(2)}`}
                  </p>
                </div>
                <hr />
                <div className="cart-total-details total-row">
                  <p>Total</p>
                  <p>${total.toFixed(2)}</p>
                </div>
              </div>
              <button 
                className="checkout-btn"
                onClick={() => navigation("/order")}
              >
                PROCEED TO CHECKOUT
              </button>
            </div>

            <div className="cart-promocode">
              <div>
                <p>If you have a promo code, enter it here</p>
                <div className="cart-promocode-input">
                  <input type="text" placeholder="Promo code" />
                  <button>Apply</button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
