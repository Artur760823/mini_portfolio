import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './NavMenu.css';


function NavMenu() {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click)
  }

  const closeSideMenu = () => {
    setClick(false)
  }

  return (
    <>
      <nav className='menu'>
        <div className='menu-container'>
          <NavLink to='/' className="menu-logo">
            Safe Our Planet <i className="fas fa-globe-americas" />
          </NavLink>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
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
          </ul>
        </div>
      </nav>

    </>
  );
}

export default NavMenu;

