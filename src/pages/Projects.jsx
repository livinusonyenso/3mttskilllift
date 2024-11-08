import React from 'react';
import ProjectShowcase from '../component/ProjectShowcase';

function Projects() {
  return (
    <div className="p-8 text-center">
      <h2 className="text-green-600 text-2xl font-bold mb-4">Projects</h2>
      <p>Discover 12-week guided projects that will help you progress from foundational to advanced skills.</p>
   <ProjectShowcase />
    </div>
  );
}

export default Projects;
