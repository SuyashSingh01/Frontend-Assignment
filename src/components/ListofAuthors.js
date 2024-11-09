import React from 'react'
import { authors } from '../Data';

function ListofAuthors() {
    return (
        <div><h3 className="text-2xl font-bold text-center mb-6">List of Authors</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {authors.map((author, index) => (
                    <div key={index} className="text-center bg-[#F4F4F4] hover:bg-[#FBF6EA]    rounded-sm shadow-md p-10">
                        <img src={author.image} alt={author.name} className="w-24 h-24 rounded-full mx-auto mb-4" />
                        <h4 className="text-lg font-semibold">{author.name}</h4>
                        <p className="text-gray-500">{author.role}</p>
                        <div className="flex justify-center space-x-2 mt-4">
                            <a href="#" className="text-gray-500 hover:text-gray-800">
                                <i className="fab fa-facebook"></i>
                            </a>
                            <a href="#" className="text-gray-500 hover:text-gray-800">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="#" className="text-gray-500 hover:text-gray-800">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="#" className="text-gray-500 hover:text-gray-800">
                                <i className="fab fa-linkedin"></i>
                            </a>
                        </div>
                    </div>
                ))}
            </div></div>
    )
}

export default ListofAuthors