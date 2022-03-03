import React, { useState, useEffect } from 'react';
// import { Button } from './Button';
 import { Link } from 'react-router-dom';
import '../Navbar/Navbar.css';
import { GiGrowth } from 'react-icons/gi';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';

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
    window.addEventListener('resize', showButton);

  }, []);


  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <nav className='navbar '>
          <div className='navbar-container container'>
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
              CvRoll <GiGrowth color="black"/>
            </Link>
            <div className='menu-icon' onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars color="black"/>}
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/Begin'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Begin
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/Resume'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Resume Templates
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/Contact'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                 Contact Us
                </Link>
              </li>
              
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
