import React from 'react';
import JointeamSection from '../components/JointeamSection';
import img1 from "../assets/Client-First - IMAGES/close-up-photography-of-man-wearing-sunglasses-1212984.svg"
import img2 from '../assets/Client-First - IMAGES/ground-group-growth-hands-461049.svg'
import img3 from '../assets/Client-First - IMAGES/three-persons-sitting-on-the-stairs-talking-with-each-other-1438072.svg'
import ListofAuthors from '../components/ListofAuthors';

const About = () => {

  return (
    <div className="container mx-auto px-4 py-8 ">
      {/* About Us Section */}
      <div className="text-center relative ">
        <div className='flex flex-col gap-4 md:flex-row justify-center items-center mt-10 p-20 '>
          <div className='p-11 text-wrap font-headingfont absolute top-14 left-5 z-10 w-1/2 bg-white shadow-md h-48 '>
            <h3 className='font-bodyfont'>About Us</h3>
            <h1 className="text-md md:text-3xl md:font-bold line-clamp-3 p-5">We are a team of content writers who share their learnings</h1>
          </div>
          <p className="text-gray-900 mt-4 max-w-2xl mx-auto absolute right-5 text-wrap line-clamp-4 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet est placerat in egestas erat imperdiet.
          </p>
        </div>

        <div className='relative '>
          <img src={img1} alt="About Us" className="w-full h-80 object-cover rounded-md mt-8 " />
          <div className=" absolute bottom-4 left-20 inline-flex justify-center space-x-8 mt-6 p-4 bg-[#FFD050] ">
            <div className="text-center ">
              <span className="text-3xl font-bold">12+</span>
              <p>Blogs Published</p>
            </div>
            <div className="text-center">
              <span className="text-3xl font-bold">18K+</span>
              <p>Views on Pinterest</p>
            </div>
            <div className="text-center">
              <span className="text-3xl font-bold">30K+</span>
              <p>Total Active Users</p>
            </div>
          </div>
        </div>

      </div>

      {/* Mission and Vision Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8  bg-gray-100 p-24">
        <div className="p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
          <h1 className="text-gray-600 font-bold">Creating valuable content for creatives all around the world.</h1>
          <p className='font-bodyfont'>
         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eusmod tempor incktiount ut labore et dolore magna aliqua. Non hiandit massa enim nec. Scalanaquo viverra mourts in aliquam sees. At risus viverra adipiscing at in tellus.
          </p>
        </div>
        <div className="p-6 bg-gray-100 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
          <h1 className="text-gray-600 font-bold">A platform that empowers individuals to improve.</h1>
          <p className='font-bodyfont'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam molestias qui, corporis beatae dolore repellat! Ducimus sit veritatis dicta qui commodi magni dignissimos sint et, eligendi quisquam, tempora repellendus in.</p>
        </div>
      </div>

      {/* Our Team of Creatives Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8  p-20 items-center my-10">
        <div>
          <h3 className="text-2xl font-bold font-headingfont mb-4">Our team of creatives</h3>
          <p className="text-gray-600 mb-4 font-bodyfont">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
          </p>
          <p className="text-gray-600 font-bodyfont">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet est placerat in egestas erat imperdiet.
          </p>
        </div>
        <img src={img2} alt="Team of Creatives" className="w-full h-80 object-cover rounded-sm" />
      </div>

      {/* Why We Started This Blog Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center my-14 p-20">
        <img src={img3} alt="Why We Started This Blog" className="w-full h-80 object-cover rounded-sm" />
        <div>
          <h3 className="text-2xl font-bold font-headingfont mb-4">Why we started this Blog</h3>
          <p className="text-gray-600 mb-4 font-bodyfont">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>

      {/* List of Authors */}
        <ListofAuthors ele={8}/>
      <JointeamSection />
    </div>

  );
};

export default About;
