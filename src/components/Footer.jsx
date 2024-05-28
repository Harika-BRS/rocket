import React from 'react';
import footerImage from '../Screenshot from 2024-02-14 15-00-53.png';
import './Footer.css'; // Ensure you create and import a separate CSS file for each component

const Footer = () => {
  const setTheme = (theme) => {
    document.documentElement.style.setProperty('--primary-color', theme);
    localStorage.setItem('movie-theme', theme);
  };

  return (
    <footer className="footer footer-dark">
      <div className="footer-content">
        <div className="footer-text">ALL RIGHTS RESERVED TO ROCKET LAUNCH</div>
        <div className="footer-img-container">
          <img
            src={footerImage}
            alt="logo"
            className="footer-img"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
