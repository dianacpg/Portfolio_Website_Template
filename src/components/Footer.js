import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <Link to="/about">
          <ul>
            <li> INSET TEXT </li>
          </ul>
        </Link>
        <a
          class="fab fa-instagram"
          href="https://www.instagram.com/"
          target="_blank"
        ></a>
      </div>
    </>
  );
};

export default Footer;
