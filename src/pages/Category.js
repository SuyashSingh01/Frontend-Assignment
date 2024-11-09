 
import React from 'react';
import {posts,categories,tags} from '../Data';
const Category = () => {


  return (
    <div className="container mx-auto px-4 mb-8">
      {/* Header Section */}
      <div className="text-center mb-10 bg-[#F4F0F8] p-20">
        <h1 className="text-4xl font-bold">Business</h1>
        <p className="text-gray-600 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
        <p className="text-sm text-gray-500 mt-1">Blog &gt; Business</p>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row">
        {/* Blog Posts */}
        <div className="lg:w-3/4">
          {posts.map((post, index) => (
            <div key={index} className="flex flex-col lg:flex-row items-start mb-8">
              <img src={post.image} alt={post.title} className="w-full lg:w-1/4 h-48 object-cover rounded-md" />
              <div className="lg:ml-6 mt-4 lg:mt-0">
                <span className="text-purple-600 font-semibold uppercase">{post.Tag}</span>
                <h2 className="text-xl font-bold mt-2">{post.title}</h2>
                <p className="text-gray-600 mt-2">{post.Description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Sidebar */}
        <div className="lg:w-1/4 lg:ml-8 mt-10 lg:mt-0">
          {/* Categories */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <div className="flex flex-col space-y-2">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 text-left rounded-md ${
                    category === 'Startup' ? 'bg-yellow-400 text-white' : 'bg-gray-100'
                  } hover:bg-yellow-400 hover:text-white transition-colors`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Tags */}
          <div>
            <h3 className="text-lg font-semibold mb-4">All Tags</h3>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-sm bg-gray-200 rounded-full hover:bg-gray-300 transition-colors cursor-pointer"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
