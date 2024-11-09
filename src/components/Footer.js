// src/components/Footer.js
import React from 'react';



const Footer = () => {
  return (
    <footer className="bg-[#232536] text-white py-10">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Top Row: Logo and Navigation Links */}
        <div className="flex justify-between items-center mb-10">
          <div className="text-2xl font-bold">{'{Finsweet'}</div>
          <nav className="space-x-6 text-sm">
            <a href="#home" className="hover:text-[#FFD050] transition">Home</a>
            <a href="#blog" className="hover:text-[#FFD050] transition">Blog</a>
            <a href="#about" className="hover:text-[#FFD050] transition">About us</a>
            <a href="#contact" className="hover:text-[#FFD050] transition">Contact us</a>
            <a href="#privacy" className="hover:text-[#FFD050] transition">Privacy Policy</a>
          </nav>
        </div>

        {/* Middle Row: Newsletter Subscription */}
        <div className="bg-[#1E1E2C] py-8 px-6 rounded-lg flex flex-col md:flex-row items-center justify-between mb-10">
          <h3 className="text-xl font-semibold mb-4 md:mb-0">Subscribe to our newsletter to get latest updates and news</h3>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="p-3 rounded-l-lg bg-[#2D2D3A] text-white placeholder-white focus:outline-none"
            />
            <button className="bg-[#FFD050] text-black px-6 py-3 rounded-r-lg font-semibold hover:bg-[#e6bc46] transition">
              Subscribe
            </button>
          </div>
        </div>

        {/* Bottom Row: Address and Social Icons */}
        <div className="flex flex-col md:flex-row items-center justify-between text-sm space-y-4 md:space-y-0">
          <div className='flex flex-col'>
          <p>Finstreet 118 2561 Fintown</p>
          <p>Hello@finsweet.com  020 7993 2905</p>
          </div>
          <div className="flex space-x-4">
            <a href="#facebook" className="hover:text-[#FFD050] transition">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#twitter" className="hover:text-[#FFD050] transition">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#instagram" className="hover:text-[#FFD050] transition">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#linkedin" className="hover:text-[#FFD050] transition">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
