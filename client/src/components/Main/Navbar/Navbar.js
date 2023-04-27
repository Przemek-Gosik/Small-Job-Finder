import React, { useState } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown';
import profile from './image/profile.png'

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          Small Job Finder
          <i className='fab fa-firstdraft' />
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/search' className='nav-links' onClick={closeMobileMenu}>
              Znajdź ofertę
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/addOffer'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Dodaj ofertę
            </Link>
          </li>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to='/'
              className='nav-links'
              onClick={closeMobileMenu}
            >
               <img className='image' src={profile} alt="profile_image" /> 
              <span>Użytkownik</span><i className='fas fa-caret-down' />
            
            </Link>
            {dropdown && <Dropdown />}
          </li>
          
        </ul>
       <Button/>
        
      </nav>
    </>
  );
}

export default Navbar;