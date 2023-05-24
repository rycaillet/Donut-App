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
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <nav className={`navbar ${isOpen ? 'open' : ''}`}>
        <div className="navbar-brand">Donut Shop</div>
        <div className="navbar-toggle" onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={`navbar-menu ${isOpen ? 'open' : ''}`}>
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
      </nav>
    </header>
  );
};

export default Nav;
