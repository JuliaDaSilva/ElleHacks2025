import React from 'react';

import "../fonts/fonts.css"

import { ReactComponent as Bee } from "../assets/Homepage/Bee.svg";

const HomePage = () => {
    return (
        <div className="overflow-hidden h-[100vh] flex flex-col items-center justify-center px-4 bg-[#FBF6EB] w-screen">
            {/* Main Title */}
            <h1 className="text-7xl md:text-9xl font-[Faustina] font-bold text-[#555F49] mt-20 mb-2 z-10 select-none">
                ElleHacks
            </h1>

            {/* Event Date */}
            <p className="text-sm sm:text-1xl md:text-2xl font-[InterSemiBold] text-black text-shadow mb-2 z-10 select-none">
                February 14 - 16, 2025 <span className="text-sm sm:text-base">•</span>  In-person event
            </p>

            {/* Slogan */}
            <p className="text-sm sm:text-1xl md:text-2xl font-[Inter] text-black text-shadow mb-4 z-10 select-none">
                Where innovation meets inclusivity
            </p>

            <div className="relative">
                {/* Login Button */}
                <button className="LoginButton font-[Inter] mb-10 md:mb-20 z-10 px-4 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 w-full sm:w-auto md:w-auto lg:w-auto bg-[#555F49] text-white font-bold rounded-full hover:bg-[#D8AA6C] transition duration-300 ease-in-out">
                    Apply Now
                </button>

                {/* Bee SVG with responsive positioning */}
                <Bee className="absolute top-[90px] right-[30px] w-41 h-41 z-10
                       sm:top-[64px] sm:right-[110px] 
                       md:top-[-110px] md:right-[-325px] 
                       lg:top-[-110px] lg:right-[-325px]" />
            </div>
        </div>
    );
};

export default HomePage;
