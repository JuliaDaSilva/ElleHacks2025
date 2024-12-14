import React from 'react';
import Leaf from "../assets/Homepage/LeafBorder.png";

function AboutUs() {
  return (
    <div className="bg-white h-[20vh] relative overflow-visible">
      {/* Leaf Divider */}
      <img
        src={Leaf} alt="Leaf" className=" absolute h-auto z-0
        top-[-370px] sm:top-[-450px] md:top-[-500px] xl:top-[-500px] 
        w-[150%] sm:w-[175%] md:w-[200%] lg:w-[225%] xl:w-[250%]"
      />

      {/* About Us Content */}
      <div>
        About Us
      </div>
    </div>
  );
}

export default AboutUs;
