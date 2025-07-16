import { IBM_Plex_Mono } from "next/font/google";
import localFont from "next/font/local";

const plexMono = IBM_Plex_Mono({
  weight: "700",
  subsets: ["latin"],
});

const neueMon = localFont({
  src: "../../../public/Fonts/Neu.ttf",
});


export default function About() {
  return (
    <div className="mainAbout w-full h-9/12 md:h-full flex flex-col md:flex-row px-5 py-10 ">


      <div className="parentSep w-full md:w-1/4 h-20 md:h-full">
        <h1 className={`${neueMon.className} uppercase text-[7vw] md:text-[2.5vw] leading-none`}>Dolsten & Co</h1>
      </div>

      
      <div className="parentSep w-full md:w-3/4 h-7/12 gap-10 md:h-full flex flex-col justify-between md:justify-evenly">
      
        <div className="childComp">
          <h1 className={`${plexMono.className} uppercase text-[#434740] text-sm`}>Our belief</h1>
        </div>

        <div className={`childComp ${neueMon.className} text-[7vw] leading-none`}>
          <h1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; AI is just a tool. Until it falls into the right hands.</h1>
        </div>

        <div className={`childComp text-[#434740] flex flex-col md:flex-row gap-10 md:gap-30 `}>
         
          <p className={`${plexMono.className} text-sm leading-none w-full md:w-[25vw] uppercase break-all`}>
            AI doesn’t have intuition or taste. It can’t tell a good idea from a
            bad one–or a very bad one. It’s never built a culture, earned trust,
            or taken a real risk.
          </p>

          <p className={`${plexMono.className} text-sm leading-none w-full md:w-[25vw] uppercase break-all`}>
            It hasn’t won—or lost. If you told it to delete itself, it probably
            would. So yes, AI is just a tool. But in the right hands, it becomes
            something more. It comes alive.
          </p>
        
        </div>  

        <div className="mainSep w-full h-[20px]  flex justify-between items-center text-center gap-3  text-2xl font-extralight z-0  ">
          +
          <div className="line w-full h-[0.5px] md:mt-[8px] bg-[#b5b1b7]"></div>
          +
        </div>

      </div>
    
    
    </div>
  );
}
