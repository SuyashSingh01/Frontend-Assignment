import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-[#232536] text-white p-4">
      <div className="container mx-auto flex justify-between items-center px-6">
        <h1 className="text-xl font-bold">{'{Finsweet'}</h1>
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="hover:text-[#FFD050]">Home</Link>
          <Link to="/blog" className="hover:text-[#FFD050]">Blog</Link>
          <Link to="/about" className="hover:text-[#FFD050]">About Us</Link>
          <Link to="/contact" className="hover:text-[#FFD050]">Contact</Link>
          <button className="p-3 bg-slate-50 text-black">Subscribe</button>
        </div>
        {/* Mobile Menu Icon */}
        <button className="md:hidden text-2xl" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#232536] text-white p-4 space-y-4">
          <Link to="/" className="block hover:text-[#FFD050]" onClick={toggleMobileMenu}>Home</Link>
          <Link to="/blog" className="block hover:text-[#FFD050]" onClick={toggleMobileMenu}>Blog</Link>
          <Link to="/about" className="block hover:text-[#FFD050]" onClick={toggleMobileMenu}>About Us</Link>
          <Link to="/contact" className="block hover:text-[#FFD050]" onClick={toggleMobileMenu}>Contact</Link>
          <button className="w-full p-3 bg-slate-50 text-black" onClick={toggleMobileMenu}>Subscribe</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
