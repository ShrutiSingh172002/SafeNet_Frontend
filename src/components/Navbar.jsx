import React from 'react';
import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react'; // import from lucide
import '../index.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        {/* Logo */}
        <Link to="/" className="logo">SafeNet</Link>

        {/* Phone Number on Right */}
        <span className="phone-number">
          <Phone size={18} style={{ marginRight: '6px' }} />
          +1 (877) 593-3790
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
