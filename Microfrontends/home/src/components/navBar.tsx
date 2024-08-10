import React from 'react';
import '../styles.css';

const NavBar = () => {

  return (
    <nav>
      <div className='navBar'>
        <a href="">Home</a>
        <a href="/products">Products</a>
        <a href="/">Brands</a>
        <a href="/">About us</a>
      </div>
      <div className='logo'>
        <p>.LOGO.</p>
      </div>
      <div className='main-icons'>
        <i className='bi bi-search'></i>
        <i className='bi bi-bag'></i>
        <i className='bi bi-person person-icon'></i>
      </div>
    </nav>
  );
}

export default NavBar;
