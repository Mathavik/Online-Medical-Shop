import React from "react";
import { useOrderContext } from "../components/products/ordercontext/orderContext"; 
import "./myOrderPage.css";
import { Link } from "react-router-dom";

const MyOrderPage = () => {
    const { orders } = useOrderContext(); // Access orders from context
     // Function to handle "View" button click
     const viewOrderDetails = (order) => {
        alert(
            `Order Details:\n\nDate Ordered: ${order.dateOrdered}\nTotal Amount: $${order.totalAmount.toFixed(2)}\nStatus: ${order.status}`
        );
    };

    return (
        <div className="myorderpage-container">
            <div className="productPage-link">
                <Link to="/productPage">Products / Cart</Link>
            </div>
            <h1>Order List</h1>

            {/* Conditional rendering based on the orders array */}
            {orders.length > 0 ? (
                <table className="order-table">
                    <thead>
                        <tr>
                            <th>S.No</th>
                            <th>Date Ordered</th>
                            <th>Total Amount</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order, index) => (
                            <tr key={order.id}>
                                <td>{index + 1}</td>
                                <td>{order.dateOrdered}</td>
                                <td>${order.totalAmount.toFixed(2)}</td>
                                <td>
                                    <span className={`status ${order.status.toLowerCase()}`}>
                                        {order.status}
                                    </span>
                                </td>
                                <td>
                                    <button
                                        className="view-button"
                                        onClick={() => viewOrderDetails(order)}
                                    >
                                        View
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <div className="empty-orders">
                    <h2>Your order is empty</h2>
                    <p>
                        Browse our <Link to="/productPage">products</Link> and place your first order!
                    </p>
                </div>
            )}
        </div>
    );

   
};

export default MyOrderPage;
