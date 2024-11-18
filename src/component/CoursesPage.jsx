// pages/CoursesPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const techSkills = [
  {
    title: 'Web Development Essentials',
    instructor: 'Jane Doe',
    duration: '6 Weeks',
    description: 'Master HTML, CSS, and JavaScript to build responsive web pages.',
    rating: 4.5,
    imageUrl: 'https://i.ytimg.com/vi/erEgovG9WBs/maxresdefault.jpg',
  },
  {
    title: 'Python for Beginners',
    instructor: 'John Smith',
    duration: '5 Weeks',
    description: 'Learn Python programming from scratch with hands-on examples.',
    rating: 4.7,
    imageUrl: 'https://i.ytimg.com/vi/rfscVS0vtbw/maxresdefault.jpg',
  },
  {
    title: 'Mastering Data Science',
    instructor: 'Lisa Brown',
    duration: '8 Weeks',
    description: 'Gain skills in data analysis, visualization, and machine learning.',
    rating: 4.9,
    imageUrl: 'https://i.ytimg.com/vi/-ETQ97mXXF0/maxresdefault.jpg',
  },
  {
    title: 'UI/UX Design Masterclass',
    instructor: 'Michael Green',
    duration: '7 Weeks',
    description: 'Learn design principles and create stunning digital interfaces.',
    rating: 4.8,
    imageUrl: 'https://i.ytimg.com/vi/NTmh8l-Xl4c/maxresdefault.jpg',
  },
  {
    title: 'DevOps Fundamentals',
    instructor: 'David Black',
    duration: '6 Weeks',
    description: 'Understand CI/CD pipelines and cloud-native tools like Docker and Kubernetes.',
    rating: 4.7,
    imageUrl: 'https://i.ytimg.com/vi/j5Zsa_eOXeY/maxresdefault.jpg',
  },
  {
    title: 'Full-Stack JavaScript',
    instructor: 'Emily White',
    duration: '10 Weeks',
    description: 'Build modern web applications using React, Node.js, and Express.',
    rating: 4.8,
    imageUrl: 'https://i.ytimg.com/vi/0riHps91AzE/maxresdefault.jpg',
  },
  {
    title: 'Cybersecurity Basics',
    instructor: 'Alex Brown',
    duration: '4 Weeks',
    description: 'Learn key principles of network security and ethical hacking.',
    rating: 4.6,
    imageUrl: 'https://i.ytimg.com/vi/5MMoxyK1Y9o/maxresdefault.jpg',
  },
  {
    title: 'Cloud Computing with AWS',
    instructor: 'Sophia Green',
    duration: '9 Weeks',
    description: 'Learn cloud architecture and AWS services like EC2, S3, and Lambda.',
    rating: 4.8,
    imageUrl: 'https://i.ytimg.com/vi/O61gbmYZJmE/maxresdefault.jpg',
  },
  {
    title: 'Blockchain Development',
    instructor: 'Chris White',
    duration: '6 Weeks',
    description: 'Understand blockchain principles and create decentralized apps.',
    rating: 4.9,
    imageUrl: 'https://i.ytimg.com/vi/dGtXO0GkI04/maxresdefault.jpg',
  },
];

const CoursesPage = () => {
    const {login} = useAuth()
    const navigate = useNavigate()
      // Handle the button click
  const handleCourse = () => {
    if (login) {
      navigate('/dashboard'); // Redirect to dashboard if logged in
    } else {
      navigate('/login'); // Redirect to login if not logged in
    }
  };

  return (
    <main className="bg-gray-50 min-h-screen py-12">
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12 animate-fade-in">
          Top Tech Skills to Master
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {techSkills.map((course, index) => (
            <div
              key={index}
              className="relative flex flex-col items-start p-6 bg-white rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300 ease-in-out"
            >
              {/* Course Image */}
              <img
                src={course.imageUrl}
                alt={course.title}
                className="w-full h-52 rounded-lg mb-4 object-cover animate-fade-in"
              />

              {/* Course Details */}
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {course.title}
              </h3>
              <p className="text-sm text-gray-600 mb-1">
                Instructor: <span className="font-medium">{course.instructor}</span>
              </p>
              <p className="text-sm text-gray-500 mb-4">Duration: {course.duration}</p>
              <p className="text-gray-700 text-sm mb-6">{course.description}</p>

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
                <span className="ml-2 text-sm text-gray-500">({course.rating})</span>
              </div>

              {/* Enroll Button */}
              <button className="w-full py-2 px-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-full hover:from-blue-600 hover:to-indigo-700 transition duration-300 ease-in-out animate-bounce" onClick={handleCourse}>
                Enroll Now
              </button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default CoursesPage;
