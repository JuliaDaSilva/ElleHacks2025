import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import ElleHacksLogo from "../assets/ElleHacksLogo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import "../fonts/fonts.css";

import MLHBanner from "../assets/Homepage/MLHBanner.svg";

function NavBar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Open and close hamburger menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Close hamburger menu when clicked 
    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const linkText = "font-['Faustina'] text-xl font-semibold text-[#555F49] font-medium cursor-pointer hover:text-[#D8AA6C] transition duration-300 ease-in-out no-underline select-none";

    return (
        <div>
            {/* NavBar */}
            <nav className="fixed top-0 left-0 right-0 bg-[#EDDEC9] bg-opacity-70 shadow-lg z-50">

                {/* Desktop Menu */}
                <div className="select-none max-w-screen-xl mx-auto px-6 py-3 flex justify-between items-center relative">
                    {/* Left: Logo */}
                    <div className="flex-shrink-0">
                        <img src={ElleHacksLogo} alt="ElleHacks Logo" className="h-12 object-contain" />
                    </div>

                    {/* Center: Menu Links */}
                    <div className="hidden lg:flex flex-grow justify-center space-x-6">
                        <ScrollLink to="home" spy smooth duration={500} className={linkText}>
                            Home
                        </ScrollLink>
                        <ScrollLink to="aboutus" spy smooth duration={500} className={linkText}>
                            About Us
                        </ScrollLink>
                        <ScrollLink to="sponsors" spy smooth duration={500} className={linkText}>
                            Sponsors
                        </ScrollLink>
                        <ScrollLink to="faq" spy smooth duration={500} className={linkText}>
                            FAQ
                        </ScrollLink>
                        <ScrollLink to="location" spy smooth duration={500} className={linkText}>
                            Location
                        </ScrollLink>
                        <ScrollLink to="meettheteam" spy smooth duration={500} className={linkText}>
                            Meet the Team
                        </ScrollLink>
                        <ScrollLink to="contactus" spy smooth duration={500} className={linkText}>
                            Contact Us
                        </ScrollLink>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden flex items-center justify-between w-full ml-6">
                        {/* Mobile Hamburger Menu Button */}
                        <button onClick={toggleMenu} className="text-4xl font-semibold text-[#555F49] hover:text-[#D8AA6C]">
                            <GiHamburgerMenu />
                        </button>

                    </div>

                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="lg:hidden absolute top-16 left-0 right-0 bg-[#EDDEC9] bg-opacity-90 py-4 px-6 shadow-lg">
                        <ScrollLink to="home" spy smooth duration={500} className={`${linkText} block py-2`} onClick={closeMenu}>
                            Home
                        </ScrollLink>
                        <ScrollLink to="aboutus" spy smooth duration={500} className={`${linkText} block py-2`} onClick={closeMenu}>
                            About Us
                        </ScrollLink>
                        <ScrollLink to="sponsors" spy smooth duration={500} className={`${linkText} block py-2`} onClick={closeMenu}>
                            Sponsors
                        </ScrollLink>
                        <ScrollLink to="faq" spy smooth duration={500} className={`${linkText} block py-2`} onClick={closeMenu}>
                            FAQ
                        </ScrollLink>
                        <ScrollLink to="location" spy smooth duration={500} className={`${linkText} block py-2`} onClick={closeMenu}>
                            Location
                        </ScrollLink>
                        <ScrollLink to="meettheteam" spy smooth duration={500} className={`${linkText} block py-2`} onClick={closeMenu}>
                            Meet the Team
                        </ScrollLink>
                        <ScrollLink to="contactus" spy smooth duration={500} className={`${linkText} block py-2`} onClick={closeMenu}>
                            Contact Us
                        </ScrollLink>
                    </div>
                )}

            </nav>

            <a href="https://mlh.io/seasons/2025/events">
                <img
                    src={MLHBanner}
                    alt="MLH Trust Badge"
                    style={{
                        maxHeight: '150px',
                        position: 'fixed',
                        top: '0px',
                        right: '25px',
                        zIndex: '2000'
                    }}
                />
            </a>
        </div>
    );
}

export default NavBar;
