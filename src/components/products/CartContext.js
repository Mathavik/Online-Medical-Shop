import React, { createContext, useContext, useState } from "react";

// Create the Cart Context
const CartContext = createContext();

// Provide Cart Context
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    // Add to Cart function
    const addToCart = (item) => {
        setCart((prevCart) => {
            // Check if item is already in the cart
            const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);

            if (existingItem) {
                // If already in the cart, increase quantity
                return prevCart.map((cartItem) =>
                    cartItem.id === item.id
                        ? { ...cartItem, quantity: cartItem.quantity + 1 }
                        : cartItem
                );
            } else {
                // Otherwise, add the item with initial quantity
                return [...prevCart, { ...item, quantity: 1 }];
            }
        });
    };

    // Remove from Cart function
    const removeFromCart = (id) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    };

    return (
        <CartContext.Provider value={{ cart, setCart, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};

// Hook to use Cart Context
export const useCart = () => useContext(CartContext);
