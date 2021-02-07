import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="footer-container">
        <Link to="/about">
          <ul>
            <li>-41° 48' 36.54'' S</li>
            <li>-68° 54' 22.57'' W</li>
          </ul>
        </Link>
        <a
          class="fab fa-instagram"
          href="https://www.instagram.com/elianyuri/"
          target="_blank"
        ></a>
      </div>
    </>
  );
}

export default Footer;
