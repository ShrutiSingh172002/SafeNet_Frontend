import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="logo">SafeNet</Link>
      </div>
      <div className="navbar-right">
        <Link to="/" className="nav-link">Home</Link> {/* ✅ Added Home link */}
        <Link to="/about" className="nav-link">About Us</Link>
        <Link to="/blog" className="nav-link">Blog</Link>
        <Link to="/contact" className="nav-link">Contact Us</Link>
      </div>
    </nav>
  );
};

export default Navbar;
