import React from 'react'

function HeroSectionContent({page}) {
    return (
        <>  
            <div className={`absolute z-10 ${page==="home"?"text-white":"text-black"} max-w-2xl mx-11 p-6  mt-3 md:mt-24`}>
                <p className="uppercase text-sm">Posted on Startup</p>
                <h1 className="text-xl md:text-4xl font-bold mt-2 font-headingfont">Step-by-step guide to choosing great font pairs</h1>
                <p className="mt-4">By James West | May 23, 2022</p>
                <p className=" mt-2  md:mb-6 text-wrap md:text-lg text-sm">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                <button className="bg-[#FFD050] text-black font-semibold md:mt-6 md:px-6 md:py-3 rounded hover:bg-[#e6bc46]">Read More</button>
            </div>
        </>
    )
}

export default HeroSectionContent