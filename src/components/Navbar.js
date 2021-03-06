import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import {  } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faBars, faTimes, faBook, faCartShopping} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Products from './pages/Products';
import Signup from './Signup.js'
import { color} from '@mui/system';
import { IconButton } from '@mui/material';



function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

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

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            Book Store &nbsp;
            <FontAwesomeIcon icon={faBook} />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            {click ? <FontAwesomeIcon icon={faTimes} color='white' /> : <FontAwesomeIcon icon={faBars} />}
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/services'
                className='nav-links'
                onClick={closeMobileMenu} 
              >
                Services
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/Products'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Products
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/Contac'
                className='nav-links'
                onClick={closeMobileMenu} 
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                to='./signup'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline' onClick={
            () => {
              window.location.href = './signup'
            }
          }>SIGN UP</Button>}
          <IconButton><FontAwesomeIcon className='cart_icon' icon={faCartShopping} /></IconButton>
          {/* <FontAwesomeIcon className='cart_icon' icon={faCartShopping} /> */}
          

          
        </div>
      </nav>
    </>
  );
}

export default Navbar;