import React from "react";
import { FaFacebookF, FaTwitter, FaDribbble, FaBehance } from "react-icons/fa";
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="text">
        Copyright ©2025 All rights reserved | This template is made with{" "}
        <span className="heart">♥</span> by{" "}
        <a
          href="https://colorlib.com"
          target="_blank"
          rel="noopener noreferrer"
          className="link"
        >
          Colorlib
        </a>
      </div>
      <div className="icons">
        <a href="#" className="icon">
          <FaFacebookF />
        </a>
        <a href="#" className="icon">
          <FaTwitter />
        </a>
        <a href="#" className="icon">
          <FaDribbble />
        </a>
        <a href="#" className="icon">
          <FaBehance />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
