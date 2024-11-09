// src/components/HeroSection.js
import React from 'react';


const HeroSection = ({Background}) => {
  return (
    <div className="relative bg-cover bg-center h-[400px] md:h-[500px] lg:h-[600px]" style={{ backgroundImage: `url(${Background})` }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute z-10 text-white max-w-2xl mx-11 p-6  mt-3 md:mt-24">
        <p className="uppercase text-sm">Posted on Startup</p>
        <h1 className="text-4xl font-bold mt-2 font-headingfont">Step-by-step guide to choosing great font pairs</h1>
        <p className="mt-4">By James West | May 23, 2022</p>
        <p className="mt-2 mb-6">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
        <button className="bg-[#FFD050] text-black font-semibold px-6 py-3 rounded hover:bg-[#e6bc46]">Read More</button>
      </div>
    </div>
  );
};

export default HeroSection;
