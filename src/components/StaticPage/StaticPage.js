import React from 'react';
import './StaticPage.css';

const StaticPage = () => {
    const handleEmailClick = () => {
        const email = "sponsors@ellehacks.com"; // Email Address
        const subject = "ElleHacks 2025 Sponsorship Inquiry"; // Email Subject
        window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}`; // Automatically opens email client
    };

    return (
        <div className="h-screen flex flex-col items-center justify-center px-4 bg-[#EDDEC9]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_600px_at_50%_200px,#899878,transparent)]"></div>

            {/* Logo Image */}
            <img
                src={`${process.env.PUBLIC_URL}/ElleHacksLogo.png`}
                alt="ElleHacks Logo"
                className="w-1/3 sm:w-1/2 md:w-1/4 lg:w-1/6 h-auto mb-6 hover-up-down z-10"
            />

            {/* Main Title */}
            <h1 className="text-7xl sm:text-8xl md:text-9xl font-[LondrinaSolid] text-white text-shadow mb-2 z-10">
                ElleHacks
            </h1>

            {/* Event Date */}
            <p className="text-2xl sm:text-4xl font-[LondrinaSolid] text-white text-shadow mb-4 z-10">
                February 14 - 16, 2025
            </p>

            {/* Sponsorship Button */}
            <button className="sponsorButton font-[LondrinaSolid] mb-10 md:mb-20 z-10" onClick={handleEmailClick}>
                Interested in Sponsoring?
            </button>
        </div>
    );
};

export default StaticPage;
