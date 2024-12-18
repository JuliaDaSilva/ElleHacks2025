import React from 'react';

// Gold Sponsors
// import Scotiabank from '../assets/Sponsors/Scotiabank.png';
// import Envronics from '../assets/Sponsors/environics.png';
// import Lassonde from '../assets/Sponsors/Lassonde.png';

// Bronze Sponsors
// import PG from '../assets/Sponsors/P&G.png';
import KPM from '../assets/Sponsors/KPM.png';
// import CSE_CST from '../assets/Sponsors/CSE_CST.png';
// import Accenture from '../assets/Sponsors/accenture.png';
// import CGI from '../assets/Sponsors/CGI.png';

// Community Sponsors
// import Reactor from '../assets/Sponsors/Reactor.png';
// import BramptionInnovationDistrict from '../assets/Sponsors/Brampton_Innovation.png';
import StandOutSticker from '../assets/Sponsors/StandOutSticker.png';
import LevelUp from '../assets/Sponsors/LevelUp.png';

function Sponsors() {
  return (
    <div className="mt-20 font-[Faustina] h-auto px-4 mx-auto lg:mx-20 xl:mx-64 mb-32 select-none w-full max-w-screen-xl">
      <h2 className="text-4xl sm:text-5xl md:text-5xl mb-4 text-left text-[#555F49] font-bold">
       Meet our Sponsors!
      </h2>

      {/* Gold Sponsors */}
      {/* <div className="mb-8">
        <h2 className="text-[#545353] text-3xl sm:text-4xl md:text-4xl mb-4 text-left">
          Gold Sponsors
        </h2>
        <div className="flex flex-col gap-4 mb-8 items-center justify-center">
          <div className="w-full h-48 bg-white rounded-full flex justify-center items-center">
            <img src={Scotiabank} alt="Scotiabank" className="h-20 sm:h-32 object-contain" />
          </div>
          <div className="w-full h-48 bg-white rounded-full flex justify-center items-center">
            <img src={Envronics} alt="Envrionics" className="h-32 sm:h-40 object-contain" />
          </div>
          <div className="w-full h-48 bg-white rounded-full flex justify-center items-center">
            <img src={Lassonde} alt="Lassonde" className="h-20 sm:h-32 object-contain" />
          </div>
        </div>
      </div> */}

      {/* Bronze Sponsors */}
      <div className="mb-8">
        {/* <h2 className="text-[#545353] text-3xl sm:text-4xl md:text-3xl mb-4 text-left">
          Bronze Sponsors
        </h2> */}
        <div className="flex flex-wrap gap-4 mb-8 justify-center">
          <div className="w-80 h-50 md:w-96 md:h-96 bg-white rounded-full flex justify-center items-center">
            <img src={KPM} alt="Bronze Sponsor" className="h-48 object-contain" />
          </div>
         </div>
        </div>
      <div className="mb-8">
        {/* <h2 className="text-[#545353] text-3xl sm:text-4xl md:text-4xl mb-4 text-left">
          Community Sponsors
        </h2> */}
        <div className="flex flex-wrap gap-4 mb-8 justify-center">
          <div className="w-64 h-40 md:w-88 sm:h-48 bg-white rounded-full flex justify-center items-center">
            <img src={StandOutSticker} alt="Community Sponsor" className="h-16 sm:h-24 object-contain" />
          </div>
          <div className="w-64 h-40 md:w-88 sm:h-48 bg-white rounded-full flex justify-center items-center">
            <img src={LevelUp} alt="Community Sponsor" className="h-16 sm:h-24 object-contain" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sponsors;
