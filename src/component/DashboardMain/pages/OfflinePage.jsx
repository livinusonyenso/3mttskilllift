import React from "react";

const OfflinePage = () => {
  const offlineCourses = [
    { id: 1, title: "Data Structures Workshop", location: "New York", date: "Dec 5, 2024" },
    { id: 2, title: "UI/UX Masterclass", location: "San Francisco", date: "Jan 20, 2025" },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-green-700">Offline Courses</h1>
      <div className="space-y-4">
        {offlineCourses.map((course) => (
          <div
            key={course.id}
            className="bg-white rounded-lg shadow-md p-4 flex items-start justify-between"
          >
            <div>
              <h2 className="text-lg font-semibold text-gray-800">{course.title}</h2>
              <p className="text-sm text-gray-600 mt-1">
                Location: <span className="font-medium">{course.location}</span>
              </p>
              <p className="text-sm text-gray-600 mt-1">
                Date: <span className="font-medium">{course.date}</span>
              </p>
            </div>
            <button className="bg-green-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-green-700">
              Enroll
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OfflinePage;
