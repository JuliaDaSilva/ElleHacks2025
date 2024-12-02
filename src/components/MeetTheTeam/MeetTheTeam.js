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
    <div className="flex flex-col items-center min-h-screen p-6 font-[Faustina] text-[#545353] select-none">
      {/* Container for content */}
      <div className="w-full max-w-6xl">
        <h2 className="text-4xl sm:text-5xl md:text-6xl mb-4 text-left text-[#555F49] font-bold">
          Meet The Team
        </h2>
        <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4 text-left">
          {teamName}
        </h2>

        {/* Team Members */}
        <div className="flex flex-wrap justify-center gap-4">
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
        <div className="flex justify-center items-center mt-8">
          <button
            className="bg-gray-300 p-2 rounded-full hover:bg-gray-400"
            onClick={prevTeam}
          >
            &larr;
          </button>

          <span className="text-xl mx-4">
            {currentTeamIndex + 1} / {teamKeys.length}
          </span>

          <button
            className="bg-gray-300 p-2 rounded-full hover:bg-gray-400"
            onClick={nextTeam}
          >
            &rarr;
          </button>
        </div>
      </div>
    </div>
  );
}

export default MeetTheTeam;
