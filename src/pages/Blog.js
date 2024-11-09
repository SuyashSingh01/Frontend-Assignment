import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Data } from '../Data';

import PostItemCard from '../components/PostItemCard';
import HeroSectionContent from '../components/HeroSectionContent';
import JointeamSection from '../components/JointeamSection';
import CategoryCard from '../components/CategoryCard';
import manimage from '../assets/Client-First - IMAGES/man-in-white-dress-shirt-sitting-on-black-rolling-chair-while-facing-black-computer-set-and-smiling-840996.svg';

const Blog = () => {
  const navigate = useNavigate();
  return (
    <div className="container mx-auto px-4 py-6">
      {/* Hero Section */}
      <div className="relative flex flex-col md:flex-row justify-between bg-[#F4F0F8] h-[400px] md:h-[500px] lg:h-[600px] items-center">
        <HeroSectionContent page={"blog"} />
        <img
          src={manimage}
          className="hidden md:block mx-auto md:w-1/2 lg:w-[40%] mt-4 md:mt-0 md:absolute md:top-10 right-10 md:right-0 object-contain"
          alt="manimg"
        />
      </div>

      {/* Blog Cards Section */}
      <div className="mt-6 mx-4">
        <h2 className="text-2xl md:text-4xl font-bold font-headingfont p-2 md:p-5">All posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center items-center">
          {Data.map((item, index) => (
            <PostItemCard key={index} Item={item} navigate={navigate} />
          ))}
        </div>
      </div>

      {/* Category Section */}
      <section className="p-4 md:p-6 bg-white">
        <div className="mb-4">
          <h2 className="text-xl md:text-4xl font-bold font-headingfont text-[#232536]">All Categories</h2>
        </div>
        <CategoryCard />
      </section>

      <JointeamSection />
    </div>
  );
};

export default Blog;
