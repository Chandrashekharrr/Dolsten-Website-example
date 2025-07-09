import localFont from 'next/font/local'


const neueMon = localFont({
    src:'../../../public/Fonts/Neu.ttf',
})





export default function Navbar(){






    return(

        <>
            <div className="mainNAv w-full h-20 px-10 flex justify-between items-center ">
                <div className={`${neueMon.className} NavComp grid grid-cols-2 gap-12 uppercase`}>

                    <h1>Awards</h1>
                    <h1>WORK</h1>

                </div>
                <div className={` ${neueMon.className} NavComp uppercase font-extrabold text-[#434740] text-sm tracking-widest`}>
                    <h1>DOLSTEN & CO.</h1>
                </div>
                <div className="NavComp grid grid-cols-2 gap-12">

                    <h1>About</h1>
                    <h1>Contact</h1>
                </div>
            </div>




        
        
        
        
        
        </>


    )
}