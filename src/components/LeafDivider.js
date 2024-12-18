import React from 'react';
import Leaf from "../assets/Homepage/LeafBorder.png";

const LeafDivider = () => {
    return (
        <div className="relative w-full h-auto flex justify-center items-center px-0">
            {/* Leaf Divider */}
            <img src={Leaf} alt="Leaf" className="block h-auto w-[100%] sm:w-[120%] md:w-[150%] lg:w-[175%] xl:w-[200%] relative"/>
        </div>
    );
};

export default LeafDivider;
