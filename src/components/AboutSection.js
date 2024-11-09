// src/components/About.js
import React from 'react';

const About = () => {
  return (
    <div className='mx-auto'>
    <section className="p-6 bg-[#F4F4F4] text-[#6D6E76]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-20">
        <div  className='p-10'>
          <h3 className="text-xl font-bold font-headingfont text-[#232536] mb-2">ABOUT US</h3>
          <p className='text-3xl font-bold font-headingfont text-black '>We are a community of content writers who share their learnings.</p>
          <p className="mt-4 font-bodyfont">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <button className='text-purple-700 mt-5  font-extrabold'>Read more {">"}</button>
        </div>
        <div className='p-10'>
          <h3 className="text-xl font-bold text-[#232536] mb-2 font-headingfont">OUR MISSION</h3>
          <p className='text-3xl font-bold font-headingfont text-black'>Creating valuable content for creatives all around the world.</p>
          <p className="mt-4 font-bodyfont">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </div>
    </section>
    </div>
  );
};

export default About;
