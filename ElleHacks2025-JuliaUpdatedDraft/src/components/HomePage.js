import React from 'react';
import "../fonts/fonts.css";
import MLHLogo from "../assets/Homepage/MLHLogo.svg";
import Bee from "../assets/Homepage/Bee.svg";

const HeroSection = () => {
    return (
        <section className="relative w-full h-[70vh] sm:h-screen bg-[#ECEBCE] select-none overflow-hidden flex flex-col justify-center items-center pt-20 sm:pt-64">
            {/* Mobile Layout */}
            <div className="flex flex-col items-center justify-center sm:hidden px-6">
                <h1 className="text-6xl font-['Faustina'] font-bold text-[#555F49] m-0 leading-none">ElleHacks 2025</h1>
                <p className="text-xl text-black font-['Faustina'] m-0 leading-none">February 14-16, 2025 · In-person event</p>

                {/* Logo and "Official Member" Text */}
                <a href="https://mlh.io/seasons/2025/events" target="_blank" rel="noopener noreferrer" className="flex items-center no-underline">
                    <img src={MLHLogo} alt="MLH Logo" className="mr-2 w-11 h-11" />
                    <span className="font-['Faustina'] text-xl font-semibold text-[#555F49] leading-none">Official Member</span>
                </a>

                <img src={Bee} alt="Bee" className="w-[326px] h-[196px] mt-2" />
            </div>

            {/* Desktop Layout */}
            <div className="relative hidden sm:flex flex-col justify-center items-start w-full px-4 mx-auto lg:mx-20 xl:mx-64 max-w-screen-xl">
                <div className="text-left ml-6">
                    {/* Main title */}
                    <h1 className="sm:text-7xl md:text-7xl lg:text-8xl xl:text-9xl font-['Faustina'] font-bold text-[#555F49] m-0 leading-none">
                        ElleHacks 2025
                    </h1>
                    {/* Flex container for date, "in-person event", and MLH */}
                    <div className="flex sm:flex-col md:flex-row sm:items-start md:items-center sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl font-['Faustina'] text-[#555F49] leading-none mt-1">
                        <p className="whitespace-nowrap m-0 leading-none">February 14-16, 2025 · In-person event ·</p>

                        {/* MLH Logo and "Official Member" Text */}
                        <a
                            href="https://mlh.io/seasons/2025/events"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center no-underline"
                        >
                            <img src={MLHLogo} alt="MLH Logo" className="ml-1 mr-2 w-13 h-13 -mt-2" />
                            <p className="text-[#555F49] whitespace-nowrap m-0 leading-none">Official Member</p>
                        </a>
                    </div>
                </div>

                {/* Bee image */}
                <img
                    src={Bee}
                    alt="Bee"
                    className="absolute 
                    sm:w-[230px] sm:top-[-130px] sm:right-[95px]
                    md:w-[246px] md:top-[-85px] md:right-[150px]
                    lg:w-[326px] lg:top-[-100px]
                    xl:top-[-120px] xl:right-[90px]"
                />
            </div>
        </section>
    );
};

export default HeroSection;
