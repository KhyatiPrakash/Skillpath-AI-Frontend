import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-logo">
        <NavLink to="/" onClick={() => setMenuOpen(false)}>
          SkillPath AI
        </NavLink>
      </div>

      {/* Navigation Links */}
      <div className={`navbar-links ${menuOpen ? "active" : ""}`}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
          onClick={() => setMenuOpen(false)}
        >
          Home
        </NavLink>

        <NavLink
          to="/careers"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
          onClick={() => setMenuOpen(false)}
        >
          Careers
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
          onClick={() => setMenuOpen(false)}
        >
          About
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
          onClick={() => setMenuOpen(false)}
        >
          Contact
        </NavLink>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="navbar-hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>
    </nav>
  );
};

export default Navbar;