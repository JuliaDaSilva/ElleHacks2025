

import React from 'react';
import './Footer/Footer.css';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaEnvelope, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          {/* ElleHacks logo from the public folder */}
          <img src={`${process.env.PUBLIC_URL}/ellehackslogo.png`} alt="ElleHacks Logo" />
        </div>
        <p className="footer-text">Get in Contact With Us</p>
        <div className="footer-icons">
          <a href="https://www.facebook.com/ellehacks/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebookF />
          </a>
          <a href="https://www.instagram.com/ellehacks" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/company/ellehacks/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedinIn />
          </a>
          <a href="mailto:info@ellehacks.com" aria-label="Mail">
            <FaEnvelope />
          </a>
          <a href="https://x.com/ellehacks" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <FaTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;