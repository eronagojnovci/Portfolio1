import React from "react";
import logo from '../assets/logo.jpg';

const Footer = () => {
  return (
    <footer className="footer">
      <img src={logo} alt="Logo" className="footer-logo" />
      <p>© 2025 Erona Gojnovci. All rights reserved.</p>
      <div className="social-links">
        <a href="https://www.linkedin.com/in/eron%C3%AB-gojnovci-b84109322/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://github.com/eronagojnovci" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </footer>
  );
};

export default Footer;
