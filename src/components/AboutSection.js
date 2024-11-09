// src/components/About.js
import React from 'react';

const About = () => {
  return (
    <div>
    <section className="p-6 bg-[#F4F4F4] text-[#6D6E76]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-20">
        <div>
          <h3 className="text-xl font-bold font-headingfont text-[#232536] mb-2">ABOUT US</h3>
          <p>We are a community of content writers who share their learnings.</p>
          <p className="mt-4 font-bodyfont">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div>
          <h3 className="text-xl font-bold text-[#232536] mb-2 font-headingfont">OUR MISSION</h3>
          <p>Creating valuable content for creatives all around the world.</p>
          <p className="mt-4 font-bodyfont">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </div>
    </section>
    </div>
  );
};

export default About;
