import React from 'react';

function PostItemCard({index,Item}) {
    const { Tag, Title, Description,Image } = Item;
    return (
        <div  key={index} className='flex '>
            <div>
                <img src={Image} alt="post" className="w-50% h-50% object-cover rounded-sm" />
            </div>
            <div className="bg-[#F4F0F8] p-6 rounded-lg shadow-lg hover:bg-[#FFD050] transition duration-300">
                <h3 className="text-md text-[#232536]">{Tag} </h3>
                <div className='flex items-center flex-col gap-5 '>
                <h2 className="text-xl font-bold text-[#232536]  ">{Title}</h2>
                <p className="text-[#6D6E76] mt-2">{Description}</p>
                </div>
            </div>
        </div>
    )
}

export default PostItemCard