import React, { createContext, useContext, useState } from 'react';

const OrderContext = createContext();

export const useOrderContext = () => {
    return useContext(OrderContext);
};

export const OrderProvider = ({ children }) => {
    const [orders, setOrders] = useState([]);

    const addOrder = (order) => {
        setOrders((prevOrders) => [...prevOrders, order]);
    };

    const clearOrders = () => {
        setOrders([]); // Clears the orders
    };

    return (
        <OrderContext.Provider value={{ orders, addOrder, clearOrders }}>
            {children}
        </OrderContext.Provider>
    );
};
