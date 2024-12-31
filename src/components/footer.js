import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* About Us Section */}
        <div className="footer-section">
          <h2>About Us</h2>
          <p>
            Your trusted online medical shop. We provide a wide range of
            medicines, healthcare products, and expert advice at your
            fingertips.
          </p>
        </div>

        {/* Quick Links Section */}
        <div className="footer-section">
          <h2>Quick Links</h2>
          <ul>
            <li><Link to="/homePage">Home</Link></li>
            <li><Link to="/productPage">Products</Link></li>
            <li><Link to="/cartPage">Cart</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        {/* Contact Us Section */}
        <div className="footer-section">
          <h2>Contact Us</h2>
          <p>Email: support@medicalshop.com</p>
          <p>Phone: +1 234 567 890</p>
          <p>Address: 123 Health Ave, Wellness City</p>
        </div>

        {/* Newsletter Section */}
        <div className="footer-section">
          <h2>Newsletter</h2>
          <p>Subscribe to get the latest updates and offers.</p>
          <form>
            <input
              type="email"
              placeholder="Enter your email"
              className="newsletter-input"
            />
            <button type="submit" className="newsletter-button">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="footer-bottom">
        <p>&copy; 2024 Online Medical Shop. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
