// import React, {useState, useEffect}from 'react';
// // import { Button } from './Button';
// import {Link} from 'react-router-dom';
// import './Navbar.css'
// import Bat from './bat/Bat';
// import Bat2 from './bat/Bat2';


// function Navbar(){
//     const[click, setClick]= useState( false);
//     const[button, setButton]= useState(true);

//     const handleClick = () => setClick(!click);
//     const closeMobileMenu = () => setClick(false);

//     const showButton = () => {
//         if(window.innerWidth <= 960) {
//             setButton(false);
//         } else {
//             setButton(true);
//         }
//     };

//     useEffect(() => {
//         setButton();
//     }, []);

//     window.addEventListener('resize', showButton)

//     return(
//         <>
//         <nav className='navbar'>
//             <div className='navbar-container'>
//                 <Link to ='/' className='navbar-logo' onClick={closeMobileMenu}>
//                 </Link>
//                 <div className='menu-icon' onClick={handleClick}>
//                     <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
//                 </div>
//                 <ul className={click ? 'nav-menu active' : 'nav-menu'}>

//                     <li className='nav-item'>
//                     <Link to='/' className='nav-links' onClick={closeMobileMenu}>
//                     Home 
//                     </Link>
//                     </li>
                    
//                     <li className='nav-item'>
//                     <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
//                     About
//                     </Link>
//                     </li>

//                     <li className='nav-item'>
//                     <Link to='/Contact' className='nav-links' onClick={closeMobileMenu}>
//                     Contact
//                     </Link>
//                     </li>
                    
//                     {/* <li>
//                     <Link to='/sign-up'className='nav-links-mobile'onClick={closeMobileMenu}>
//                         Sign Up
//                     </Link>
//                     </li> */}
//                 </ul>
//                 {/* {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>} */}
//             </div>
//         </nav>
//      </>
//     );
// }

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
    setButton();
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
              <Link
                to='/About'
                className='nav-links'
                onClick={() => {
                  closeMobileMenu();
                }}
              >
                About
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/Contact' className='nav-links' onClick={closeMobileMenu}>
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
