import React from 'react';
import "../fonts/fonts.css";
import MLHLogo from "../assets/Homepage/MLHLogo.svg";
import Bee from "../assets/Homepage/Bee.svg";

const HeroSection = () => {
    return (
        <section className="w-full h-screen sm:h-[80vh] bg-[#ECEBCE] select-none mt-20">
            {/* Mobile Layout */}
            <div className="flex flex-col items-center justify-center h-full sm:hidden px-6">
                <h1 className="text-6xl font-['Faustina'] font-bold text-[#555F49] mb-2">ElleHacks 2025</h1>
                <p className="text-xl text-black font-['Faustina'] mb-0">February 14-16, 2025 · In-person event</p>

                {/* Logo and "Official Member" Text */}
                <a href="https://mlh.io/seasons/2025/events" target="_blank" rel="noopener noreferrer" className="flex items-center no-underline">
                    <img src={MLHLogo} alt="MLH Logo" className="mr-2 w-11 h-11 -mb-1" />
                    <span className="font-['Faustina'] text-xl font-semibold text-[#555F49] no-underline">Official Member</span>
                </a>

                <img src={Bee} alt="Bee" className="w-[326px] h-[196px] mt-2" />
            </div>

            {/* Desktop Layout */}
            <div className="hidden sm:flex items-center justify-start h-full px-5 sm:px-12 lg:px-24 xl:px-36 xl:mx-64 ">
                <div className="text-left ml-6 max-w-screen-xl">
                    {/* Main title */}
                    <h1 className="sm:text-7xl md:text-7xl lg:text-8xl xl:text-9xl font-['Faustina'] font-bold text-[#555F49] mb-3">
                        ElleHacks 2025
                    </h1>
                    {/* Flex container for date, "in-person event", and MLH */}
                    <div className="flex sm:flex-col md:flex-row sm:items-start md:items-center sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl font-['Faustina'] text-[#555F49]">
                        {/* Date and event details */}
                        <p className="whitespace-nowrap mb-3 sm:mb-1 md:mb-0">February 14-16, 2025 · In-person event ·</p>

                        {/* MLH Logo and "Official Member" Text */}
                        <a
                            href="https://mlh.io/seasons/2025/events"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center no-underline"
                        >
                            <img src={MLHLogo} alt="MLH Logo" className="ml-1 mr-2 w-13 h-13 -mt-2" />
                            <p className="text-[#555F49] whitespace-nowrap">Official Member</p>
                        </a>
                    </div>
                </div>
                {/* Bee image */}
                <img
                    src={Bee}
                    alt="Bee"
                    className="relative 
                    sm:w-[230px] sm:top-[-130px] sm:right-[95px]
                    md:w-[246px] md:top-[-85px] md:right-[150px]
                    lg:w-[326.44px] lg:top-[-100px]
                    xl:top-[-120px] xl:right-[90px]"
                />

            </div>
        </section>
    );
};

export default HeroSection;
