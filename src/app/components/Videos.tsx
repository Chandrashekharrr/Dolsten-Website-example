import { MdSubdirectoryArrowRight } from "react-icons/md";
import { IBM_Plex_Mono } from "next/font/google";
import localFont from "next/font/local";


const plexMono = IBM_Plex_Mono({
  weight: "700",
  subsets: ["latin"],
});

const neueMon = localFont({
  src: "../../../public/Fonts/Neu.ttf",
});


export default function Videos(){


    return(



        <div className="mainvideo w-full h-[28vh] md:h-full overflow-hidden flex justify-center items-center px-5 my-10">

            <video className={`w-full h-[150%] object-cover `} autoPlay muted loop>

                <source src="./Video/brand.mp4" type="video/mp4" />
            </video>

            <div className="textContent w-full h-[28vh] md:h-full absolute">

                <p className={`px-8 md:px-15 pt-3 md:pt-10 ${plexMono.className} uppercase  text-[11px] text-white mix-blend-difference tracking-wide font-extralight `}>the first ai filmed by ai</p>
                <h1 className={`px-8 md:px-15 ${neueMon.className} uppercase text-[7vw] md:text-[4vw] text-white mix-blend-difference tracking-wide font-extralight`}>arthur the alien</h1>

                <div className="btndiv w-full absolute flex justify-end bottom-2 md:bottom-10 px-10 md:px-15">
                        <button className={` ${neueMon.className} flex justify-center items-center uppercase text-[10px] md:text-xs bg-[#f4ebe5] px-4 py-2 font-bold text-[#434740] gap-2`}><MdSubdirectoryArrowRight className="text-sm md:text-lg font-bold text-[#434740]" />scroll down</button>
                        </div>
            </div>

        </div>
    )
}