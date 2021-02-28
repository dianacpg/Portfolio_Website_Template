import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contactContainer">
      <a
        href="https://www.instagram.com/"
        target="_blank"
        className="contact_button"
      >
        Instagram
      </a>
      <p>info@yourmail.com</p>
    </div>
  );
};

export default Contact;
