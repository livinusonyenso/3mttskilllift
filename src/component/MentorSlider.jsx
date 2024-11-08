import React from 'react';

const mentors = [
  { name: 'Chinonso Okeke', expertise: 'Frontend Developer', img: 'https://pbs.twimg.com/profile_images/1844754952993812490/qeh1hsKK_400x400.jpg' },
  { name: 'Amina Yusuf', expertise: 'Backend Developer', img: 'https://pbs.twimg.com/profile_images/1852067144038780931/b22VOX81_400x400.jpg' },
  { name: 'Emeka Nwankwo', expertise: 'Fullstack Developer', img: 'https://pbs.twimg.com/profile_images/1844754952993812490/qeh1hsKK_400x400.jpg' },
  { name: 'Ngozi Uche', expertise: 'UI/UX Designer', img: 'https://pbs.twimg.com/profile_images/1852067144038780931/b22VOX81_400x400.jpg' },
  { name: 'Tunde Balogun', expertise: 'Software Engineer', img: 'https://pbs.twimg.com/profile_images/1844754952993812490/qeh1hsKK_400x400.jpg' },
  { name: 'Zainab Mohammed', expertise: 'Data Scientist', img: 'https://pbs.twimg.com/profile_images/1852067144038780931/b22VOX81_400x400.jpg' },
  // Add more mentors as needed
];

function MentorSlider() {
  return (
    <div className="overflow-hidden w-full bg-gray-100 py-6">
      <h2 className="text-2xl font-bold text-center text-green-600 mb-4">Our Mentors</h2>
      <div className="flex animate-slide space-x-6">
        {mentors.concat(mentors).map((mentor, index) => (
          <div key={index} className="flex-shrink-0 w-48 h-56 p-4 bg-white rounded-lg shadow-lg">
            <img
              src={mentor.img}
              alt={`${mentor.name} avatar`}
              className="w-24 h-24 mx-auto rounded-full border-4 border-green-500"
            />
            <div className="text-center mt-3">
              <h3 className="text-md font-semibold text-gray-800">{mentor.name}</h3>
              <p className="text-sm text-gray-500">{mentor.expertise}</p>
            </div>
          </div>
        ))}
      </div>
      <style jsx>{`
        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-slide {
          animation: slide 20s linear infinite;
        }
      `}</style>
    </div>
  );
}

export default MentorSlider;
