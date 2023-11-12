import React from "react";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div className="header-container">
      <div>
        <ul className="ul-container">
          <NavLink to="/" className="nav-link">
            <li>Home</li>
          </NavLink>

          <NavLink to="/Favorites" className="nav-link">
            <li>Favorites</li>
          </NavLink>
        </ul>
      </div>
      <h1>My Movies</h1>
    </div>
  );
};

export default Header;
