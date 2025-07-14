"use client";
// import localFont from "next/font/local";
import { IBM_Plex_Mono } from "next/font/google";
import { motion } from "motion/react"
import Image from "next/image";



// const neueMon = localFont({
//   src: "../../../public/Fonts/Neu.ttf",
// });

const plexMono = IBM_Plex_Mono({
    weight: "700",
    subsets: ["latin"],
});


export default function Trail() {


    const imageData = [

        { id: 1, src: "/Images/01.svg", alt: "Image 1" },
        { id: 2, src: "/Images/02.svg", alt: "Image 2" },
        { id: 3, src: "/Images/03.svg", alt: "Image 3" },
        { id: 4, src: "/Images/04.svg", alt: "Image 4" },
        { id: 5, src: "/Images/01.svg", alt: "Image 1" },
        { id: 6, src: "/Images/02.svg", alt: "Image 2" },
        { id: 7, src: "/Images/03.svg", alt: "Image 3" },
        { id: 8, src: "/Images/04.svg", alt: "Image 4" },
        { id: 9, src: "/Images/04.svg", alt: "Image 4" },
        { id: 10, src: "/Images/01.svg", alt: "Image 1" },
        { id: 11, src: "/Images/02.svg", alt: "Image 2" },
        { id: 12, src: "/Images/03.svg", alt: "Image 3" },
        { id: 13, src: "/Images/04.svg", alt: "Image 4" },
    ]






    return (


        <div className="mainTrail w-full">
            <h1 className={`${plexMono.className} text-sm text-[#434740] px-5 uppercase font-extralight`}>Brand experience</h1>

            <div className="trailer w-full h-[40vh] flex overflow-hidden">

                <motion.div
                    initial={{ x: 0 }}
                    animate={{ x: "-100%" }}
                    transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}



                    className="track min-w-[100%] h-full flex shrink-0 gap-10">

                    {imageData.map((img) => (

                        <Image
                            key={img.id}
                            src={img.src}
                            alt={img.alt}
                            width={300}
                            height={300}


                        ></Image>

                    ))}
                    


                </motion.div>
                <motion.div
                    initial={{ x: 0 }}
                    animate={{ x: "-100%" }}
                    transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}



                    className="track min-w-[100%] h-full flex shrink-0 gap-10">

                    {imageData.map((img) => (

                        <Image
                            key={img.id}
                            src={img.src}
                            alt={img.alt}
                            width={300}
                            height={300}


                        ></Image>

                    ))}
                    


                </motion.div>

                



            </div>

        </div>
    )
}