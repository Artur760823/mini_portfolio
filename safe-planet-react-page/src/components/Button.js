import React from 'react';
import './Button.css';
import { NavLink } from 'react-router-dom';

const styles = ['btn--primary', 'btn--outline'];
const size = ['btn--medium', 'btn--large'];

function Button({ children, type, onClick, buttonStyle, buttonSize }) {
  const chceckButtonStyle = styles.includes(buttonStyle) ? buttonStyle : styles[0];
  const chceckButtonSize = size.includes(buttonSize) ? buttonSize : size[0];

  return (
    <NavLink to='/sign-up' className='side-btn'>
      <button
        className={`btn ${chceckButtonStyle} ${chceckButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </NavLink>
  )
}

export default Button;
