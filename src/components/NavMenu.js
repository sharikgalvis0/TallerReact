
import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';


const NavMenu = () => {
  return (
      <nav className="nav-menu">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
  );
};

export default NavMenu;
