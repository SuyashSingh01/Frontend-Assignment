
import React from 'react';
import {Data} from '../Data';

import PostItemCard from '../components/PostItemCard';
import HeroSection from '../components/Herosection';
import JointeamSection from '../components/JointeamSection';
const Blog = () => {
  return (
    <div className="container mx-2 p-6">
        <HeroSection/>
      {/* Blog Cards */}
      <div className="mt-6 mx-4">
        <h2 className="text-2xl font-bold">All posts</h2>
        <div className="flex flex-col gap-2">{
          Data.map((item, index) => (
            <PostItemCard key={index} Item={item} />
          ))
        }
        </div>
      </div>
      <JointeamSection/>
    </div>
  );
};

export default Blog;
