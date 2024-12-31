import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import FaHome from "@mui/icons-material/Home";
import FaBox from "@mui/icons-material/Inventory2";
import FaShoppingCart from "@mui/icons-material/ShoppingCart";
import FaSignInAlt from "@mui/icons-material/Login";
import FaUserCircle from "@mui/icons-material/AccountCircle";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { useOrderContext } from "../components/products/ordercontext/orderContext"; 
import { useUserContext } from '../components/products/ordercontext/userContext';
import "./header.css";
import logoimg from "../images/logo.png";

const Header = () => {
  const { loggedInUser, logout } = useUserContext();
  const location = useLocation();
  const navigate = useNavigate();
  // const loggedInUser = location.state?.userName; // Check if a user is logged in
  const { clearOrders } = useOrderContext(); // Get the function to clear orders from context

  const [dropdownOpen, setDropdownOpen] = useState(false); // State to toggle dropdown
  const [navOpen, setNavOpen] = useState(false); // State to toggle navbar on mobile

  const handleMouseEnter = () => {
    setDropdownOpen(true); // Show dropdown on hover
  };

  const handleMouseLeave = () => {
    setDropdownOpen(false); // Hide dropdown when not hovering
  };

  const handleLogout = () => {
    localStorage.removeItem("registeredUser"); // Remove user from localStorage
    clearOrders();  // Clear orders from the context or state
    navigate("/homePage"); // Navigate to login page
  };

  const handleNavigate = (path) => {
    navigate(path);
    setNavOpen(false); // Close navbar after selection on mobile
  };

  return (
    <div>
      <nav className="navbar">
        <div className="container-fluid1">
          <img src={logoimg} className="logo" alt="Logo" />
          <h4>Medical</h4>
        </div>

        {/* Toggle Button for Mobile */}
        <button className="navbar-toggle" onClick={() => setNavOpen(!navOpen)}>
          &#9776;
        </button>

        {/* Navigation Menu */}
        <ul className={`ul-navbar-nav ${navOpen ? 'open' : ''}`}>
  <li className="nav-item">
    <Link className="nav-link" aria-current="page" to="/" onClick={() => setNavOpen(false)}>
      Home
    </Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" aria-current="page" to="/productPage" onClick={() => setNavOpen(false)}>
      Products
    </Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" aria-current="page" to="/cartPage" onClick={() => setNavOpen(false)}>
      <FaShoppingCart className="icon" /> Cart
    </Link>
  </li>
  <li
    className="nav-item username"
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
  >
    {loggedInUser ? (
      <div className="nav-link">
        <FaUserCircle className="icon profile-icon" />
        Welcome, {loggedInUser}
        {dropdownOpen && (
          <div className="dropdown-menu">
            <ul>
              <li onClick={() => handleNavigate("/myOrderPage")}>
                <ShoppingBagIcon className="icon" /> My Orders
              </li>
              <li onClick={handleLogout}>
                <FaSignInAlt className="profile-icon" /> Logout
              </li>
            </ul>
          </div>
        )}
      </div>
    ) : (
      <Link className="nav-link" to="/loginPage" onClick={() => setNavOpen(false)}>
        <FaSignInAlt className="icon" /> Login
      </Link>
    )}
  </li>
</ul>

      </nav>
    </div>
  );
};

export default Header;