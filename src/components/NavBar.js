
import React from 'react';

function NavBar() {
  return (
    <nav className='navbar'>
      <ul>
        <li className="logo"><img src="H-logo.svg" alt="logo"/></li>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#page">Page</a></li>
        <li><a href="#blog">Blog</a></li>
        <li><a href="#contact">Contact</a></li>
        
      </ul>
    </nav>
  );
}

export default NavBar;