import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaEnvelope, FaTwitter, FaTiktok } from 'react-icons/fa';
import logo from '../assets/ElleHacksLogo.png'; 

const Footer = () => {
  return (
    <footer className="bg-[#899878] text-white text-center py-[60px] font-serif select-none">
      <div className="flex flex-col items-center">
        <div className="mb-2">
          <img
            src={logo}
            alt="ElleHacks Logo"
            className="w-[60px] mb-[10px]"
          />
        </div>
        <p className="text-[18px] font-bold my-[10px]">Get in Contact With Us</p>
        <div className="flex justify-center gap-[15px] text-[24px]">
          <a
            href="https://www.facebook.com/ellehacks/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="text-white hover:text-[#d4d4d4] transition-all duration-300"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.instagram.com/ellehacks"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-white hover:text-[#d4d4d4] transition-all duration-300"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/company/ellehacks/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-white hover:text-[#d4d4d4] transition-all duration-300"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="mailto:info@ellehacks.com"
            aria-label="Mail"
            className="text-white hover:text-[#d4d4d4] transition-all duration-300"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://x.com/ellehacks"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="text-white hover:text-[#d4d4d4] transition-all duration-300"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.tiktok.com/@ellehacks"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
            className="text-white hover:text-[#d4d4d4] transition-all duration-300"
          >
            <FaTiktok />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
