import React from 'react';
import './Register.css';

function Register() {
  return (
    <div className="register-container">
      <form action="submit" className="register-container__form">
        <label className="register-container__label">username: </label>
        <input className="register-container__input" type="text" placeholder="enter your name" required />
        <label className="register-container__label">email: </label>
        <input className="register-container__input" type="email" placeholder="enter your email" required />
        <label className="register-container__label">password:</label>
        <input className="register-container__input" type="password" placeholder="enter your password" required />
        <button className="register-container__btn">Join</button>
      </form>
    </div>
  )
}

export default Register;
