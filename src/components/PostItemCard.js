import React from 'react';
import { NavLink } from 'react-router-dom';

function PostItemCard({ index, Item}) {
    const { Tag, Title, Description, Image, id } = Item;

    return (
        <NavLink to={`/blogpost/${id}`} key={index}
        >
            <div className='flex flex-col md:flex-row  w-full justify-between items-center'>
                <img src={Image} alt="post" className="w-25 h-25 md:w-50% md:h-50% object-cover rounded-sm" />
                <div className="flex flex-col inset-1 hover:bg-[#FFD050] transition duration-300 text-wrap md:p-10 p-2">
                    <h3 className="text-md text-[#232536]">{Tag} </h3>
                    <div className='flex items-center flex-col p-4'>
                        <h2 className="text-xl font-bold text-[#232536]  ">{Title}</h2>
                        <p className="text-[#6D6E76] mt-2 text-wrap">{Description}& Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis nemo a, repellendus sit quae numquam beatae, ratione harum iure dolor id repudiandae rerum deleniti aliquam? Nihil natus magnam quisquam quia?</p>
                    </div>
                </div>
            </div>
        </NavLink>
    )
}

export default PostItemCard