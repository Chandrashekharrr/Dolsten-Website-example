import { IBM_Plex_Mono } from "next/font/google";
import localFont from "next/font/local";
import React from "react";

const plexMono = IBM_Plex_Mono({
    weight: "700",
    subsets: ["latin"],
});

const neueMon = localFont({
    src: "../../../public/Fonts/Neu.ttf",
});

export default function Model() {
    return (
        <div className="w-full  mt-52 overflow-hidden">
            <div className="responsive w-full h-20 px-5">
                <div className="wrapperClass w-full h-full">
                    <h1 className={`${plexMono.className} text-3vw uppercase text-[#434740] font-extralight leading-tight`}>
                        AI agency<br /> model
                    </h1>
                </div>
            </div>

            <div className="responsive w-full h-[calc(100%-5rem)] px-5 pb-5">
                <div className="wrapperClass w-full h-full flex flex-col lg:flex-row">

                    <div className="wrappermini  flex flex-col w-full  h-full">

                        <div className="plusDiv w-full text-2xl font-extralight flex  justify-between items-start ">
                            <h1>+</h1><h1>+</h1>
                        </div>

                        <div className="colOne  w-full px-5">
                            <div className="whiteSpace w-full bg-white p-4 flex flex-col sm:flex-row lg:flex-col justify-between items-center sm:gap-10">

                                <div className="imageDiv overflow-hidden"><img src="/Images/model1.webp" alt="" className="object-cover " /></div>

                                <div className="TextContentDiv overflow-hidden flex flex-col justify-evenly">

                                    <div className="HeadingDiv"><h1 className={`${neueMon.className} uppercase text-[8vw] sm:text-[3vw] leading-none py-5`}>AI Creator Network</h1></div>
                                    <div className="Para sm:p-20 lg:p-0"><p className={`uppercase text-[4vw] sm:text-[1vw] break-all leading-tight text-[#434740] ${plexMono.className}`}>We work with a curated group of AI makers—including AI filmmakers, artists, designers, engineers, and prompt specialists—to craft breakthrough, effective work. Each collaborator is chosen for their unique perspective and technical mastery.</p></div>
                                </div>
                            </div>

                        </div>

                        <div className="plusDiv w-full text-2xl font-extralight flex  justify-between items-end ">
                            <h1>+</h1><h1>+</h1>
                        </div>


                    </div>

                    <div className="wrappermini  flex flex-col w-full  h-full">

                        <div className="plusDiv w-full text-2xl font-extralight flex  justify-between items-start ">
                            <h1>+</h1><h1>+</h1>
                        </div>

                        <div className="colOne  w-full px-5">
                            <div className="whiteSpace w-full bg-white p-4 flex flex-col sm:flex-row lg:flex-col justify-between items-center sm:gap-10">

                                <div className="imageDiv overflow-hidden"><img src="/Images/model2.webp" alt="" className="object-cover " /></div>

                                <div className="TextContentDiv overflow-hidden flex flex-col justify-evenly">

                                    <div className="HeadingDiv"><h1 className={`${neueMon.className} uppercase text-[8vw] sm:text-[3vw] leading-none py-5`}>AI Creator Network</h1></div>
                                    <div className="Para sm:p-20 lg:p-0"><p className={`uppercase text-[4vw] sm:text-[1vw] break-all leading-tight text-[#434740] ${plexMono.className}`}>We work with a curated group of AI makers—including AI filmmakers, artists, designers, engineers, and prompt specialists—to craft breakthrough, effective work. Each collaborator is chosen for their unique perspective and technical mastery.</p></div>
                                </div>
                            </div>

                        </div>

                        <div className="plusDiv w-full text-2xl font-extralight flex  justify-between items-end ">
                            <h1>+</h1><h1>+</h1>
                        </div>


                    </div>



                     <div className="wrappermini  flex flex-col w-full  h-full">

                        <div className="plusDiv w-full text-2xl font-extralight flex  justify-between items-start ">
                            <h1>+</h1><h1>+</h1>
                        </div>

                        <div className="colOne  w-full px-5">
                            <div className="whiteSpace w-full bg-white p-4 flex flex-col sm:flex-row lg:flex-col justify-between items-center sm:gap-10">

                                <div className="imageDiv overflow-hidden"><img src="/Images/model3.webp" alt="" className="object-cover " /></div>

                                <div className="TextContentDiv overflow-hidden flex flex-col justify-evenly">

                                    <div className="HeadingDiv"><h1 className={`${neueMon.className} uppercase text-[8vw] sm:text-[3vw] leading-none py-5`}>AI Creator Network</h1></div>
                                    <div className="Para sm:p-20 lg:p-0"><p className={`uppercase text-[4vw] sm:text-[1vw] break-all leading-tight text-[#434740] ${plexMono.className}`}>We work with a curated group of AI makers—including AI filmmakers, artists, designers, engineers, and prompt specialists—to craft breakthrough, effective work. Each collaborator is chosen for their unique perspective and technical mastery.</p></div>
                                </div>
                            </div>

                        </div>

                        <div className="plusDiv w-full text-2xl font-extralight flex  justify-between items-end ">
                            <h1>+</h1><h1>+</h1>
                        </div>


                    </div>



                     <div className="wrappermini  flex flex-col w-full  h-full">

                        <div className="plusDiv w-full text-2xl font-extralight flex  justify-between items-start ">
                            <h1>+</h1><h1>+</h1>
                        </div>

                        <div className="colOne  w-full px-5">
                            <div className="whiteSpace w-full bg-white p-4 flex flex-col sm:flex-row lg:flex-col justify-between items-center sm:gap-10">

                                <div className="imageDiv overflow-hidden"><img src="/Images/model4.webp" alt="" className="object-cover " /></div>

                                <div className="TextContentDiv overflow-hidden flex flex-col justify-evenly">

                                    <div className="HeadingDiv"><h1 className={`${neueMon.className} uppercase text-[8vw] sm:text-[3vw] leading-none py-5`}>AI Creator Network</h1></div>
                                    <div className="Para sm:p-20 lg:p-0"><p className={`uppercase text-[4vw] sm:text-[1vw] break-all leading-tight text-[#434740] ${plexMono.className}`}>We work with a curated group of AI makers—including AI filmmakers, artists, designers, engineers, and prompt specialists—to craft breakthrough, effective work. Each collaborator is chosen for their unique perspective and technical mastery.</p></div>
                                </div>
                            </div>

                        </div>

                        <div className="plusDiv w-full text-2xl font-extralight flex  justify-between items-end ">
                            <h1>+</h1><h1>+</h1>
                        </div>


                    </div>




                </div>
            </div>
        </div>
    );
}
