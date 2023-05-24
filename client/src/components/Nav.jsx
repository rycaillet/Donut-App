import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav>
      <div className={`mobile-menu-toggle ${isMobileMenuOpen ? 'open' : ''}`} onClick={toggleMobileMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={`menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <li>
          <Link to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>
        </li>
        <li>
          <Link to="/about" onClick={() => setMobileMenuOpen(false)}>About</Link>
        </li>
        <li>
          <Link to="/donutShops" onClick={() => setMobileMenuOpen(false)}>Donut Shops</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
