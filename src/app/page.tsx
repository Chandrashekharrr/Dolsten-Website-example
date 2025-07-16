import Hero from "./components/Hero";
import localFont from "next/font/local";
import Videos from "./components/Videos";
import TextSection from "./components/TextSection";
import Trail from "./components/Trail";
import Numcon from "./components/Numcon";
import Awards from "./components/Awards";
import { MdSubdirectoryArrowRight } from "react-icons/md";
import About from "./components/About";
import Flower from "./components/Flower";
import Model from "./components/Model";
import Service from "./components/Service";

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
          +
          <div className="line w-full h-[0.5px] md:mt-[8px] bg-[#b5b1b7]"></div>
          +
        </div>

        <h1
          className={` text-2xl  md:text-[3vw] pt-10 px-5 uppercase ${neueMon.className}`}
        >
          Featured work
        </h1>

        <Videos
          title="The first AI filmed by AI"
          titleTwo="Arthur the Alien"
          ImageUrl="./Video/brand.mp4"
        />

        <div className="mainSep w-full h-[20px]  flex justify-between items-center text-center gap-3 px-5 text-2xl font-extralight absolute z-0  ">
          +
          <div className="line w-full h-[0.5px] md:mt-[8px] bg-[#b5b1b7]"></div>
          +
        </div>

        <TextSection />

        <Trail />

        <div
          className={` headingAwards ${neueMon.className} w-full pt-10 pb-5 text-[4vw] sm:text-[3vw] uppercase flex justify-evenly sm:justify-between px-5`}
        >
          <h1 className="headingComp">awards</h1>
          <h1 className="headingComp">&</h1>
          <h1 className="headingComp">Recognitions</h1>
        </div>

        <div className="mainSep w-full h-[20px]  flex justify-between items-center text-center gap-3 px-5 text-2xl font-extralight absolute z-0  ">
          +
          <div className="line w-full h-[0.5px] md:mt-[8px] bg-[#b5b1b7]"></div>
          +
        </div>

        <Numcon />

        <Awards />
        <h1 className={`${neueMon.className} text-[3vw] mx-5 mt-5 uppercase`}>
          work
        </h1>
        <Videos
          title="The first AI filmed by AI"
          titleTwo="Arthur the Alien"
          ImageUrl="./Video/brand.mp4"
        />
        <Videos
          title="The first AI powered blind comentary"
          titleTwo="dreamcaster"
          ImageUrl="./Video/brand2.mp4"
        />
        <Videos
          title="The first Real vs ai tennis match"
          titleTwo="mcenroe vs mcenroe"
          ImageUrl="./Video/brand.mp4"
        />

        <div className="btndiv w-full flex justify-center px-5 pb-30">
          <button
            className={` ${neueMon.className} flex justify-center items-center uppercase text-[10px] md:text-xs bg-white px-4 py-2 font-bold text-[#434740] gap-2`}
          >
            <MdSubdirectoryArrowRight className="text-sm md:text-lg font-bold text-[#434740]" />
            show all work
          </button>
        </div>

        <div className="mainSep w-full h-[20px]  flex justify-between items-center text-center gap-3 px-5 text-2xl font-extralight z-0  ">
          +
          <div className="line w-full h-[0.5px] md:mt-[8px] bg-[#b5b1b7]"></div>
          +
        </div>

        <About/>
        <Flower/>
        <Model/>
        <Service/>


      </div>








    </>
  );
}
