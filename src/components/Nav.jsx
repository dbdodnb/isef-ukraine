import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="padding">
      <nav className="nav">
      <div className="logo">
        <NavLink to="/" className="nav__logo" onClick={closeMenu}></NavLink>
      </div>

      {/* Десктопне меню */}
      <div className="links">
        <ul>
          <li><NavLink to="/" end className={({ isActive }) => isActive ? "active" : ""}>Головна</NavLink></li>
          <li><NavLink to="/categories" className={({ isActive }) => isActive ? "active" : ""}>Категорії</NavLink></li>
          <li><NavLink to="/participants" className={({ isActive }) => isActive ? "active" : ""}>Учасникам</NavLink></li>
          <li><NavLink to="/results" className={({ isActive }) => isActive ? "active" : ""}>Результати</NavLink></li>
        </ul>
      </div>

      {/* Кнопка Бургер */}
      <div 
        className={`burger-menu ${isMenuOpen ? 'open' : ''}`} 
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Мобільне меню */}
      <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
        <ul>
          <li><NavLink to="/" end className={({ isActive }) => isActive ? "active" : ""} onClick={closeMenu}>Головна</NavLink></li>
          <li><NavLink to="/categories" className={({ isActive }) => isActive ? "active" : ""} onClick={closeMenu}>Категорії</NavLink></li>
          <li><NavLink to="/participants" className={({ isActive }) => isActive ? "active" : ""} onClick={closeMenu}>Учасникам</NavLink></li>
          <li><NavLink to="/results" className={({ isActive }) => isActive ? "active" : ""} onClick={closeMenu}>Результати</NavLink></li>
        </ul>
      </div>
    </nav>
    </div>
  );
};

export default Nav;