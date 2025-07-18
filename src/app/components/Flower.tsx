import { IBM_Plex_Mono } from "next/font/google";
import localFont from "next/font/local";
import React from "react";
import Image from "next/image";

const plexMono = IBM_Plex_Mono({
  weight: "700",
  subsets: ["latin"],
});

const neueMon = localFont({
  src: "../../../public/Fonts/Neu.ttf",
});


export default function Flower(){




    return(


        <div className="mainFlower w-full h-full flex flex-col md:flex-row justify-between relative">


            <div className="Flower w-full h-full sm:absolute z-0">
                <Image src="./flower.webp" alt="" width={800} height={900} />
            </div>


            <div className="FlowerContent w-full h-full flex items-end  justify-end relative z-10 px-5 md:pt-50 ">

                <div className="wrapper w-[80%] md:w-[30.5%] h-full flex-col justify-center items-start md:mr-32   ">

                <div className={`content ${neueMon.className} capitalize text-[8vw] md:text-[3vw] leading-none my-10 backdrop-blur-sm`}><h1>Simon Dolsten, Founder</h1></div>
                <div className={`content ${plexMono.className} uppercase text-[2.5vw] md:text-sm text-[#53574f] font-extralight backdrop-blur-md break-all leading-none`}><p>Simon Dolsten is currently the most awarded Creative Director in the world according to both the One Show and Art Director’s Club. The Drum put him at #2. He’s working on that. He’s served as Creative Director and hands-on creative for clients like Anheuser-Busch, Spotify, Volkswagen and BMW, with an eye for business growth and creative excellence.</p></div>
                <div className={`content ${neueMon.className} capitalize text-[8vw] md:text-[3vw] leading-none my-10`}><h1>Isaac Rodriguez, Partner</h1></div>
                <div className={`content ${plexMono.className} uppercase text-[2.5vw] md:text-sm text-[#434740] font-extralight backdrop-blur-sm break-all leading-none`}><p>Isaac Rodriguez is a filmmaker blending diy grit with cutting edge AI tools—now creating AI content for Dolsten & Co. With millions of views and a proven creative instinct, he brings sharp storytelling and serious output. He is currently pioneering one of the world’s first full-length AI-driven feature films, pushing the boundaries of what storytelling can become.</p></div>
                
                </div>

            </div>


        </div>
    )
}