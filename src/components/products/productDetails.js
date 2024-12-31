import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useCart } from "./CartContext"; // Import Cart Context
import "./productDetails.css";

const ProductDetails = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { addToCart } = useCart(); // Get addToCart from context
    const product = location.state?.product;

    // Check if the user is logged in
    const loggedInUser = localStorage.getItem("registeredUser");

    if (!product) {
        navigate("/"); // Redirect to home if no product data is available
        return null;
    }

    const handleAddCart = () => {
        if (loggedInUser) {
            // User is logged in, proceed with adding to cart
            addToCart(product);
            navigate("/cartPage"); // Navigate to cart page
        } else {
            // User not logged in, redirect to login and save the product data
            alert("You need to log in to add products to the cart.");
            navigate("/loginPage", { state: { redirectTo: "/productDetails", product } });
        }
    };

    return (
        <div className="product-details-container">
            <div className="productdetails-content">
                <img
                    src={product.image}
                    alt={product.medicienName}
                    className="product-details-image"
                />
                <div className="product-details">
                    <h3>{product.medicienName}</h3>
                    <p>
                        <strong>Category:</strong> {product.category}
                    </p>
                    <p>
                        <strong>Description:</strong> {product.description || "N/A"}
                    </p>
                    <p>
                        <strong>Price: $</strong> {product.price || "N/A"}
                    </p>
                </div>
                <div className="add-cart-button">
                    <button onClick={handleAddCart}>Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
