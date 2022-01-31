import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Button from './Button';
import './NavMenu.css';


function NavMenu() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => {
    setClick(!click)
  }

  const closeSideMenu = () => {
    setClick(false)
  }

  const showSideButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false)
    } else {
      setButton(true)
    }
  };

  useEffect(() => {
    showSideButton();
  }, [])
  window.addEventListener('resize', showSideButton);

  return (
    <>
      <nav className='menu'>
        <div className='menu-container'>
          <NavLink to='/' className="menu-logo" onClick={closeSideMenu}>
            Safe Our Planet <i className="fas fa-globe-americas" />
          </NavLink>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'menu-list active' : 'menu-list'}>
            <li className='menu-item'>
              <NavLink to='/' className='menu-link' onClick={closeSideMenu}>
                Home
              </NavLink>
            </li>
            <li className='menu-item'>
              <NavLink to='/threats' className='menu-link' onClick={closeSideMenu}>
                Threats
              </NavLink>
            </li>
            <li className='menu-item'>
              <NavLink to='/solutions' className='menu-link' onClick={closeSideMenu}>
                Solutions
              </NavLink>
            </li>
            <li className='menu-item'>
              <NavLink to='/activists' className='menu-link' onClick={closeSideMenu}>
                Activists/Organizations
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/join-us'
                className='menu-link-mob'
                onClick={closeSideMenu}
              >
                Join us
              </NavLink>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>Join us</Button>}
        </div>
      </nav>

    </>
  );
}

export default NavMenu;

