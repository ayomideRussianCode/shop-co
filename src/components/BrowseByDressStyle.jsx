import React from 'react';

export default function BrowseByDressStyle() {
  const categories = [
    {
      id: 1,
      name: 'Casual',
      image: '/casual.svg',
    },
    {
      id: 2,
      name: 'Formal',
      image: '/formal.svg', 
    },
    {
      id: 3,
      name: 'Party',
      image: '/party.svg',
    },
    {
      id: 4,
      image: '/gym.svg',
    },
  ];

  return (
    <div className="bg-gray-100 rounded-3xl py-8 px-6 sm:py-10 sm:px-8 md:px-12 my-12 max-w-6xl mx-auto">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8">BROWSE BY DRESS STYLE</h2>
      
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
        <div className="col-span-1">
          <CategoryCard category={categories[0]} />
        </div>
        <div className="col-span-1">
          <CategoryCard category={categories[1]} />
        </div>
        <div className="col-span-1">
          <CategoryCard category={categories[2]} />
        </div>
        <div className="col-span-1">
          <CategoryCard category={categories[3]} />
        </div>
      </div>
    </div>
  );
}

function CategoryCard({ category }) {
  return (
    <div className="relative bg-white rounded-xl overflow-hidden cursor-pointer group h-full">
      <div className="aspect-[4/3] overflow-hidden h-full">
        <img
          src={category.image}
          alt={`${category.name} fashion`}
          className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      
      <div className="absolute top-4 left-0 p-3 sm:p-4 md:p-6">
        <h3 className="text-3xl text-black sm:text-lg md:text-xl font-semibold">{category.name}</h3>
      </div>
    </div>
  );
}