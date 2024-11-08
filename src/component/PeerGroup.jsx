import React from 'react';

const PeerGroupEngagement = () => {
  return (
    <div className="bg-gray-100 py-6">
      <h2 className="text-2xl font-bold text-center text-green-600 mb-4">Peer Group Engagement</h2>
      
      {/* Discussion Forum Section */}
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6 mb-6">
        <h3 className="text-xl font-semibold mb-2">Discussion Forum</h3>
        <textarea 
          className="w-full h-24 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" 
          placeholder="Start a new discussion or ask a question..."
        />
        <button className="mt-2 bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600">Post</button>
        
        {/* Example Discussion Posts */}
        <div className="mt-4">
          <div className="p-4 border-b">
            <h4 className="font-semibold">How do I start learning React?</h4>
            <p className="text-gray-600">Posted by Chinonso Okeke</p>
          </div>
          <div className="p-4 border-b">
            <h4 className="font-semibold">Best practices for CSS in large projects?</h4>
            <p className="text-gray-600">Posted by Amina Yusuf</p>
          </div>
        </div>
      </div>

      {/* Project Showcase Section */}
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-xl font-semibold mb-2">Project Showcase</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Example Project Cards */}
          <div className="bg-gray-50 p-4 rounded-lg shadow">
            <h4 className="font-semibold">My First React App</h4>
            <p className="text-gray-500">A simple to-do list application built with React.</p>
            <button className="mt-2 bg-green-500 text-white py-1 px-3 rounded-lg hover:bg-green-600">View Project</button>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg shadow">
            <h4 className="font-semibold">Portfolio Website</h4>
            <p className="text-gray-500">An online portfolio to showcase my projects and skills.</p>
            <button className="mt-2 bg-green-500 text-white py-1 px-3 rounded-lg hover:bg-green-600">View Project</button>
          </div>
          {/* Add more project cards as needed */}
        </div>
      </div>
    </div>
  );
};

export default PeerGroupEngagement;
