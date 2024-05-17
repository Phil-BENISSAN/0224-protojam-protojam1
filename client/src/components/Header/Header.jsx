import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1 className="header-title">Bordonautes</h1>
      <nav className="header-nav">
        <Link to="/" className="header-link">Accueil</Link>
        <Link to="/stardex" className="header-link">Mon Bordodex</Link>
        <Link to="/Trophies" className="header-link">Mes Trophées</Link>
      </nav>
    </header>
  );
};

export default Header;
