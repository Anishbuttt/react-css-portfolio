import React from "react";
import "./footer.css";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section brand">
          <h3>Aneesh butt</h3>
          <p>Turning ideas into reality</p>
        </div>
        
        <div className="footer-section links">
          <h4>Quick Links</h4>
          <nav className="footer-nav">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/expertises">Expertises</NavLink>
            <NavLink to="/education">Education</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </nav>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {currentYear} Aneesh. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;