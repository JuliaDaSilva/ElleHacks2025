import React from 'react';
import "../fonts/fonts.css";

function Location() {
  return (
    <div className="flex justify-center items-center font-[Faustina] p-5 bg-[#899878] text-[#EDDEC9] select-none mt-20">
      <div className="w-full max-w-[1050px] text-white">

        {/* Content Section */}
        <div className="flex flex-col sm:flex-row gap-5">

          {/* Address and Title Section */}
          <div className="flex-1 sm:w-[45%] text-center sm:text-left">
            <h1 className="text-6xl sm:text-7xl md:text-6xl lg:text-7xl mt-10 mb-6 font-bold">Location</h1>
            <p className="text-xl sm:text-1xl md:text-2xl">Second Student Centre</p>
            <p className="text-lg sm:text-1xl">15 Library Ln, North York, ON M3J 2S 5</p>
          </div>

          {/* Google Map Section */}
          <div className="flex-1 sm:w-[55%] relative pb-[56.25%] sm:pb-[30%] overflow-hidden rounded-lg shadow-lg mb-6 sm:mb-0">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2881.0658317825014!2d-79.50628672381693!3d43.7714922710967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b2e258e6f6e4d%3A0x55e10c9ba7b8b997!2sSecond%20Student%20Centre!5e0!3m2!1sen!2sca!4v1733076484063!5m2!1sen!2sca"
              title="Google Map"
              className="absolute top-0 left-0 w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Location;
