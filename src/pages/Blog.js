
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Data } from '../Data';

import PostItemCard from '../components/PostItemCard';
import HeroSection from '../components/Herosection';
import JointeamSection from '../components/JointeamSection';
import CategoryCard from '../components/CategoryCard';
const Blog = () => {
  const navigate = useNavigate();
  return (
    <div className="container mx-2 p-6">
      <HeroSection />
      {/* Blog Cards */}
      <div className="mt-6 mx-4">
        <h2 className="text-4xl font-bold font-headingfont p-5">All posts</h2>
        <div className="flex flex-col justify-center items-center w-full">{
          Data.map((item, index) => (
            <PostItemCard key={index} Item={item} navigate={navigate} />
          ))
        }
        </div>
      </div>
      <section className="p-6 bg-white">
      <div className="mb-4">
          <h2 className="text-xl md:text-4xl font-bold font-headingfont text-[#232536] p-2 md:p-6">All Category</h2>
        </div>
        <CategoryCard/>
      </section>
      <JointeamSection />
    </div>
  );
};

export default Blog;
