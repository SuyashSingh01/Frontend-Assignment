import React from 'react'
import { category } from '../Data'

function CategoryCard() {

    return (
        <div className="space-y-4 flex gap-3">
            {category.map((cat, index) => (
                <div key={index} className="flex flex-col gap-4 p-2 md:p-4 hover:bg-[#ffd050]">
                    <img src={cat.image} alt={cat.name} className="w-24 h-24 rounded-full mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-[#232536]">{cat.name}</h3>
                    <p className="text-sm text-[#6D6E76]">{cat.Description}</p>
                </div>
            ))}
        </div>
    )
}

export default CategoryCard