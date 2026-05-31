import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import Bat from './bat/Bat';
import Bat2 from './bat/Bat2';


function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [isAboutPage, setIsAboutPage] = useState(false);

  const location = useLocation();

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  useEffect(() => {
    setIsAboutPage(location.pathname === '/about');
  }, [location.pathname]);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            {/* Your logo goes here */}
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link
                to='/'
                className='nav-links'
                onClick={() => {
                  closeMobileMenu();
                }}
              >
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
               About
            </Link>
            </li>
            <li className='nav-item'>
             <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
            Contact
            </Link>
            </li>

          </ul>
        </div>
      </nav>
      {isAboutPage && (
        <>
          <Bat />
          <Bat2 />
        </>
      )}
    </>
  );
}

export default Navbar;
