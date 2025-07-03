import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <Link to="/privacy">Privacy Policy</Link>
        <Link to="/terms">Terms & Conditions</Link>
        <Link to="/refund">Refund Policy</Link>
      </div>
      <div className="footer-bottom">
        <p>Copyright © 2025 SafeNet. All Rights Reserved</p>
        <p className="footer-brand">SafeNet</p>
      </div>
    </footer>
  );
};

export default Footer;
