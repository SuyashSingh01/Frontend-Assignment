import React from 'react'
import { Authors }  from '../Data';
import { NavLink } from 'react-router-dom';

function ListofAuthors({ele}) {
    const authors = Authors.slice(0,ele);
    return (

        <div><h3 className="text-center mb-6 text-xl md:text-4xl font-bold font-headingfont text-[#232536] p-2 md:p-12 my-2">List of Authors</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 md:p-20 p-10">
                {authors.map((author, index) => (
                    <NavLink to={`/author/${author.id}`}>
                    <div key={index} className="text-center bg-[#F4F4F4] hover:bg-[#FBF6EA]   rounded-sm shadow-md p-10">
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
                    </NavLink>
                ))}
            </div></div>
    )
}

export default ListofAuthors