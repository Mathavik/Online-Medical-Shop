import React, { useState, useEffect } from "react";
import { useCart } from "../components/products/CartContext";
import "./cartPage.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import CancelIcon from "@mui/icons-material/Cancel";

const CartPage = () => {
    const { cart, removeFromCart } = useCart();
    const [quantities, setQuantities] = useState(cart.map(() => 1));
    const [grandTotal, setGrandTotal] = useState(0);

    useEffect(() => {
        setQuantities(cart.map(() => 1));
    }, [cart]);

    useEffect(() => {
        const total = cart.reduce((sum, item, index) => {
            return sum + item.price * quantities[index];
        }, 0);
        setGrandTotal(total);
    }, [cart, quantities]);

    const handleIncrement = (index) => {
        setQuantities((prevQuantities) => {
            const newQuantities = [...prevQuantities];
            newQuantities[index]++;
            return newQuantities;
        });
    };

    const handleDecrement = (index) => {
        setQuantities((prevQuantities) => {
            const newQuantities = [...prevQuantities];
            if (newQuantities[index] > 1) {
                newQuantities[index]--;
            }
            return newQuantities;
        });
    };

    const navigate = useNavigate();

    const handleGoToProduct = () => {
        navigate("/productPage");
    };

    const handleRemoveItem = (index) => {
        removeFromCart(cart[index].id);
    };

    const handleCheckout = () => {
        navigate("/checkoutPage", { state: { grandTotal } });
    };

    return (
        <div className="cart-page-container">
            <div className="productPage-link">
                <Link to="/productPage">Products / cart</Link>
            </div>
            <h1 className="cart-title">Cart List</h1>
            {cart.length === 0 ? (
                <div className="empty-content">
                    <p className="cart-empty-message">Your cart is empty.</p>
                    <div className="cart-empty-button">
                    <button onClick={handleGoToProduct} className="go-to-product-button">
                        GO TO PRODUCTS
                    </button>
                    </div>
                </div>
            ) : (
                <div className="cart-container">
                    <ul className="cart-item-list">
                        {cart.map((item, index) => (
                            <li key={index} className="cart-item">
                                <img
                                    src={item.image || "default-image.jpg"}
                                    alt={item.medicienName}
                                    className="cart-item-image"
                                />
                                <div className="cart-item-flex">
                                    <div className="cart-item-details">
                                        <h6 className="cart-item-title">{item.medicienName}</h6>
                                        <h6>Brand: {item.brand}</h6>
                                        <h6>Type: {item.type}</h6>
                                        <h6>
                                            Price:
                                            <span className="cart-item-price"> ${item.price}</span>
                                        </h6>
                                    </div>
                                    <div className="quantity-controls">
                                        <button
                                            className="decrement-button"
                                            onClick={() => handleDecrement(index)}
                                        >
                                            -
                                        </button>
                                        <span className="quantity-value">{quantities[index]}</span>
                                        <button
                                            className="increment-button"
                                            onClick={() => handleIncrement(index)}
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                                <p className="item-total">
                                    <strong>MRP</strong> $
                                    {(item.price * quantities[index]).toFixed(2)}
                                </p>
                                <button
                                    className="remove-button"
                                    onClick={() => handleRemoveItem(index)}
                                >
                                    <CancelIcon />
                                </button>
                            </li>
                        ))}
                    </ul>
                    <div className="cart-summary">
                        <h6>Grand Total: ${grandTotal.toFixed(2)}</h6>
                    </div>
                    <button className="cart-checkout-button" onClick={handleCheckout}>
                        Checkout
                    </button>
                </div>
            )}
        </div>
    );
};

export default CartPage;
