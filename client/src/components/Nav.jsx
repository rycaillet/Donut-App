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
          <a href={`https://donut-app.herokuapp.com/api/home`} className="navbar-link">Home</a>
        </li>
        <li className="navbar-item">
          <a href={`https://donut-app.herokuapp.com/api/about`} className="navbar-link">About</a>
        </li>
        <li className="navbar-item">
          <a href={`https://donut-app.herokuapp.com/api/donutShops`} className="navbar-link">Donut Shops</a>
        </li>
      </ul>
      <div className="navbar-mobile-toggle" onClick={toggleMobileMenu}>
        <span className="navbar-mobile-toggle-icon"></span>
      </div>
    </nav>
  );
};

export default Nav;
