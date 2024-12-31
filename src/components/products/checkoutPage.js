import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useOrderContext } from "./ordercontext/orderContext";
import "./checkoutPage.css";
import { Link } from "react-router-dom";

const CheckoutPage = () => {
  const location = useLocation();
  const { grandTotal } = location.state || { grandTotal: 0 }; // Fallback for safety
  const navigate = useNavigate();
  const { addOrder } = useOrderContext(); // Context to manage orders

  const handlePlaceOrder = () => {
    const newOrder = {
      id: Date.now(),
      dateOrdered: new Date().toLocaleString(),
      totalAmount: grandTotal,
      status: "Pending",
      action: "View",
    };
    addOrder(newOrder); // Save the order details
    navigate("/successPage"); // Navigate to success page
  };

  return (
    <div className="checkout-page">
      <div className="breadcrumb">
        <Link to="/cartPage">Cart / Checkout</Link>
      </div>

      <div className="checkout-content">
        <h1>Checkout</h1>
        <p className="grand-total">
          Your grand total is: <strong>${grandTotal.toFixed(2)}</strong>
        </p>
        <textarea
          className="address-textarea"
          placeholder="Enter your shipping address"
        ></textarea>

        <div className="checkout-button-container">
          <button className="place-order-button" onClick={handlePlaceOrder}>
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
