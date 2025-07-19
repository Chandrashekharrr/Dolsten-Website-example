import { IoIosArrowRoundUp } from "react-icons/io";
// import { IBM_Plex_Mono } from "next/font/google";
import localFont from "next/font/local";
import React from "react";
import Image from "next/image";
import { MdSubdirectoryArrowRight } from "react-icons/md";



// const plexMono = IBM_Plex_Mono({
//   weight: "700",
//   subsets: ["latin"],
// });

const neueMon = localFont({
  src: "../../../public/Fonts/Neu.ttf",
});




export default function Footer() {



  const imageData = [
    { id: 1, src: "./Footer.webp", alt: "Image 1" }
  ];


  return (
    <footer className=" w-full h-3/4 md:h-full  mt-0 md:mt-40 overflow-hidden flex flex-col justify-between  bottom-0">

      <div className="mainSep w-full h-[20px]  flex justify-between items-center text-center gap-3 px-5 text-2xl font-extralight z-0  ">
        +
        <div className="line w-full h-[0.5px] md:mt-[8px] bg-[#b5b1b7]"></div>
        +
      </div>



      <div className="ImageFooter w-full h-full  relative flex justify-center items-end   z-0">

        {imageData.map((image) => (
          <Image
            key={image.id}
            src={image.src}
            alt={image.alt}
            width={1000}
            height={1000}
            className="w-full h-full object-cover bottom-0"
          />
        ))}


      </div>



      <div className="MAinWrapperDiv w-full h-3/4 md:h-full absolute flex flex-col justify-between py-5 items-center z-10">

        <div className="WrapperDiv w-full px-5 md:px-20 flex justify-between pt-5 ">

          <div className="contentDiv w-1/2 text-[#434740] uppercase text-xs leading-normal pt-0 md:pt-20">Let’s &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; make <br />something <br /> special.</div>

          <div className="contentDiv w-1/2 flex justify-end items-start pt-0 md:pt-10">

            <div className="buttonWrapper w-12 flex flex-col justify-center items-center gap-2">
              <h1 className={`${neueMon.className} text-xs text-[#434740] tracking-wider`}>SCROLL</h1>
              <button className=" w-12 h-15 border-[0.5px] border-[#434740] flex justify-center items-center text-2xl text-[#434740]"><IoIosArrowRoundUp /></button>
              <h1 className={`${neueMon.className} text-sm text-[#434740] tracking-wider`}>To Top</h1>
            </div>

          </div>


        </div>



        <div className="WrapperDiv  m-auto w-full flex justify-center items-center   z-10">

          <div className="miniWrapper w-full md:w-[40vw] px-5">

            <div className="upperplus w-full md:w-[40vw] flex justify-between items-center  uppercase">

              <div className="partone flex justify-center items-center gap-5"><h1 className="text-2xl font-extralight">+</h1> <h1 className={`text-sm font-medium ${neueMon.className} `}>PR & New business</h1></div>
              <h1 className="text-2xl font-extralight">+</h1>

            </div>


            <div className="email w-full md:w-[40vw]  px-5">
              <button className={`flex items-center justify-center w-full h-full  py-5 text-[7vw] md:text-[3.5vw] ${neueMon.className} leading-none backdrop-blur-md bg-white/20 gap-2 `}> <MdSubdirectoryArrowRight className="text-[7vw] md:text-[4vw]" />qubit@qubit.com</button>
            </div>

            <div className="upperplus w-full md:w-[40vw] flex justify-between items-center text-2xl font-extralight">

              <h1>+</h1>
              <h1>+</h1>

            </div>





          </div>


        </div>




        <div className="WrapperDiv w-full flex justify-between items-center px-5 z-10">


          <div className="twoh1 w-1/2 flex flex-col md:flex-row justify-start items-start md:items-center gap-1 md:gap-5 text-[#434740] uppercase text-xs leading-normal">
            <h1>©2025 Dolsten & Co</h1>
            <h1>Privacy Statement</h1>
          </div>



          <div className="buttonDiv w-1/2 flex justify-start items-center">
            <button
              className={` ${neueMon.className} flex justify-center items-center uppercase text-[10px] md:text-xs  px-4 py-2 font-bold text-[#434740] gap-2 tracking-wider bg-white`}
            >
              <MdSubdirectoryArrowRight className="text-sm md:text-lg font-bold text-[#434740]" />
              client access
            </button>
          </div>
        </div>

      </div>

    </footer>
  );
}