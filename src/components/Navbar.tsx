
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = ["home", "services", "about", "career", "contact"];

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      {/* BRAND */}
      <NavLink to="/" className="brand" style={{ textDecoration: 'none' }} onClick={closeMenu}>
        <img src="/logo.jpeg" alt="Rudvita Tech Logo" className="brand-logo" />
        <span className="logo glowwhite">RUDVITA TECHNOLOGY</span>
      </NavLink>

      {/* HAMBURGER ICON */}
      <div className={`menu-icon ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      {/* NAV LINKS */}
      <ul className={`nav-links ${isOpen ? "active" : ""}`}>
        {navItems.map((item) => (
          <li key={item} onClick={closeMenu}>
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

