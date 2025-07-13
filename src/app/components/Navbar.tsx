'use client';

import { IBM_Plex_Mono } from "next/font/google";
import localFont from "next/font/local";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import SplitType from 'split-type';

const plexMono = IBM_Plex_Mono({
  weight: "700",
  subsets: ["latin"],
});

const neueMon = localFont({
  src: "../../../public/Fonts/Neu.ttf",
});

export default function Navbar() {
  const [Clicked, setClicked] = useState(true);
  const textRefs = useRef<HTMLHeadingElement[]>([]);

  const handleClick = () => {
    setClicked(prev => !prev);
  };

  useEffect(() => {
    if (!Clicked && textRefs.current.length) {
      // Split and animate each h1
      textRefs.current.forEach((el) => {
        const split = new SplitType(el, { types: "chars" });

        gsap.fromTo(split.chars, {
          y: 100,
          duration: 0.6,
          ease: 'power2.out'
        },
        {
        y: -100,
          duration: 0.6,
          ease: 'power2.out'
        
        });
      });
    }
  }, [Clicked]);

  return (
    <>
      <div className="mainNAv w-full h-20 flex justify-between items-center z-30 fixed px-8">
        {/* Left */}
        <div className={`${plexMono.className} NavComp gap-12 uppercase text-[#434740] text-[14px] hidden md:flex`}>
          <h1>Awards</h1>
          <h1>WORK</h1>
        </div>

        {/* Center */}
        {!Clicked ? (
          <div className={`${neueMon.className} NavComp w-fit md:w-44 uppercase font-extrabold text-white text-sm tracking-widest transition-all duration-700`}>
          <h1>DOLSTEN & CO.</h1>
        </div>
      ):(
        <div className={`${neueMon.className} NavComp w-fit md:w-44 uppercase font-extrabold text-[#434740] text-sm tracking-widest transition-all duration-700`}>
          <h1>DOLSTEN & CO.</h1>
        </div>
      )}
        

        {/* Right */}
        <div className={`${plexMono.className} NavComp gap-12 uppercase text-[#434740] text-[14px] hidden md:flex`}>
          <h1>About</h1>
          <h1>Contact</h1>
        </div>

        {/* Mobile Menu Toggle */}
        <div
          onClick={handleClick}
          className="menuOverlay block md:hidden w-fit h-full pt-10 ml-auto gap-2 cursor-pointer z-40"
        >
          {!Clicked ? (
            <>
              <div className="w-12 h-[0.5px] bg-white rotate-45 transition-all duration-700"></div>
              <div className="w-12 h-[0.5px] bg-white -rotate-45 transition-all duration-700"></div>
            </>
          ) : (
            <>
              <div className="w-12 h-[0.5px] bg-[#434740] transition-all duration-700"></div>
              <div className="w-12 h-[0.5px] bg-[#434740] mt-2 transition-all duration-700"></div>
            </>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {!Clicked ? (
        <div className={`${plexMono.className} overlay w-full h-screen bg-[#222222] block md:hidden fixed z-20 transition-all duration-700 text-white text-[20vw] uppercase leading-none pt-[60vh] overflow-hidden pl-8`}>
          {["awards", "about", "work", "contact"].map((text, index) => (
            <h1
              key={index}
              ref={(el) => {
                if (el) textRefs.current[index] = el;
              }}
            >
              {text}
            </h1>
          ))}
        
        </div>
      ) : (
        <div className="overlay w-full h-0 bg-[#222222] block md:hidden fixed z-10 transition-all duration-700"></div>
        
      )}

    </>
  );
}
