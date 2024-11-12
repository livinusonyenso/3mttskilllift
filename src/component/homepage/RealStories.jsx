// RealStoriesCarousel.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Testimonial data
const testimonials = [
  {
    quote: "SkillLift transformed my son's approach to learning. He’s now more confident and engaged!",
    name: "Linda Thompson",
    role: "Parent",
    image: "https://pbs.twimg.com/profile_images/1844754952993812490/qeh1hsKK_400x400.jpg",
  },
  {
    quote: "I used to struggle with math, but SkillLift made it fun and easy to understand.",
    name: "Jake Harris",
    role: "Student",
    image: "https://pbs.twimg.com/profile_images/1852067144038780931/b22VOX81_400x400.jpg",
  },
  {
    quote: "As a parent, I feel more involved in my child's learning progress, thanks to SkillLift.",
    name: "Maria Gomez",
    role: "Parent",
    image: "https://pbs.twimg.com/profile_images/1811473980966207491/g-V3s0I8_400x400.jpg",
  },
];

const RealStoriesCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    pauseOnHover: true,
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-green-50 rounded-lg shadow-lg">
      <h2 className="text-center text-2xl font-bold text-green-600 mb-6">
        Real Stories from SkillLift
      </h2>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="flex justify-center">
            <div className="flex flex-col items-center bg-white rounded-lg p-6 shadow-md text-center transform hover:scale-105 transition-transform">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full border-4 border-green-500 mb-4"
              />
              <p className="italic text-gray-700 mb-4">"{testimonial.quote}"</p>
              <p className="font-semibold text-green-600 text-lg">{testimonial.name}</p>
              <p className="text-gray-500 text-sm">{testimonial.role}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default RealStoriesCarousel;
