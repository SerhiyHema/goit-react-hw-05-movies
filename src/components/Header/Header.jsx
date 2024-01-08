import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="header__box">
        <nav className="header__nav">
          <ul className="header__nav-list">
            <li className="header__nav-link">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="header__nav-link">
              <NavLink to="/movies">Movies</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
