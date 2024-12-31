import React from "react";
import { Link, useNavigate } from "react-router-dom";
import './successPage.css'; // Link to the CSS file
import Successimg from '../../images/thank.png'

const SuccessPage = () => {
  const navigate = useNavigate();

  const handleTrackYourOrder = () => {
    navigate("/myOrderPage");
  };

  return (
    <div className="success-page">
      <div className="breadcrumb">
        <Link to="/checkoutPage">/Checkout</Link>
      </div>
      <div className="success-container">
      <div className="success-content">
        <h1>Order Placed</h1>
        <h1>Successfully</h1>
        <div className="action-section">
          <button className="track-order-btn" onClick={handleTrackYourOrder}>
            Track your order
          </button>
        </div>
      </div>
      <div className="success-img">
      <img
          src={Successimg} // Replace with your success image path
          alt="Success"
          className="success-icon"
        />
        </div>
        </div>
    </div>
  );
};

export default SuccessPage;
