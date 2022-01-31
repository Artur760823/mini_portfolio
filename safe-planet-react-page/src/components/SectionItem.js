import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sections.css';

function SectionItem(props) {
  return (
    <>
      <li className='section-item'>
        <NavLink to='/' className='section-item__link' to={props.path}>
          <figure className='section-item__img-wrapper' data-category={props.label}>
            <img className='section-item__img' src={props.src} alt='?' />
          </figure>
          <div className='section-item__description'>
            <h3 className='section-item__title'>{props.text}</h3>
          </div>
        </NavLink>
      </li>
    </>
  )
}

export default SectionItem;
