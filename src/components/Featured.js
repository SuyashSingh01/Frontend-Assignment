
import React from 'react';
import Building from "../assets/Client-First - IMAGES/white-concrete-building-1838640.svg";
const FeaturedPost = () => {
  return (
    <section className="p-6 bg-white">
      <h2 className="text-2xl font-bold text-[#232536] mb-4">Featured Post</h2>
      <div className="flex flex-col bg-[#F4F4F4] rounded-lg overflow-hidden shadow-md">
        <img src={Building} alt="Featured Post" className="sm:w-full w-1/2 h-64 object-cover" />
        <div className="p-6">
          <p className="text-sm text-[#6D6E76]">By Mark Doe | May 25, 2022</p>
          <h3 className="text-xl font-semibold text-[#232536] mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</h3>
          <p className="text-[#6D6E76] mt-4">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
          <button className="mt-4 bg-[#FFD050] text-black font-semibold px-6 py-2 rounded hover:bg-[#e6bc46]">Read More</button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPost;
