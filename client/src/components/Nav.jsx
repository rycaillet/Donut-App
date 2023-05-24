import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav>
      <div className={`mobile-menu-toggle ${isMobileMenuOpen ? 'open' : ''}`} onClick={toggleMobileMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={`menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <li onClick={closeMobileMenu}>
          <Link to="/">Home</Link>
        </li>
        <li onClick={closeMobileMenu}>
          <Link to="/about">About</Link>
        </li>
        <li onClick={closeMobileMenu}>
          <Link to="/donutShops">Donut Shops</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
