import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="logo">SafeNet</Link>
      </div>
      
      {/* Hamburger Menu Button */}
      <button 
        className="hamburger-menu" 
        onClick={toggleMenu}
        style={{
          display: 'none',
          background: 'none',
          border: 'none',
          fontSize: '1.5rem',
          cursor: 'pointer',
          color: 'inherit'
        }}
      >
        ☰
      </button>
      
      <div className={`navbar-right ${isMenuOpen ? 'navbar-right-mobile' : ''}`}>
        <Link to="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>Home</Link>
        <Link to="/about" className="nav-link" onClick={() => setIsMenuOpen(false)}>About Us</Link>
        <Link to="/blog" className="nav-link" onClick={() => setIsMenuOpen(false)}>Blog</Link>
        <Link to="/contact" className="nav-link" onClick={() => setIsMenuOpen(false)}>Contact Us</Link>
      </div>
      
      {/* Add these styles to your App.css */}
      <style jsx>{`
        @media (max-width: 768px) {
          .hamburger-menu {
            display: block !important;
          }
          
          .navbar-right {
            position: fixed;
            top: 60px;
            right: -100%;
            width: 250px;
            height: calc(100vh - 60px);
            background: white;
            flex-direction: column;
            align-items: flex-start;
            padding: 2rem;
            box-shadow: -2px 0 5px rgba(0,0,0,0.1);
            transition: right 0.3s ease;
            z-index: 1000;
          }
          
          .navbar-right-mobile {
            right: 0 !important;
          }
          
          .navbar-right .nav-link {
            margin: 0.5rem 0;
            padding: 0.5rem 0;
            width: 100%;
            border-bottom: 1px solid #eee;
          }
        }
        
        @media (min-width: 769px) {
          .hamburger-menu {
            display: none !important;
          }
          
          .navbar-right {
            display: flex;
            position: static;
            width: auto;
            height: auto;
            background: none;
            flex-direction: row;
            align-items: center;
            padding: 0;
            box-shadow: none;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;