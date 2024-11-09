import React from 'react';
import HeroSection from '../components/Herosection';
import FeaturedPost from '../components/Featured';
import AllPosts from '../components/Allpost';
import AboutSection from '../components/AboutSection';
import Background from '../assets/Client-First - IMAGES/man-in-black-suit-wearing-eye-glasses-sitting-on-gray-sofa-using-macbook-3772622.svg'
import ListofAuthors from '../components/ListofAuthors';
import CategoryCard from '../components/CategoryCard';
import TestimonialSection from '../components/TestimonialSection';

import { category } from '../Data';
import img1 from "../assets/Client-First - IMAGES/close-up-photography-of-man-wearing-sunglasses-1212984.svg"
import JointeamSection from '../components/JointeamSection';


const HomePage = () => {
  return (
    <div className=' max-w-8xl'>
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
      <section className="p-2 md:p-6 bg-white">
        <div className="flex justify-center items-center mb-4">
          <h2 className="text-xl md:text-4xl font-bold font-headingfont text-[#232536] p-2 md:p-6">Choose a Category</h2>
        </div>
        <CategoryCard />
      </section>

      <div className="p-6 bg-white my-5 md:my-16 h-[44rem] ">
        <div className='relative mx-auto'>
          <div className='absolute left-10 top-0'>
            <img src={img1} alt="image" className='w-full md:h-[40rem] md:w-[60rem]' />
          </div>
          <div className='absolute bg-white top-60 right-5 md:top-40 md:right-36 shadow-lg w-[20rem] md:w-[44rem] md:h-[30rem] p-8 md:p-20 z-10'>
            <h3 className='font-headingfont my-5 md:my-10'>WHY WE STARTED</h3>
            <p className='text-wrap md:my-10 font-bodyfont text-sm md:text-lg'>
              It started out as a simple idea and evolved into our passion
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae numquam consectetur ipsam mollitia ullam nobis, sequi animi culpa unde recusandae
            </p>

            <button className="bg-[#FFD050] text-black font-semibold px-2 md:px-6 md:py-3 rounded hover:bg-[#e6bc46]"> Discover our story{'>'}</button>
          </div>
        </div>
      </div>

      <section className='mb-5 md:mb-16'>
        <ListofAuthors ele={4} />
      </section>

      <section>
        <div className="flex md:gap-3 ">
          {category.map((cat, index) => (
            <img src={cat.image} key={index} alt={cat.name} className="w-24 h-24 rounded-full mx-auto mb-4" />
          ))}
        </div>
      </section>

      <TestimonialSection />
      <JointeamSection />
    </div>
  );
};

export default HomePage;
