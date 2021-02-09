import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="footer-container">
        <Link to={/* insert link to*/}>
          <ul>
            <li>{/* insert word/icon */}</li>
            <li>{/* insert word/icon */}</li>
          </ul>
        </Link>
        <a
          class="fab fa-instagram"
          href={/* insert Instagram URL */}
          target="_blank"
        ></a>
      </div>
    </>
  );
}

export default Footer;
