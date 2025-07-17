import localFont from "next/font/local";
import { IBM_Plex_Mono } from "next/font/google";
import { MdSubdirectoryArrowRight } from "react-icons/md";
import Image from "next/image";
import React from "react";


const neueMon = localFont({
  src: "../../../public/Fonts/Neu.ttf",
});
const plexMono = IBM_Plex_Mono({
  weight: "700",
  subsets: ["latin"],
});


export default function Awards(){


    return(

        <>
        <div className="mainAwards w-full px-5">

            <div className="mainLine">
                <div className="line w-full h-[0.5px] bg-[#b5b1b7]"></div>
            </div>


            <div className="awardMAin flex py-5">


                <div className="awardPhoto relative basis-1/4">
                    <Image src="/images/award1.webp" alt=""  width={290} height={190}/>
                </div>

                <div className={`heading ${plexMono.className} font-extralight uppercase text-sm text-[#434740] basis-3/4`}><h1>EMMY® for Outstanding Digital Innovation</h1></div>
                <div className="plus text-2xl text-[#434740] font-light"><h1>+</h1></div>
            </div>



        </div>


         <div className="mainAwards w-full px-5">

            <div className="mainLine">
                <div className="line w-full h-[0.5px] bg-[#b5b1b7]"></div>
            </div>


            <div className="awardMAin flex py-5">


                <div className="awardPhoto relative basis-1/4">
                    <Image src="/images/award1.webp" alt="" width={290} height={190}/>
                </div>

                <div className={`heading ${plexMono.className} font-extralight uppercase text-sm text-[#434740] basis-3/4`}><h1>EMMY® for Outstanding Digital Innovation</h1></div>
                <div className="plus text-2xl text-[#434740] font-light"><h1>+</h1></div>
            </div>



        </div>

        <div className="mainAwards w-full px-5">

            <div className="mainLine">
                <div className="line w-full h-[0.5px] bg-[#b5b1b7]"></div>
            </div>


            <div className="awardMAin flex py-5">


                <div className="awardPhoto relative basis-1/4">
                    <Image src="/images/award2.webp" alt="" width={290} height={190}/>
                </div>

                <div className={`heading ${plexMono.className} font-extralight uppercase text-sm text-[#434740] basis-3/4`}><h1>EMMY® for Outstanding Digital Innovation</h1></div>
                <div className="plus text-2xl text-[#434740] font-light"><h1>+</h1></div>
            </div>



        </div>


        <div className="mainAwards w-full px-5">

            <div className="mainLine">
                <div className="line w-full h-[0.5px] bg-[#b5b1b7]"></div>
            </div>


            <div className="awardMAin flex py-5">


                <div className="awardPhoto relative basis-1/4">
                    <Image src="/images/award3.webp" alt="" width={290} height={190}/>
                </div>

                <div className={`heading ${plexMono.className} font-extralight uppercase text-sm text-[#434740] basis-3/4`}><h1>EMMY® for Outstanding Digital Innovation</h1></div>
                <div className="plus text-2xl text-[#434740] font-light"><h1>+</h1></div>
            </div>



        </div>

        <div className="mainAwards w-full px-5">

            <div className="mainLine">
                <div className="line w-full h-[0.5px] bg-[#b5b1b7]"></div>
            </div>


            <div className="awardMAin flex py-5">


                <div className="awardPhoto relative basis-1/4">
                    <Image src="/images/award4.webp" alt="" width={290} height={190}/>
                </div>

                <div className={`heading ${plexMono.className} font-extralight uppercase text-sm text-[#434740] basis-3/4`}><h1>EMMY® for Outstanding Digital Innovation</h1></div>
                <div className="plus text-2xl text-[#434740] font-light"><h1>+</h1></div>
            </div>



        </div>


          <div className="mainLine py-10 px-5">
                <div className="line w-full h-[0.5px] bg-[#b5b1b7]"></div>
            </div>

        <div className="btndiv w-full flex justify-end px-5 pb-30">
            <button className={` ${neueMon.className} flex justify-center items-center uppercase text-[10px] md:text-xs bg-white px-4 py-2 font-bold text-[#434740] gap-2`}><MdSubdirectoryArrowRight className="text-sm md:text-lg font-bold text-[#434740]" />show more awards</button>
        </div>

       

        <div className="mainSep w-full h-[20px]  flex justify-between items-center text-center gap-3 px-5 text-2xl font-extralight z-0  ">
          +<div className="line w-full h-[0.5px] md:mt-[8px] bg-[#b5b1b7]"></div>+
        </div>



        </>
    )
}