'use client';

import { IBM_Plex_Mono } from "next/font/google";
import localFont from "next/font/local";
import React, { useRef, useState } from "react";

const plexMono = IBM_Plex_Mono({
    weight: "700",
    subsets: ["latin"],
});

const neueMon = localFont({
    src: "../../../public/Fonts/Neu.ttf",
});



type dataprop = {
    title:string;
    para:string;
}



const Service:React.FC<dataprop> = () => {

    const [{ title, para }] = [{
        title: "Brand Campaigns",
        para: "We concept and produce full 360 brand campaigns with AI integrated where it adds value—from insight to production to distribution.",
    },

    {
        title: "Brand Campaigns",
        para: "We concept and produce full 360 brand campaigns with AI integrated where it adds value—from insight to production to distribution.",
    }];

    const elem = useRef<HTMLButtonElement>(null);
    const paraelem = useRef<HTMLParagraphElement>(null);

    const [isclicked, setIsclicked] = useState(true);

    const handleClick = () => {
        setIsclicked(!isclicked);
        if (elem.current && paraelem.current) {
            if (isclicked) {

                elem.current.style.transform = "rotate(45deg)";
                paraelem.current.style.display = "block";
                paraelem.current.style.transition = "all 1s ease-in-out";
            } else {
                elem.current.style.transform = "rotate(0deg)";
                paraelem.current.style.display = "none";
                paraelem.current.style.transition = "all 1s ease-in-out";
            }
        }
    };






   






 
    return (
    <div className="w-full h-full ">

                <div className="divWrapper w-full h-full flex md:flex-row flex-col">

                    <div className="divChild px-5 w-full md:w-1/2 h-20 md:h-full  pt-10 flex justify-start items-center md:items-start">
                        <h1 className={`${neueMon.className} uppercase leading-none text-[6vw] md:text-[3vw]`}>Services</h1>
                    </div>


                    <div className="divChild px-5 md:pr-15 w-full md:w-1/2 h-full  pt-20 md:pt-52">
                        {[
                            {
                                title: "Brand Campaigns",
                                para: "We concept and produce full 360 brand campaigns with AI integrated where it adds value—from insight to production to distribution.",
                            },
                            {
                                title: "AI Film & Imagery",
                                para: "We concept and produce full 360 brand campaigns with AI integrated where it adds value—from insight to production to distribution.",
                            },
                            {
                                title: "AI Strategy",
                                para: "We concept and produce full 360 brand campaigns with AI integrated where it adds value—from insight to production to distribution.",
                            },
                            {
                                title: "Earned Media Activations",
                                para: "We concept and produce full 360 brand campaigns with AI integrated where it adds value—from insight to production to distribution.",
                            },
                            {
                                title: "Digital Design & Platforms",
                                para: "We concept and produce full 360 brand campaigns with AI integrated where it adds value—from insight to production to distribution.",
                            },
                            {
                                title: "Social Content Systems",
                                para: "We concept and produce full 360 brand campaigns with AI integrated where it adds value—from insight to production to distribution.",
                            },
                            {
                                title: "AI Automation & Innovation",
                                para: "We concept and produce full 360 brand campaigns with AI integrated where it adds value—from insight to production to distribution.",
                            }
                        ].map((item, idx) => (
                            <div className="mainWrapper pt-2" key={idx}>
                                <div className="childLine">
                                    <div className="line h-[0.5px] w-full bg-[#b5b1b7]"></div>
                                </div>
                                <div className="content">
                                    <div className="childContent flex justify-between overflow-hidden transition-all duration-1000">
                                        <div className="headpara">
                                            <h1 className={`${neueMon.className} text-[6vw] md:text-[2vw] capitalize py-2 md:py-3`}>{item.title}</h1>
                                            <p ref={paraelem} className={`${plexMono.className} hidden text-sm leading-none transition-all duration-1000 lg:pr-48 uppercase text-[#434740]`}>{item.para}</p>
                                        </div>
                                        <button ref={elem} className={`text-3xl font-extralight py-2 md:py-3`} onClick={handleClick}>+</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>



                </div>
    </div>
  );
};

export default Service;