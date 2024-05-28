import React from 'react';
import headerLogo from '../logo-javascript@2x.png';
import headerImage from '../Screenshot from 2024-02-14 14-59-02.png';
import './Header.css'; // Ensure you create and import a separate CSS file for each component

const Header = () => {
  return (
    <header>
      <div className="d-flex bg-gradient">
        <div className="d-flex flex-grow-1">
          <nav className="courseTitle">
            <button className="navbar-brand border-0">
              <img
                src={headerImage}
                alt="logo"
              />
            </button>
          </nav>
          <div className="flex-grow-1">
            <div className="ReactTitle ps-3 d-flex align-items-center">
              <img src={headerLogo} alt="logo" />
              <h3 className="mb-0">JS Basic Apps</h3>
            </div>
            <div className="d-flex ps-3 align-items-center">
              <div className="flex-grow-1">
                <h4>Rocket Launch</h4>
                <p className="pb-0 mb-3 text-start">
                  Purpose: Rocket launch using simple JS
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
