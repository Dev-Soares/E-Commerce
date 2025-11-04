import React from 'react'

const CategoryCard = ({ categoryName, categoryIcon }) => {
  return (
    <div className='bg-white rounded-xl flex flex-col justify-center items-center p-4 shadow-lg gap-2 w-32 lg:w-40 lg:h-40 h-32 mt-4 cursor-pointer hover:scale-105 transition-transform duration-300'>

        <span className='material-symbols-outlined text-[var(--color-main)] text-5xl!'>{categoryIcon}</span>
        <span className='font-semibold text-[var(--color-main)]'>{categoryName}</span>
    </div>
  )
}

export default CategoryCard
