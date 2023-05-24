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

// import { useState } from 'react';
// import { Link } from 'react-router-dom';

// const Nav = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <header>
//       <nav className={`navbar ${isOpen ? 'open' : ''}`}>
//         <div className="navbar-brand">
//           <div className="navbar-toggle" onClick={toggleMenu}>
//             <div></div>
//             <div></div>
//             <div></div>
//           </div>
//           <span>Welcome!</span>
//         </div>
//         <div className={`navbar-menu ${isOpen ? 'open' : ''}`}>
//           <div className="navbar-links">
//             <Link to="/" onClick={toggleMenu}>
//               Home
//             </Link>
//             <Link to="/about" onClick={toggleMenu}>
//               About
//             </Link>
//             <Link to="/donutShops" onClick={toggleMenu}>
//               Donut Shops
//             </Link>
//           </div>
//         </div>
//       </nav>
//       {isOpen && <div className="navbar-overlay" onClick={toggleMenu}></div>}
//     </header>
//   );
// };

// export default Nav;

const Nav = () => {
    const [click, setClick] = React.useState(false);
  
    const handleClick = () => setClick(!click);
    const Close = () => setClick(false);
    
    return (
      <div>
       <div className={click ? "main-container" : ""}  onClick={()=>Close()} />
        <nav className="navbar" onClick={e => e.stopPropagation()}>
          <div className="nav-container">
            <Link exact to="/" className="nav-logo">
              CodeBucks
              <i className="fa fa-code"></i>
            </Link>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link
                  exact
                  to="/"
                  activeClassName="active"
                  className="nav-links"
                  onClick={click ? handleClick : null}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  exact
                  to="/about"
                  activeClassName="active"
                  className="nav-links"
                  onClick={click ? handleClick : null}
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  exact
                  to="/blog"
                  activeClassName="active"
                  className="nav-links"
                  onClick={click ? handleClick : null}
                >
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  exact
                  to="/contact"
                  activeClassName="active"
                  className="nav-links"
                 onClick={click ? handleClick : null}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
            <div className="nav-icon" onClick={handleClick}>
              <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
            </div>
          </div>
        </nav>
      </ div>
    );
  }

  export default Nav
