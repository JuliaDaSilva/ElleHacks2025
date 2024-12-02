import React, { useState } from "react";
import TeamMember from "./TeamMember";
import teams from "./teamData";
import "../../fonts/fonts.css";

const teamNameMapping = {
  coChairs: "Co-Chairs",
  it1: "IT Team",
  it2: "IT Team",
  logistics1: "Logistics Team",
  logistics2: "Logistics Team",
  marketing1: "Marketing Team",
  marketing2: "Marketing Team",
  sponsorship1: "Sponsorship Team",
  sponsorship2: "Sponsorship Team",
};

function MeetTheTeam() {
  const [currentTeamIndex, setCurrentTeamIndex] = useState(0);
  const teamKeys = Object.keys(teams);
  const nextTeam = () =>
    setCurrentTeamIndex((prevIndex) => (prevIndex + 1) % teamKeys.length);
  const prevTeam = () =>
    setCurrentTeamIndex(
      (prevIndex) => (prevIndex - 1 + teamKeys.length) % teamKeys.length
    );

  const currentTeamKey = teamKeys[currentTeamIndex];
  const currentTeamMembers = teams[currentTeamKey];
  const teamName = teamNameMapping[currentTeamKey] || currentTeamKey;

  return (
    <div className="flex flex-col items-center p-6 font-[Faustina] text-[#545353] select-none">
      {/* Container for content */}
      <div className="w-full max-w-screen-xl px-4">
        <h2 className="text-4xl sm:text-5xl md:text-6xl mb-4 text-left text-[#555F49] font-bold">
          Meet The Team
        </h2>
        <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4 text-left">
          {teamName}
        </h2>

        {/* Team Members */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {currentTeamMembers.map((member, index) => (
            <TeamMember
              key={index}
              name={member.name}
              title={member.title}
              image={member.image}
            />
          ))}
        </div>

        {/* Navigation */}
        <div className="flex justify-center items-center font-[Faustina] text-[#555F49]">
          <button
            className="p-2 rounded-full hover:bg-[#D8AA6C] w-8 h-8 flex justify-center items-center"
            onClick={prevTeam}
          >
            <div className="w-0 h-0 border-t-[8px] border-t-transparent border-r-[12px] border-r-current border-b-[8px] border-b-transparent"></div>
          </button>

          <span className="text-xl mx-4">
            {currentTeamIndex + 1} / {teamKeys.length}
          </span>

          <button
            className="p-2 rounded-full hover:bg-[#D8AA6C] w-8 h-8 flex justify-center items-center"
            onClick={nextTeam}
          >
            <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-current border-b-[8px] border-b-transparent"></div>
          </button>
        </div>


      </div>
    </div>
  );
}

export default MeetTheTeam;
