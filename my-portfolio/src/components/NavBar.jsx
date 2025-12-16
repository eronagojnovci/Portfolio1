import React, { useState } from 'react';
import '../styles/main.css';
import Eye from "./Eye";
import logo from '../assets/logo.jpg';


const NavBar = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen((v) => !v);
  const closeMenu = () => setOpen(false);

  return (
    <header className="site-nav">
      <div className="nav-inner">
       <div className="nav-left">
  <a href="https://eronegojnovci.netlify.app/" target="_blank" rel="noopener noreferrer">
    <img src={logo} alt="Logo" className="logo-img" />
  </a>
</div>


        <button
          className={`nav-toggle ${open ? 'is-open' : ''}`}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={toggleMenu}
        >
          <span />
          <span />
          <span />
        </button>

        <div className={`nav-right ${open ? 'is-open' : ''}`}>
          <nav className="nav-links" onClick={closeMenu}>
            <a href="#hero">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>
            <div className="nav-icons">
            <Eye />
            <Eye />
            </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
