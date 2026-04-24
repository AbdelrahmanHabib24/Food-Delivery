import { useContext, useState } from "react";
import "./Placeorder.css";
import { StoreContext } from "../../componant/statecontext/statecontext";
import { useNavigate } from "react-router-dom";

const Placeorder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);
  const navigation = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: connect to payment gateway
    navigation("/order");
  };

  const subtotal = getTotalCartAmount();
  const deliveryFee = subtotal === 0 ? 0 : 2;
  const total = subtotal === 0 ? 0 : subtotal + deliveryFee;

  return (
    <form className="place-order" onSubmit={handleSubmit}>
      {/* ── LEFT: Delivery Info ── */}
      <div className="place-order-left">
        <p className="title">Delivery Information</p>

        <div className="multi-fields">
          <div className="input-group">
            <label htmlFor="firstName">First Name</label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              placeholder="John"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              placeholder="Doe"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="input-group">
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="john@example.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="street">Street Address</label>
          <input
            id="street"
            name="street"
            type="text"
            placeholder="123 Main Street"
            value={formData.street}
            onChange={handleChange}
            required
          />
        </div>

        <div className="multi-fields">
          <div className="input-group">
            <label htmlFor="city">City</label>
            <input
              id="city"
              name="city"
              type="text"
              placeholder="New York"
              value={formData.city}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="state">State</label>
            <input
              id="state"
              name="state"
              type="text"
              placeholder="NY"
              value={formData.state}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="multi-fields">
          <div className="input-group">
            <label htmlFor="zipCode">Zip Code</label>
            <input
              id="zipCode"
              name="zipCode"
              type="text"
              placeholder="10001"
              value={formData.zipCode}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="country">Country</label>
            <input
              id="country"
              name="country"
              type="text"
              placeholder="United States"
              value={formData.country}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="input-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+1 (555) 000-0000"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      {/* ── RIGHT: Order Summary ── */}
      <div className="place-order-right">
        <div className="order-summary">
          <p className="summary-title">Order Summary</p>

          <div className="summary-rows">
            <div className="summary-row">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="summary-row">
              <span>Delivery Fee</span>
              <span className={deliveryFee === 0 ? "free-tag" : ""}>
                {deliveryFee === 0 ? "FREE" : `$${deliveryFee.toFixed(2)}`}
              </span>
            </div>
            <hr className="summary-divider" />
            <div className="summary-row total-row">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>

          {subtotal === 0 && (
            <p className="empty-cart-warning">
              ⚠ Your cart is empty. Please add items before checking out.
            </p>
          )}

          <button
            type="submit"
            className="pay-btn"
            disabled={subtotal === 0}
          >
            Proceed to Payment →
          </button>

          <div className="secure-badge">
            <span>🔒</span>
            <p>Secure & encrypted payment</p>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Placeorder;
