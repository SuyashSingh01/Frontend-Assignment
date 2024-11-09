import React from 'react';
import {posts} from '../Data';
const AllPosts = () => {
  return (
    <section className="p-6 bg-white">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-[#232536]">All Posts</h2>
        <a href="#view-all" className="text-[#6D6E76] hover:underline">View All</a>
      </div>
      <div className="space-y-4">
        {posts.map((post, index) => (
          <div key={index} className="border-b border-[#E1E1E1] pb-4">
            <p className="text-sm text-[#6D6E76]">By {post.author} | {post.date}</p>
            <h3 className="text-lg font-semibold text-[#232536]">{post.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AllPosts;
