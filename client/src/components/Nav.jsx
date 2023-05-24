import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        Donut Diver
      </div>
      <div className={`navbar-mobile-toggle ${isMobileMenuOpen ? 'open' : ''}`} onClick={toggleMobileMenu}>
        <span className="navbar-mobile-toggle-icon"></span>
      </div>
      <ul className={`navbar-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <li className="navbar-item">
          <Link to="/" className="navbar-link">Home</Link>
        </li>
        <li className="navbar-item">
          <Link to="/about" className="navbar-link">About</Link>
        </li>
        <li className="navbar-item">
          <Link to="/donutShops" className="navbar-link">Donut Shops</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;