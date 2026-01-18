import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Brand */}
        <div className="footer-section">
          <h3 className="footer-logo">🏠 RealEstatePro</h3>
          <p className="footer-text">
            Helping you buy, sell, and rent properties with confidence.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <Link to="/">Home</Link>
          <Link to="/listings">Properties</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>

        {/* Services */}
        <div className="footer-section">
          <h4>Services</h4>
          <p>Buy Property</p>
          <p>Sell Property</p>
          <p>Rent Property</p>
          <p>Home Loans</p>
        </div>

        {/* Contact */}
        <div className="footer-section">
          <h4>Contact</h4>
          <p>📍 India</p>
          <p>📧 rupakk746@gmail.com</p>
          <p>📞 +91 6299361809</p>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} RealEstatePro. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
