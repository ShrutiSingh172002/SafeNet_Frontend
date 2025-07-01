import React from 'react';
import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';
import '../index.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        {/* Logo */}
        <Link to="/" className="logo">SafeNet</Link>

        {/* Right-side Items: Blog + Phone */}
        <div className="navbar-right">
          <Link to="/blog" className="nav-link">Blog</Link>
          <span className="phone-number">
            <Phone size={18} style={{ marginRight: '6px' }} />
            +1 (877) 593-3790
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
