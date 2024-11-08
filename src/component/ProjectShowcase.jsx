import React, { useEffect, useState } from 'react';

const projects = [
  { id: 1, title: 'Week 1: HTML Basics', image: 'https://i.ytimg.com/vi/mSnpYJsaT9g/hqdefault.jpg', views: 1200, rating: 4.5, link: 'https://www.youtube.com/' },
  { id: 2, title: 'Week 2: CSS Fundamentals', image: 'https://i.ytimg.com/vi/TzuWIHGFKCQ/maxresdefault.jpg', views: 1500, rating: 4.7, link: 'https://www.youtube.com/watch?v=TzuWIHGF/' },
  { id: 3, title: 'Week 3: Flexbox & Grid', image: 'https://i.ytimg.com/vi/3elGSZSWTbM/maxresdefault.jpg', views: 1700, rating: 4.8, link: 'https://www.youtube.com/watch?v=3elGSZSWTbM' },
  { id: 4, title: 'Week 4: Responsive Design', image: 'https://i.ytimg.com/vi/K24lUqcT0Ms/maxresdefault.jpg', views: 2000, rating: 4.9, link: 'https://www.youtube.com/watch?v=K24lUqcT0Ms' },
  { id: 5, title: 'Week 5: JavaScript Basics', image: 'https://i.ytimg.com/vi/lkIFF4maKMU/maxresdefault.jpg', views: 1800, rating: 4.6, link: 'https://www.youtube.com/watch?v=lkIFF4maKMU' },
  { id: 6, title: 'Week 6: DOM Manipulation', image: 'https://i.ytimg.com/vi/y17RuWkWdn8/maxresdefault.jpg', views: 1900, rating: 4.7, link: 'https://www.youtube.com/watch?v=y17RuWkWdn8' },
  { id: 7, title: 'Week 7: Events & Functions', image: 'https://i.ytimg.com/vi/mSnpYJsaT9g/hqdefault.jpg', views: 2100, rating: 4.8, link: 'https://www.youtube.com/' },
  { id: 8, title: 'Week 8: Async JavaScript', image: 'https://i.ytimg.com/vi/mSnpYJsaT9g/hqdefault.jpg', views: 1600, rating: 4.7, link: 'https://www.youtube.com/' },
  { id: 9, title: 'Week 9: ES6 & Modules', image: 'https://i.ytimg.com/vi/mSnpYJsaT9g/hqdefault.jpg', views: 2200, rating: 4.9, link: 'https://www.youtube.com/' },
  { id: 10, title: 'Week 10: APIs & Fetch', image: 'https://i.ytimg.com/vi/mSnpYJsaT9g/hqdefault.jpg', views: 2500, rating: 4.8, link: 'https://www.youtube.com/' },
  { id: 11, title: 'Week 11: Project Planning', image: 'https://i.ytimg.com/vi/mSnpYJsaT9g/hqdefault.jpg', views: 2400, rating: 4.9, link: 'https://www.youtube.com/' },
  { id: 12, title: 'Week 12: Final Project', image: 'https://i.ytimg.com/vi/mSnpYJsaT9g/hqdefault.jpg', views: 3000, rating: 5.0, link: 'https://www.youtube.com/' },
];

function ProjectShowcase() {
  const [shake, setShake] = useState(false);

  // Trigger the shake effect on initial load
  useEffect(() => {
    setShake(true);
    const timer = setTimeout(() => setShake(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold text-center text-green-600 mb-8">Software Development Journey</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <a
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`bg-white rounded-lg shadow-lg hover:shadow-2xl transform transition-all duration-300 hover:scale-105 ${shake ? 'animate-shake' : ''}`}
          >
            <img src={project.image} alt={project.title} className="w-full h-40 object-cover rounded-t-lg" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-green-600 mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-1">Views: {project.views}</p>
              <p className="text-gray-600">Rating: ⭐ {project.rating}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default ProjectShowcase;
