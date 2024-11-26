import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import ElleHacksLogo from "../assets/ElleHacksLogo.png";

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

    const linkText = "text-black text-sm font-medium cursor-pointer hover:text-gray-700 transition duration-300 ease-in-out no-underline select-none";

    return (
        <div>
            {/* MLH Trust Badge */}
            <a
                id="mlh-trust-badge"
                style={{ display: 'block', maxWidth: '100px', minWidth: '60px', position: 'fixed', right: '50px', top: '0', width: '10%', zIndex: 10000 }}
                href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2025-season&utm_content=white"
                target="_blank"
                rel="noreferrer noopener"
            >
                <img
                    src="https://s3.amazonaws.com/logged-assets/trust-badge/2025/mlh-trust-badge-2025-black.svg"
                    alt="Major League Hacking 2025 Hackathon Season"
                    style={{ width: '100%' }}
                />
            </a>

            {/* NavBar */}
            <nav className="fixed top-0 left-0 right-0 bg-[#EDDEC9] bg-opacity-60 shadow-lg z-50">

                {/* Desktop Menu */}
                <div className="max-w-screen-xl mx-auto px-4 py-3 flex justify-between items-center relative">
                    <div>
                        <img
                            src={ElleHacksLogo} 
                            alt="ElleHacks Logo"
                            className="h-9"
                        />
                    </div>

                    {/* Menu Links */}
                    <div className="hidden lg:flex space-x-6 justify-center w-full">
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
                        <ScrollLink to="meettheteam" spy smooth duration={500} className={linkText}>
                            Meet the Team
                        </ScrollLink>
                        <ScrollLink to="location" spy smooth duration={500} className={linkText}>
                            Location
                        </ScrollLink>
                        <ScrollLink to="contactus" spy smooth duration={500} className={linkText}>
                            Contact Us
                        </ScrollLink>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden">
                        <button onClick={toggleMenu} className="text-white text-2xl">
                            Menu
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="lg:hidden absolute top-16 left-0 right-0 bg-[#EDDEC9] bg-opacity-60 py-4 px-6 shadow-lg">
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
                        <ScrollLink to="meettheteam" spy smooth duration={500} className={`${linkText} block py-2`} onClick={closeMenu}>
                            Meet the Team
                        </ScrollLink>
                        <ScrollLink to="location" spy smooth duration={500} className={`${linkText} block py-2`} onClick={closeMenu}>
                            Location
                        </ScrollLink>
                        <ScrollLink to="contactus" spy smooth duration={500} className={`${linkText} block py-2`} onClick={closeMenu}>
                            Contact Us
                        </ScrollLink>
                    </div>
                )}
            </nav>
        </div>
    );
}

export default NavBar;
