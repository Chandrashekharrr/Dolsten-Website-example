import localFont from "next/font/local";
// import { IBM_Plex_Mono } from "next/font/google";
import { MdSubdirectoryArrowRight } from "react-icons/md";



const neueMon = localFont({
  src: "../../../public/Fonts/Neu.ttf",
});
// const plexMono = IBM_Plex_Mono({
//   weight: "700",
//   subsets: ["latin"],
// });

export default function Hero(){





    return(
<>
        <div className="MAinHero w-[100vw] h-[100vh] flex justify-center items-center absolute z-0">


            <video className="w-full h-full object-cover xl:object-contain " autoPlay muted loop>
                <source src="https://cdn.jsdelivr.net/gh/dylanbrouwer-design/dolsten@6d97072/DOLSTEN_NR_B.webm" />
            </video>

            
        </div>

        <div className="textdiv w-full h-full flex flex-col md:flex-row justify-between py-32 md:px-44 items-center absolute z-10 ">

        <h1 className={`${neueMon.className} uppercase font-normal md:text-[3vw]`}>we make ai</h1>
        <h1 className={`${neueMon.className} uppercase font-normal md:text-[3vw]`}>come alive</h1>


        </div>  


        <div className="btndiv w-full absolute flex justify-center bottom-10">
        <button className={` ${neueMon.className} flex justify-center items-center uppercase text-xs bg-[#f4ebe5] px-4 py-2 font-bold text-[#434740] gap-2`}><MdSubdirectoryArrowRight className="rotate-90 text-lg font-bold text-[#434740]" />scroll down</button>
        </div>
</>

    )
}