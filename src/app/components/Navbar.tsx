"use client";
import { IBM_Plex_Mono } from "next/font/google";
import localFont from "next/font/local";
import { useState } from "react";

const plexMono = IBM_Plex_Mono({
  weight: "700",
  subsets: ["latin"],
});

const neueMon = localFont({
  src: "../../../public/Fonts/Neu.ttf",
});

export default function Navbar() {
  const [Clicked, setClicked] = useState(true);

  const handleclick = () => {
    setClicked(!Clicked);
  };







  return (
    <>
      <div className="mainNAv w-full h-20 px-8 flex justify-between items-center z-30 fixed ">
        <div
          className={`${plexMono.className} NavComp  gap-12 uppercase text-[#434740] text-[14px] hidden md:flex`}
        >
          <h1>Awards</h1>
          <h1>WORK</h1>
        </div>
        <div
          className={` ${neueMon.className} NavComp w-fit md:w-44 uppercase font-extrabold text-[#434740] text-sm tracking-widest`}
        >
          <h1>DOLSTEN & CO.</h1>
        </div>

        <div
          className={`${plexMono.className} NavComp  gap-12 uppercase text-[#434740] text-[14px] hidden md:flex`}
        >
          <h1>About</h1>
          <h1>Contact</h1>
        </div>

        <div
          onClick={handleclick}
          className="menuOverlay block md:hidden w-fit h-full pt-10 ml-auto gap-2 cursor-pointer z-40"
        >
          {!Clicked ? (
            <>
              <div className="w-12 h-[0.5px] bg-white rotate-45 transition-all duration-700"></div>
              <div className="w-12 h-[0.5px] bg-white -rotate-45 transition-all duration-700"></div>
            </>
          ) : (
            <>
              <div className="w-12 h-[0.5px] bg-white transition-all duration-700"></div>
              <div className="w-12 h-[0.5px] bg-white mt-2 transition-all duration-700"></div>
            </>
          )}
        </div>
      </div>

      {!Clicked ? (
        <div
          className={` ${plexMono.className} overlay w-full h-screen bg-[#222222] block md:hidden relative z-10 transition-all duration-700 text-white text-[20vw] uppercase leading-none pt-80 pl-8 `}
        >
          <h1>awards</h1>
          <h1>about</h1>
          <h1>Work</h1>
          <h1>contact</h1>
        </div>
      ) : (
        <div className="overlay w-0 h-0 bg-[#222222] block md:hidden relative z-10 transition-all duration-700"></div>
      )}
    </>
  );
}
