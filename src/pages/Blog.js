
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Data } from '../Data';

import PostItemCard from '../components/PostItemCard';
import HeroSectionContent from '../components/HeroSectionContent';
import JointeamSection from '../components/JointeamSection';
import CategoryCard from '../components/CategoryCard';
import manimage from '../assets/Client-First - IMAGES/man-in-white-dress-shirt-sitting-on-black-rolling-chair-while-facing-black-computer-set-and-smiling-840996.svg'
const Blog = () => {
  const navigate = useNavigate();
  return (
    <div className="container mx-2 p-6">
      
      <div className="relative flex justify-between bg-[#F4F0F8] h-[600px] md:h-[500px] lg:h-[600px]" >
      <HeroSectionContent page={"blog"} />
      {/* <img src={manimage} className='w-50% absolute top-14 right-10' alt="manimg" />
       */}
       <img
          src={manimage}
          className="hidden md:block mx-auto md:w-1/2 lg:w-[40%] mt-4 md:mt-0 md:absolute md:top-10 right-10 md:right-0 object-contain"
          alt="manimg"
        />
      </div>
      {/* Blog Cards */}
      <div className="mt-6 mx-4">
        <h2 className="text-4xl font-bold font-headingfont p-5">All posts</h2>
        <div className="flex flex-col justify-center items-center w-full gap-y-2 md:gap-y-5">{
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
