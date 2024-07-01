import React, { useState } from 'react';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='navbar'>
      <div className="navbar-container">
      <li className="logo"><img src="H-logo.svg" alt="logo" /></li>
        <ul className={isOpen ? 'nav-menu open' : 'nav-menu'}>
          
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#page">Page</a></li>
          <li><a href="#blog">Blog</a></li>
          <li><a href="contact">Contact</a></li>
        </ul>
        <div className="hamburger" onClick={toggleMenu}>
          <div className={isOpen ? 'bar open' : 'bar'}></div>
          <div className={isOpen ? 'bar open' : 'bar'}></div>
          <div className={isOpen ? 'bar open' : 'bar'}></div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
