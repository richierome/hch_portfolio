import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import Bat from './bat/Bat';
import Bat2 from './bat/Bat2';

function Navbar() {
  const [click, setClick] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isAboutPage = location.pathname === '/about';

  const closeMobileMenu = () => setClick(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    closeMobileMenu();
  }, [location.pathname]);

  return (
    <>
      <nav className={scrolled ? 'navbar navbar--scrolled' : 'navbar'}>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu} aria-label='Hell City Havoc home'>
            <span className='navbar-logo-mark'>HCH</span>
            {/* <span className='navbar-logo-text'>Hell City Havoc</span> */}
          </Link>

          <button
            className='menu-icon'
            onClick={() => setClick(!click)}
            aria-label='Toggle navigation menu'
            aria-expanded={click}
          >
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </button>

          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>Home</Link>
            </li>
            <li className='nav-item'>
              <Link to='/about' className='nav-links' onClick={closeMobileMenu}>About</Link>
            </li>
            <li className='nav-item'>
              <Link to='/contact' className='nav-links nav-links--cta' onClick={closeMobileMenu}>Contact</Link>
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
