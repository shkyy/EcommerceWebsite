import React from 'react';
import '../styles.css';

const Footer = () => {

  return (
    <footer>
        <div className='footer'>
            <div>&copy; 2024 (logo). All the rights reserved.</div>
            <div className='footer-icons'>
                <a href='/'>Join us</a>
                <i className='bi bi-facebook'></i>
                <i className='bi bi-instagram'></i>
                <i className='bi bi-twitter'></i>
            </div>
        </div>
    </footer>
  );
}

export default Footer;
