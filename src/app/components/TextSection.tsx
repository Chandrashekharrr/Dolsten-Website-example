import localFont from "next/font/local";
import { IBM_Plex_Mono } from "next/font/google";



const neueMon = localFont({
  src: "../../../public/Fonts/Neu.ttf",
});

const plexMono = IBM_Plex_Mono({
  weight: "700",
  subsets: ["latin"],
});


export default function TextSection(){





    return(
        <div className="TextSection py-10 w-full  px-5 gap-5 sm:gap-32 flex flex-col">
        
         <h1 className={`${neueMon.className} text-[7vw] font-medium sm:text-[6vw] leading-none  md:w-[90%]`}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We are an AI-first creative studio for brands, artists and our very own creations.</h1>


         <p  className={`${plexMono.className} text-[#434740] uppercase text-xs sm:text-sm w-80 m-0 leading-3.5 md:leading-4 break-all ml-0 sm:ml-[50%]`}>We’re not a special department or a deck capability. This is what we do, every day. We concept, code, craft, and deploy with AI at the core. We’ve built the first real vs. AI tennis match. Helped a blind man call a basketball game through custom tech. And we’re telling the story of an alien stuck on Earth—without picking up a camera.</p>

        <div className="mainSep w-full h-[20px]  flex justify-between items-center text-center gap-3 text-2xl font-extralight z-0  ">
          +<div className="line w-full h-[0.5px] md:mt-[8px] bg-[#b5b1b7]"></div>+
        </div>

        </div>
    )
}