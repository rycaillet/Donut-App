// import { Link } from 'react-router-dom'

// const Nav = () => {

//     return (
//         <header>
//             <nav>
//                 <Link to='/'>Home</Link>
//                 <Link to='/about'>About</Link>
//                 <Link to='/donutShops'>Donut Shops</Link>
//             </nav>
//         </header>
//     )
// }

// export default Nav

import { useState } from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <nav className={`navbar ${isMenuOpen ? 'open' : ''}`}>
        <div className="navbar-brand">
          <Link to="/">Donut Shop</Link>
        </div>
        <div className={`navbar-menu ${isMenuOpen ? 'open' : ''}`}>
          <Link to="/" onClick={toggleMenu}>
            Home
          </Link>
          <Link to="/about" onClick={toggleMenu}>
            About
          </Link>
          <Link to="/donutShops" onClick={toggleMenu}>
            Donut Shops
          </Link>
        </div>
        <div className={`navbar-toggle ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;