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
      <div className={`navbar-mobile-toggle ${isMobileMenuOpen ? 'open' : ''}`} onClick={toggleMobileMenu}>
        <span className="navbar-mobile-toggle-icon"></span>
      </div>
      <ul className={`navbar-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <li className="navbar-item">
          <a href={`/`} className="navbar-link">Home</a>
        </li>
        <li className="navbar-item">
          <a href={`/about`} className="navbar-link">About</a>
        </li>
        <li className="navbar-item">
          <a href={`/donutShops`} className="navbar-link">Donut Shops</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
