// components/HeroSection.js
import React, { useState, useEffect } from 'react';

const images = [
  'https://schoolscompass.com.ng/blog/wp-content/uploads/2020/02/jarspok.jpg',
  'https://www.projectelimu.org/img/IMG_0020DL.jpg',
  'https://vitalentum.net/upload/007/u728/b/6/african-children-using-laptop-computers-in-school-photo-photos-big.webp',
  'https://ruralafricafacts.wordpress.com/wp-content/uploads/2015/07/dsc_0460.jpg',
  'https://www.robertharding.com/watermark.php?type=preview&im=RM/RH/HORIZONTAL/797-1466'

  
];

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-screen bg-gray-900 overflow-hidden">
      {/* Background Image Slide */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center transition-opacity duration-1000"
        style={{ backgroundImage: `url(${images[currentImage]})` }}
      ></div>

      {/* Overlay to Darken the Image */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-wide text-white drop-shadow-lg">
          Empowering the Next Generation through Technology & Learning
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-lg mx-auto drop-shadow-lg">
          Discover courses, mentorship, and resources tailored to inspire and accelerate your learning journey.
        </p>
        <button className="mt-8 px-6 py-3 bg-green-500 text-white text-lg font-semibold rounded-full shadow-md hover:bg-green-600 transition duration-300 ease-in-out">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
