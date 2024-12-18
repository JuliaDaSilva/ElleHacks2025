import React from 'react';

import Grid from "../assets/AboutUs/Grid.png";
import img1 from "../assets/AboutUs/opening.JPG";
import img2 from "../assets/AboutUs/TeamPic.JPG";

const AboutUs = () => {
    return (
        <div className="flex flex-col lg:flex-row items-left justify-center w-full px-4 mx-auto lg:mx-20 xl:mx-64 max-w-screen-xl mt-20">

            {/* About Us Text */}
            <div className="flex-1 text-left font-[Faustina] mx-auto">
                <h1 className="text-[#555F49] font-bold text-sm md:text-2xl lg:text-3xl">
                    ElleHacks is one of Canada’s largest hackathons for women and gender-diverse students, running for its 9th iteration!
                </h1>
                <br />
                <p className="text-[#545353] text-sm md:text-xl lg:text-2xl">
                    We're a free, student-run, and beginner-friendly competition serving as your canvas to pitch bold solutions to global challenges, participate in engaging workshops, and connect with a diverse community of recruiters, industry professionals, and peers.
                </p>
                <br />
                <p className="text-[#545353] text-sm md:text-xl lg:text-2xl">
                    No coding experience? No problem! ElleHacks is designed for everyone, from tech enthusiasts to those taking their first steps in the digital world.
                </p>
            </div>

            {/* About Us Photos */}
            <div className="flex-1 relative flex justify-center lg:justify-end">

                <img src={Grid} alt="Grid" className="z-10 w-full max-w-[250px] sm:max-w-[300px] md:max-w-[350px] h-auto object-contain" />

                <div clasName="relative inline-block">

                    <img src={img1} alt="Opening img"
                        className="absolute z-10 rounded-xl 
                        w-[43%] left-[5%] top-[5%]
                        sm:w-[40%] sm:left-[5%] sm:top-[5%]
                        md:w-[35%] md:left-[10%] md:top-[5%]
                        lg:w-[50%] lg:left-[10%] lg:top-[10%]
                        xl:left-[20%] xl:top-[5%]"
                    />
                </div>

                <div clasName="relative inline-block">
                    <img src={img2} alt="Team img"
                        className="absolute z-10 rounded-xl
                    w-[43%] right-[5%] bottom-[5%]
                    sm:w-[40%] sm:right-[5%] sm:bottom-[5%]
                    md:w-[35%] md:right-[10%] md:bottom-[5%]
                    lg:w-[50%] lg:right-[5%] lg:bottom-[10%]
                    xl:w-[50%] xl:right-[5%] xl:bottom-[3%]"/>
                </div>
            </div>
        </div>
    );
};

export default AboutUs; 