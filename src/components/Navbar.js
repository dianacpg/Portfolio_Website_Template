import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <>
      <nav className="navbar">
        <div className="ian-logo">
          <Link to="/" className="navbar-logo">
            {" "}
            YOURNAME
          </Link>
        </div>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              HOME
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/indoor" className="nav-links" onClick={closeMobileMenu}>
              INDOOR
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/outdoor" className="nav-links" onClick={closeMobileMenu}>
              OUTDOOR
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
              ABOUT
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-links" onClick={closeMobileMenu}>
              CONTACT
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
