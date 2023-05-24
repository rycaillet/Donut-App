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

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 767);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header>
      <nav className={`navbar ${isOpen ? 'open' : ''}`}>
        <div className="navbar-brand">
          {isMobile ? (
            <div className="navbar-toggle" onClick={toggleMenu}>
              <div></div>
              <div></div>
              <div></div>
            </div>
          ) : (
            <span>Welcome!</span>
          )}
        </div>
        <div className={`navbar-menu ${isOpen ? 'open' : ''}`}>
          <div className="navbar-links">
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
        </div>
      </nav>
      {isOpen && <div className="navbar-overlay" onClick={toggleMenu}></div>}
    </header>
  );
};

export default Nav;
