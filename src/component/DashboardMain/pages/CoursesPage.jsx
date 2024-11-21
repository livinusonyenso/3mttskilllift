import React from "react";

const CoursesPage = () => {
  const courses = [
    { id: 1, title: "React for Beginners", progress: 75 },
    { id: 2, title: "Advanced JavaScript", progress: 50 },
    { id: 3, title: "UI/UX Design Principles", progress: 30 },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-green-700">My Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div key={course.id} className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-lg font-semibold text-gray-800">{course.title}</h2>
            <div className="mt-4">
              <div className="h-2 bg-gray-200 rounded">
                <div
                  className="h-2 bg-green-600 rounded"
                  style={{ width: `${course.progress}%` }}
                ></div>
              </div>
              <p className="text-sm text-gray-600 mt-2">{course.progress}% completed</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursesPage;
