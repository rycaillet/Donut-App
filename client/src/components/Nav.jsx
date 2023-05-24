import React, { useState } from 'react';

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
      <ul className={`navbar-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <li className="navbar-item">
          <a href="#" className="navbar-link">Home</a>
        </li>
        <li className="navbar-item">
          <a href="#" className="navbar-link">About</a>
        </li>
        <li className="navbar-item">
          <a href="#" className="navbar-link">Services</a>
        </li>
        <li className="navbar-item">
          <a href="#" className="navbar-link">Contact</a>
        </li>
      </ul>
      <div className="navbar-mobile-toggle" onClick={toggleMobileMenu}>
        <span className="navbar-mobile-toggle-icon"></span>
      </div>
    </nav>
  );
};

export default Nav;
