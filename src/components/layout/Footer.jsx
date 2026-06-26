import { NavLink } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h3>SkillPath</h3>
          <p>Empowering learners with quality education and career growth.</p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>

          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>
      </div>

      <hr />

      <p className="footer-copy">
        © 2026 SkillPath. All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;