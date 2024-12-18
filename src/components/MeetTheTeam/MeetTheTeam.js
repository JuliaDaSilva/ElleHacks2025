import React, { useState, useEffect, useCallback } from "react";
import TeamMember from "./TeamMember";
import teams from "./teamData";
import "../../fonts/fonts.css";
import PlantL from "../../assets/MeetTheTeam/PlantL.png";
import PlantR from "../../assets/MeetTheTeam/PlantR.png";

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

  const nextTeam = useCallback(() => {
    setCurrentTeamIndex((prevIndex) => (prevIndex + 1) % teamKeys.length);
  }, [teamKeys.length]);

  const prevTeam = () =>
    setCurrentTeamIndex((prevIndex) => (prevIndex - 1 + teamKeys.length) % teamKeys.length);

  useEffect(() => {
    const intervalId = setInterval(nextTeam, 2000);

    return () => clearInterval(intervalId);
  }, [nextTeam]); 


  const currentTeamKey = teamKeys[currentTeamIndex];
  const currentTeamMembers = teams[currentTeamKey];
  const teamName = teamNameMapping[currentTeamKey] || currentTeamKey;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen relative p-6 font-[Faustina] text-[#545353] select-none overflow-hidden">
      {/* Background Plants */}
      <img
        src={PlantL}
        alt="Top Left"
        className="absolute top-[-30px] sm:top-[-50px] lg:top-[-80px] left-0 z-0 lg:w-[420px]"
      />

      <img
        src={PlantR}
        alt="Bottom Right"
        className="absolute bottom-[40px] md:bottom-[-50px] right-0 h-auto z-0 lg:w-[420px]"
      />

      {/* Meet The Team Container */}
      <div className="w-full max-w-screen-xl px-4 z-1 mt-40 mb-40">
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

        {/* Team Navigation Buttons */}
        <div className="absolute bottom-6 left-0 right-0 flex justify-center items-center font-[Faustina] text-[#555F49] z-10 lg:relative lg:bottom-auto sm:flex-row sm:space-x-4">
          <button
            className="p-5 rounded-full w-10 h-10 flex justify-center items-center"
            onClick={prevTeam}
          >
            <div className="w-0 h-0 border-t-[16px] border-t-transparent border-r-[24px] border-r-current border-b-[16px] border-b-transparent"></div>
          </button>

          <span className="text-2xl mx-4">
            {currentTeamIndex + 1} / {teamKeys.length}
          </span>

          <button
            className="p-3 rounded-full w-16 h-16 flex justify-center items-center"
            onClick={nextTeam}
          >
            <div className="w-0 h-0 border-t-[16px] border-t-transparent border-l-[24px] border-l-current border-b-[16px] border-b-transparent"></div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default MeetTheTeam;
