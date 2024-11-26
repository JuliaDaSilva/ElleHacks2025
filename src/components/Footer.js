import React from 'react';

import "../fonts/fonts.css"
import ElleHacksLogo from "../assets/ElleHacksLogo.png";

import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { AiOutlineMail } from "react-icons/ai";

function Footer() {
  return (
    <div className="bg-[#FBF6EB] select-none">
      {/* Page Break */}
      <hr className="border-t-3 border-black w-full mb-4 mt-0" />

      {/* Footer content */}
      <div className="flex flex-col items-center justify-center px-4">
        <div>
          <img
            src={ElleHacksLogo}
            alt="ElleHacks Logo"
            className="h-12 mb-3"
          />
        </div>

        <p className="text-m sm:text-1xl md:text-1xl font-[InterSemiBold] text-black text-shadow mb-3">
          Get in Contact With Us
        </p>

        {/* Social Media Icons */}
        <div className="flex space-x-6 mb-10">
          <a href="https://www.instagram.com/ellehacks/" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={30} className="text-black"/>
          </a>
          <a href="https://linkedin.com/company/ellehacks" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} className="text-black"/>
          </a>
          <a href="https://tiktok.com/@ellehacks" target="_blank" rel="noopener noreferrer">
            <FaTiktok size={30} className="text-black"/>
          </a>
          <a href="mailto:info@ellehacks.com" target="_blank" rel="noopener noreferrer">
            <AiOutlineMail size={30} className="text-black"/>
          </a>
          <a href="https://x.com/ellehacks" target="_blank" rel="noopener noreferrer">
            <FaXTwitter size={30} className="text-black" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
