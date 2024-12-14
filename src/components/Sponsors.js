import React from 'react';

// Gold Sponsors
import Scotiabank from '../assets/Sponsors/Scotiabank.png';
import Envronics from '../assets/Sponsors/environics.png';
import Lassonde from '../assets/Sponsors/Lassonde.png';

// Bronze Sponsors
import PG from '../assets/Sponsors/P&G.png';
import KPM from '../assets/Sponsors/KPM.png';
import CSE_CST from '../assets/Sponsors/CSE_CST.png';
import Accenture from '../assets/Sponsors/accenture.png';
import CGI from '../assets/Sponsors/CGI.png';

// Community Sponsors
import Reactor from '../assets/Sponsors/Reactor.png';
import BramptionInnovationDistrict from '../assets/Sponsors/Brampton_Innovation.png';
import StickerMule from '../assets/Sponsors/sticker_mule.png';
import ySpace from '../assets/Sponsors/yspace.png';

function Sponsors() {
  return (
    <div className="mt-20 font-[Faustina] h-auto px-4 mx-auto lg:mx-20 xl:mx-64 mb-32 select-none w-full max-w-screen-xl">
      <h2 className="text-4xl sm:text-5xl md:text-5xl mb-4 text-left text-[#555F49] font-bold">
        Last Year's Sponsors!
      </h2>

      {/* Gold Sponsors */}
      <div className="mb-8">
        <h2 className="text-[#545353] text-3xl sm:text-4xl md:text-4xl mb-4 text-left">
          Gold Sponsors
        </h2>
        <div className="flex flex-col gap-4 mb-8 items-center justify-center">
          <div className="w-full h-24 bg-[#C5BAA3] rounded-full flex justify-center items-center">
            <img src={Scotiabank} alt="Scotiabank" className="h-10 sm:h-16 object-contain" />
          </div>
          <div className="w-full h-24 bg-[#C5BAA3] rounded-full flex justify-center items-center">
            <img src={Envronics} alt="Envrionics" className="h-16 sm:h-20 object-contain" />
          </div>
          <div className="w-full h-24 bg-[#C5BAA3] rounded-full flex justify-center items-center">
            <img src={Lassonde} alt="Lassonde" className="h-10 sm:h-16 object-contain" />
          </div>
        </div>
      </div>

      {/* Bronze Sponsors */}
      <div className="mb-8">
        <h2 className="text-[#545353] text-3xl sm:text-4xl md:text-4xl mb-4 text-left">
          Bronze Sponsors
        </h2>
        <div className="flex flex-wrap gap-4 mb-8 justify-center">
          <div className="w-44 h-24 bg-[#C5BAA3] rounded-full flex justify-center items-center">
            <img src={PG} alt="Bronze Sponsor" className="h-16 sm:h-20 object-contain" />
          </div>
          <div className="w-44 h-24 bg-[#C5BAA3] rounded-full flex justify-center items-center">
            <img src={KPM} alt="Bronze Sponsor" className="h-16 object-contain" />
          </div>
          <div className="w-44 h-24 bg-[#C5BAA3] rounded-full flex justify-center items-center">
            <img src={CSE_CST} alt="Bronze Sponsor" className="h-16 sm:h-20 object-contain" />
          </div>
          <div className="w-44 h-24 bg-[#C5BAA3] rounded-full flex justify-center items-center">
            <img src={Accenture} alt="Bronze Sponsor" className="h-10 object-contain" />
          </div>
          <div className="w-44 h-24 bg-[#C5BAA3] rounded-full flex justify-center items-center">
            <img src={CGI} alt="Bronze Sponsor" className="h-10 sm:h-12 object-contain" />
          </div>
        </div>
      </div>

      {/* Community Sponsors */}
      <div className="mb-8">
        <h2 className="text-[#545353] text-3xl sm:text-4xl md:text-4xl mb-4 text-left">
          Community Sponsors
        </h2>
        <div className="flex flex-wrap gap-4 mb-8 justify-center">
          <div className="w-44 h-24 bg-[#C5BAA3] rounded-full flex justify-center items-center">
            <img src={Reactor} alt="Community Sponsor" className="h-12 object-contain" />
          </div>
          <div className="w-44 h-24 bg-[#C5BAA3] rounded-full flex justify-center items-center">
            <img src={BramptionInnovationDistrict} alt="Community Sponsor" className="h-12 object-contain" />
          </div>
          <div className="w-44 h-24 bg-[#C5BAA3] rounded-full flex justify-center items-center">
            <img src={StickerMule} alt="Community Sponsor" className="h-12 object-contain" />
          </div>
          <div className="w-44 h-24 bg-[#C5BAA3] rounded-full flex justify-center items-center">
            <img src={ySpace} alt="Community Sponsor" className="h-12 object-contain" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sponsors;
