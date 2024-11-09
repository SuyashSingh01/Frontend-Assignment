// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const Finsweet="{Finsweet"
  return (
    <nav className="bg-[#232536] text-white p-4">
      <div className="container mx-auto flex justify-between items-center px-6">
        <h1 className="text-xl font-bold">{Finsweet}</h1>
        <div className="space-x-4">
          <Link to="/" className="hover:text-[#FFD050]">Home</Link>
          <Link to="/blog" className="hover:text-[#FFD050]">Blog</Link>
          <Link to="/about" className="hover:text-[#FFD050]">About Us</Link>
          <Link to="/contact" className="hover:text-[#FFD050]">Contact</Link>
          <button className="p-3 bg-slate-50 text-black">Subscribe</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
