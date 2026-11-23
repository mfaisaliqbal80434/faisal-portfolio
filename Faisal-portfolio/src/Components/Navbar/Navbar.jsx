
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Project", path: "/project" },
    { name: "Education", path: "/education" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="navbar">

      <NavLink to="/" className="nav-logo"
        onClick={() => setMenuOpen(false)}>
        Faisal<span>.</span>
      </NavLink>

      <div className={`nav-links ${menuOpen ? "active" : ""}`}>

        {links.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            end={link.path === "/"}
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
            onClick={() => setMenuOpen(false)}
          >
            {link.name}
          </NavLink>
        ))}

      </div>

      <NavLink
        to="/contact"
        className="nav-btn"
        onClick={() => setMenuOpen(false)}
      >
        Hire Me
      </NavLink>

      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
      >
        ☰
      </button>

    </nav>
  );
}

export default Navbar;
