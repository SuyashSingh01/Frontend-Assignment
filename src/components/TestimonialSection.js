import React from 'react'; 
import aluminimg from '../assets/Client-First - IMAGES/man-in-black-crew-neck-t-shirt-sitting-beside-woman-in-gray-crew-neck-t-shirt-3153201.svg';

function TestimonialSection() {
    return (
        <div className="bg-[#FBF6EA] my-4 md:my-10 p-6 md:p-16">
            <div className="max-w-6xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-start gap-8 md:gap-10">
                
                {/* Left side */}
                <div className="flex-1 text-center md:text-left">
                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-widest">Testimonials</h3>
                    <h2 className="text-2xl md:text-3xl font-bold text-[#232536] mt-2">What people say about our blog</h2>
                    <p className="text-gray-600 mt-3 md:mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                </div>

                {/* Divider */}
                <div className="hidden md:block h-40 border-l border-gray-300"></div>

                {/* Right side */}
                <div className="flex-1 text-center md:text-left">
                    <p className="text-lg md:text-xl lg:text-2xl text-gray-700 font-headingfont font-bold leading-relaxed md:leading-snug">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    
                    {/* Profile and Navigation Section */}
                    <div className="flex flex-col items-center md:flex-row md:items-center mt-6 gap-4 md:gap-8">
                        
                        {/* User Profile */}
                        <div className="flex items-center">
                            <img src={aluminimg} alt="user" className="w-12 h-12 md:w-10 md:h-10 rounded-full mr-4" />
                            <div>
                                <p className="text-md font-semibold text-gray-800">Jonathan Vallem</p>
                                <p className="text-sm text-gray-500">New York, USA</p>
                            </div>
                        </div>

                        {/* Navigation Arrows */}
                        <div className="flex items-center mt-4 md:mt-0 space-x-4">
                            <button className="bg-gray-300 hover:bg-gray-400 p-2 rounded-full">
                                <span className="text-gray-800 text-xl font-bold">←</span>
                            </button>
                            <button className="bg-gray-800 text-xl hover:bg-gray-900 p-2 rounded-full text-white">
                                <span className="font-bold">→</span>
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default TestimonialSection;
