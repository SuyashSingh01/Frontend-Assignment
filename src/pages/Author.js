import React from 'react'
import { posts } from '../Data'

function Author() {

    return (
        <div className="container mx-auto px-4 py-8 space-y-12">
          {/* Author Intro Section */}
          <div className="text-center flex flex-col items-center mb-12">
            <img src="/path/to/author-image.jpg" alt="Author" className="w-32 h-32 rounded-full mb-4" />
            <h1 className="text-3xl font-bold">Hey there, I'm Andrew Johnson and welcome to my Blog</h1>
            <p className="text-gray-600 mt-4 max-w-xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem.
            </p>
            <div className="flex justify-center space-x-4 mt-4 text-gray-600">
              <a href="#" className="hover:text-gray-800"><i className="fab fa-facebook"></i></a>
              <a href="#" className="hover:text-gray-800"><i className="fab fa-twitter"></i></a>
              <a href="#" className="hover:text-gray-800"><i className="fab fa-instagram"></i></a>
              <a href="#" className="hover:text-gray-800"><i className="fab fa-linkedin"></i></a>
            </div>
          </div>
    
          {/* Decorative Divider */}
          <div className="flex justify-center space-x-2 mb-8">
            <div className="h-1 w-24 bg-yellow-400"></div>
            <div className="h-1 w-24 bg-purple-600"></div>
          </div>
    
          {/* Posts Section */}
          <h2 className="text-2xl font-bold mb-6">My Posts</h2>
          <div className="space-y-8">
            {posts.map((post, index) => (
              <div key={index} className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
                <img src={post.image} alt={post.title} className="w-full md:w-1/3 h-48 object-cover rounded-lg" />
                <div>
                  <span className="text-purple-600 font-semibold text-sm">{post.category}</span>
                  <h3 className="text-xl font-bold mt-2">{post.title}</h3>
                  <p className="text-gray-600 mt-2">{post.Description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
    
  )
}

export default Author