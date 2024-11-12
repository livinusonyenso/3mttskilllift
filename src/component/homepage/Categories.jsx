// components/CourseCategories.js
import React from 'react';

const categories = [
  {
    name: 'Technology',
    description: 'Explore courses on coding, AI, data science, and more.',
    iconUrl: 'https://i.ytimg.com/vi/BU0HuZLGSuU/maxresdefault.jpg',
    bgColor: 'bg-blue-100',
    hoverColor: 'bg-blue-200'
  },
  {
    name: 'Business',
    description: 'Learn about finance, marketing, and entrepreneurship.',
    iconUrl: 'https://i.ytimg.com/vi/nS_hg7dywB4/maxresdefault.jpg',
    bgColor: 'bg-green-100',
    hoverColor: 'bg-green-200'
  },
  {
    name: 'Art & Design',
    description: 'Courses on graphic design, photography, and more.',
    iconUrl: 'https://i.ytimg.com/vi/dZmkPmfW0XA/maxresdefault.jpg',
    bgColor: 'bg-pink-100',
    hoverColor: 'bg-pink-200'
  },
  {
    name: 'Science',
    description: 'Dive into physics, chemistry, biology, and more.',
    iconUrl: 'https://i.ytimg.com/vi/0x5mf8BUJZY/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-DoACuAiKAgwIABABGCwgVyh_MA8=&rs=AOn4CLDIA0H0cYU4ULH4Zu5Tp1E_6u3CXgs',
    bgColor: 'bg-purple-100',
    hoverColor: 'bg-purple-200'
  },
  // Add more categories as needed
];

const CourseCategories = () => {
  return (
    <section className="px-6 py-12 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-8">
          Categories of Courses
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className={`${category.bgColor} p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer hover:${category.hoverColor} `}
            >
              {/* Icon */}
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white mb-4 mx-auto overflow-hidden">
                <img
                  src={category.iconUrl}
                  alt={`${category.name} icon`}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Category Name */}
              <h3 className="text-xl font-semibold text-center text-gray-800 mb-2">
                {category.name}
              </h3>
              {/* Description */}
              <p className="text-gray-600 text-center text-sm">
                {category.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseCategories;
