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

type videoProps = {
    title : string;
    titleTwo:string;
    ImageUrl:string;

}



 const Videos:React.FC<videoProps> = ({title, titleTwo,ImageUrl})=> {
  return (
    <div className="mainvideo w-full h-[28vh] md:h-full overflow-hidden flex justify-center items-center px-5 my-10">
      <video className={`w-full h-[150%] object-cover `} autoPlay muted loop>
        <source src={ImageUrl} type="video/mp4" />
      </video>

      <div className="textContent w-full h-[28vh] md:h-full absolute">
        <p
          className={`px-8 md:px-15 pt-3 md:pt-10 ${plexMono.className} uppercase  text-[11px] text-white mix-blend-difference tracking-wide font-extralight `}
        >
          {title}
        </p>
        <h1
          className={`px-8 md:px-15 ${neueMon.className} uppercase text-[7vw] md:text-[4vw] text-white mix-blend-difference tracking-wide font-extralight`}
        >
          {titleTwo}
        </h1>

        <div className="btndiv w-full absolute flex justify-end bottom-2 md:bottom-10 px-10 md:px-15">
          <button
            className={` ${neueMon.className} flex justify-center items-center uppercase text-[10px] md:text-xs bg-white px-4 py-2 font-bold text-[#434740] gap-2`}
          >
            <MdSubdirectoryArrowRight className="text-sm md:text-lg font-bold text-[#434740]" />
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
}

export default Videos;
