import React from 'react';
import HeroSection from '../components/Herosection';
import FeaturedPost from '../components/Featured';
import AllPosts from '../components/Allpost';
import AboutSection from '../components/AboutSection';
import Background from '../assets/Client-First - IMAGES/man-in-black-suit-wearing-eye-glasses-sitting-on-gray-sofa-using-macbook-3772622.svg'
import ListofAuthors from '../components/ListofAuthors';


const HomePage = () => {
  return (
    <div>
      <HeroSection Background={Background} />
      <div className="container mx-auto my-10 p-6 grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2">
          <FeaturedPost />
        </div>
        <div>
          <AllPosts />
        </div>
      </div>
      <AboutSection />
      <ListofAuthors/>
    </div>
  );
};

export default HomePage;
