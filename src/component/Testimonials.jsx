import React, { useState, useEffect } from 'react';

// Sample testimonials
const testimonials = [
  { name: 'Amina Bello', text: 'This platform has greatly enhanced my learning experience!', img: 'https://pbs.twimg.com/profile_images/1830901981315022848/wLobLS5a_400x400.jpg' },
  { name: 'Emeka Okafor', text: 'Connecting with mentors has been invaluable for my career!', img: 'https://pbs.twimg.com/profile_images/1830901981315022848/wLobLS5a_400x400.jpg' },
  { name: 'Chinonso Ibe', text: 'The resources provided are top-notch!', img: 'https://pbs.twimg.com/profile_images/1830901981315022848/wLobLS5a_400x400.jpg' },
  { name: 'Fatima Abdul', text: 'I love the community support!', img: 'https://pbs.twimg.com/profile_images/1830901981315022848/wLobLS5a_400x400.jpg' },
  { name: 'Uche Nwankwo', text: 'This program has made learning easy and fun!', img: 'https://pbs.twimg.com/profile_images/1830901981315022848/wLobLS5a_400x400.jpg' },
  { name: 'Tunde Akintola', text: 'Fantastic resources and mentorship!', img: 'https://pbs.twimg.com/profile_images/1830901981315022848/wLobLS5a_400x400.jpg' },
  { name: 'Nneka Obi', text: 'An amazing platform for learning!', img: 'https://pbs.twimg.com/profile_images/1830901981315022848/wLobLS5a_400x400.jpg' },
  { name: 'Chigozie Nwosu', text: 'I’ve learned so much in a short time!', img: 'https://pbs.twimg.com/profile_images/1830901981315022848/wLobLS5a_400x400.jpg' },
  { name: 'Ifeoma Eze', text: 'Great community and resources!', img: 'https://pbs.twimg.com/profile_images/1830901981315022848/wLobLS5a_400x400.jpg' },
  { name: 'Victor Nwankwo', text: 'My skills have improved drastically!', img: 'https://pbs.twimg.com/profile_images/1830901981315022848/wLobLS5a_400x400.jpg' },
  { name: 'Adaobi Nwafor', text: 'The mentorship is top-notch!', img: 'https://pbs.twimg.com/profile_images/1830901981315022848/wLobLS5a_400x400.jpg' },
  { name: 'Jide Adebayo', text: 'Incredible support from the community!', img: 'https://pbs.twimg.com/profile_images/1830901981315022848/wLobLS5a_400x400.jpg' },
  { name: 'Ngozi Chukwuma', text: 'Highly recommended for aspiring developers!', img: 'https://pbs.twimg.com/profile_images/1830901981315022848/wLobLS5a_400x400.jpg' },
  { name: 'Emmanuela Osagie', text: 'The learning path is well structured!', img: 'https://pbs.twimg.com/profile_images/1830901981315022848/wLobLS5a_400x400.jpg' },
  { name: 'Kingsley Eze', text: 'A fantastic learning experience!', img: 'https://pbs.twimg.com/profile_images/1830901981315022848/wLobLS5a_400x400.jpg' },
];

function SimpleTestimonialsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gray-100 relative overflow-hidden">
      <h2 className="text-2xl font-bold text-center text-green-600 mb-4">What Our Users Say</h2>
      <div className="relative h-64 overflow-hidden">
        <div
          className="absolute inset-0 flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex-shrink-0 w-full p-4">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <img src={testimonial.img} alt={`${testimonial.name} avatar`} className="w-16 h-16 rounded-full mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-800">{testimonial.name}</h3>
                <p className="text-sm text-gray-600 italic">"{testimonial.text}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SimpleTestimonialsSlider;
