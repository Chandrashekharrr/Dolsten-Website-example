import Hero from "./components/Hero";
import localFont from "next/font/local";
import Videos from "./components/Videos";
import TextSection from "./components/TextSection";


const neueMon = localFont({
  src: "../../public/Fonts/Neu.ttf",
});



export default function Home() {
  return (
    <>
      <div className="main bg-[#e3deea] w-full h-screen ">
        <div className="mainSep w-full h-[20px] flex justify-between fixed items-center text-center gap-3 px-5 text-2xl font-extralight top-17 z-20 ">
          +
          <div className="line w-full h-[0.2px] mt-0 md:mt-[8px] bg-[#b5b1b7]"></div>
          +
        </div>
        <Hero />

        <div className="mainSep w-full h-[20px]  flex justify-between items-center text-center gap-3 px-5  text-2xl font-extralight absolute z-0  ">
          +<div className="line w-full h-[0.5px] md:mt-[8px] bg-[#b5b1b7]"></div>+
        </div>

        <h1 className={` text-2xl  md:text-[3vw] pt-10 px-5 uppercase ${neueMon.className}`}>
          Featured work
        </h1>

        <Videos/>

        <div className="mainSep w-full h-[20px]  flex justify-between items-center text-center gap-3 px-5 text-2xl font-extralight absolute z-0  ">
          +<div className="line w-full h-[0.5px] md:mt-[8px] bg-[#b5b1b7]"></div>+
        </div>
        
        <TextSection/>
       

        

      </div>
    </>
  );
}
