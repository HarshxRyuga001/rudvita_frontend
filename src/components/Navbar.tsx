
import React from "react";
import { NavLink } from "react-router-dom";

const Navbar: React.FC = () => {
  const navItems = ["home", "services", "about", "career", "contact"];

  return (
    <nav className="navbar">
      {/* BRAND */}
      <NavLink to="/" className="brand" style={{ textDecoration: 'none' }}>
        <span className="logo glowwhite">RUDVITA TECHNOLOGY</span>
      </NavLink>

      {/* NAV LINKS */}
      <ul className="nav-links">
        {navItems.map((item) => (
          <li key={item}>
            <NavLink
              to={item === "home" ? "/" : `/${item}`}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;

