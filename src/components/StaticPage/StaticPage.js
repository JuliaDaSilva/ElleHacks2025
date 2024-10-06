import React from 'react';
import './StaticPage.css';

const StaticPage = () => {

    // Automated email function for sponsorship button
    const handleEmailClick = () => {

        // Email Address
        const email = "sponsors@ellehacks.com";

        // Email Subject
        const subject = "ElleHacks 2025 Sponsorship Inquiry";

        // Automatically opens email client
        window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
    };

    return (
        <div className="h-screen flex flex-col items-center justify-center bg-[#899878] px-4"> 
            <img
                src={`${process.env.PUBLIC_URL}/ElleHacksLogo.png`}
                alt="ElleHacks Logo"
                className="w-3/5 md:w-1/4 lg:w-1/6 h-auto mb-6 hover-up-down"
            />

            <h1 className="text-5xl sm:text-6xl md:text-9xl font-[LondrinaSolid] text-white text-shadow mb-2">
                ElleHacks
            </h1>

            <p className="text-2xl sm:text-4xl font-[LondrinaSolid] text-white text-shadow mb-4"> 
                February 14 - 16, 2025
            </p>

            <button className="sponsorButton font-[LondrinaSolid] mb-10 md:mb-20" onClick={handleEmailClick}> 
                Interested in Sponsoring?
            </button>
        </div>
    )
};

export default StaticPage;


