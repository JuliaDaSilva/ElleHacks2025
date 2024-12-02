import React from 'react';
import "../../fonts/fonts.css";

function TeamMember({ name, title, image }) {
  return (
    <div className="bg-[#9DAF87] p-4 w-45 text-left rounded-md shadow flex flex-col items-start max-w-xs mx-auto">
      <div className="relative w-32 md:w-40 mx-auto">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-auto object-contain rounded-md" 
        />
      </div>
      <div className="mt-4 font-[Faustina] text-white">
        <h3 className="text-sm">{name}</h3>
        <p className="text-md">{title}</p>
      </div>
    </div>
  );
}

export default TeamMember;
