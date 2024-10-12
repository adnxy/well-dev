import React from 'react';

function TrendingJobCategories() {
  const categories = [
    'Software Developer',
    'UI/UX Designer',
    'Project Manager',
    'Marketing Specialist',
    'Data Analyst',
    'Customer Support',
    'Human Resources',
    'Sales Manager',
    'DevOps Engineer',
    'Business Analyst'
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {categories.map((category, index) => (
            <CategoryCard key={index} name={category} />
          ))}
        </div>
        <button className="mt-8 bg-emerald-600 hover:bg-emerald-500 py-3 px-6 rounded-lg text-white font-medium">Explore All Categories</button>
      </div>
    </section>
  );
}

// CategoryCard Component
const CategoryCard = ({ name }) => (
  <div className="bg-gray-500 py-6 px-4 rounded-lg shadow-sm hover:bg-gray-200 cursor-pointer transition duration-300 ease-in-out">
    <p className="text-lg font-medium text-gray-700">{name}</p>
  </div>
);

export default TrendingJobCategories;
