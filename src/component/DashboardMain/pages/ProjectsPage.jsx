import React from "react";

const ProjectsPage = () => {
  const projects = [
    { id: 1, name: "Build a Portfolio", status: "In Progress" },
    { id: 2, name: "E-commerce App", status: "Completed" },
    { id: 3, name: "Real-time Chat App", status: "Not Started" },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-green-700">My Projects</h1>
      <div className="space-y-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="flex items-center justify-between bg-white rounded-lg shadow-md p-4"
          >
            <div>
              <h2 className="text-lg font-semibold text-gray-800">{project.name}</h2>
              <p
                className={`text-sm ${
                  project.status === "Completed"
                    ? "text-green-600"
                    : project.status === "In Progress"
                    ? "text-yellow-600"
                    : "text-red-600"
                }`}
              >
                {project.status}
              </p>
            </div>
            <button
              className="bg-green-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-green-700"
              disabled={project.status === "Completed"}
            >
              {project.status === "Completed" ? "View" : "Continue"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
