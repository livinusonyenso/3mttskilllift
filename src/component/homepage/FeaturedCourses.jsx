// components/FeaturedCourses.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const courses = [
  {
    title: 'Introduction to Web Development',
    instructor: 'Jane Doe',
    duration: '6 Weeks',
    description: 'Learn the basics of HTML, CSS, and JavaScript to build your first web pages.',
    rating: 4.5,
    imageUrl: 'https://i.ytimg.com/vi/erEgovG9WBs/maxresdefault.jpg'
  },
  {
    title: 'Data Science & Machine Learning',
    instructor: 'John Smith',
    duration: '8 Weeks',
    description: 'Dive into data analysis, visualization, and machine learning using Python.',
    rating: 4.8,
    imageUrl: 'https://i.ytimg.com/vi/PeMlggyqz0Y/maxresdefault.jpg'
  },
  {
    title: 'UI/UX Design Fundamentals',
    instructor: 'Lisa Brown',
    duration: '5 Weeks',
    description: 'Explore design principles, wireframing, and prototyping for digital products.',
    rating: 4.7,
    imageUrl: 'https://i.ytimg.com/vi/NTmh8l-Xl4c/maxresdefault.jpg'
  }
];

const FeaturedCourses = () => {
  const {login} = useAuth()
  const navigate = useNavigate()


  const handleCourse = () => {
    if (login) {
      navigate('/courses'); // Redirect to dashboard if logged in
    } else {
      navigate('/login'); // Redirect to login if not logged in
    }
  };
  return (
    <section className="px-6 py-12 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-8">
          Featured Courses
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className="relative flex flex-col items-start p-6 bg-white rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
            >
              {/* Course Image */}
              <img
                src={course.imageUrl}
                alt={course.title}
                className="w-full h-48 rounded-md mb-4 object-cover"
              />
              {/* Course Details */}
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                {course.title}
              </h3>
              <p className="text-gray-600 mb-1">Instructor: {course.instructor}</p>
              <p className="text-gray-500 text-sm mb-4">Duration: {course.duration}</p>
              <p className="text-gray-700 text-sm mb-6 flex-grow">
                {course.description}
              </p>

              {/* Star Rating */}
              <div className="flex items-center mb-4">
                {Array.from({ length: 5 }, (_, i) => (
                  <span
                    key={i}
                    className={`${
                      i < Math.floor(course.rating) ? 'text-yellow-400' : 'text-gray-300'
                    } text-lg`}
                  >
                    ★
                  </span>
                ))}
                <span className="ml-2 text-gray-500 text-sm">({course.rating})</span>
              </div>

              {/* Enroll Button */}
              <button className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-full shadow-md hover:bg-blue-700 transition duration-300 ease-in-out mt-auto" onClick={handleCourse}>
                Enroll Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;
