import { useState } from 'react';
import { FaBook, FaTasks, FaListAlt, FaPlusCircle } from 'react-icons/fa';

const Sidebar = () => {
  const [isProjectOpen, setIsProjectOpen] = useState(false);
  const [isCatalogOpen, setIsCatalogOpen] = useState(false);

  return (
    <aside className="h-screen w-64 bg-white shadow-lg flex flex-col p-6">
      {/* Logo */}
      <div className="text-center text-2xl font-bold text-green-600 mb-8">
        Dashboard
      </div>

      {/* Courses */}
      <nav className="space-y-4">
        <a href="#courses" className="flex items-center text-gray-600 hover:text-green-600">
          <FaBook className="mr-2" />
          <span>Courses</span>
        </a>

        {/* Project Section */}
        <div>
          <button
            onClick={() => setIsProjectOpen(!isProjectOpen)}
            className="flex items-center w-full text-gray-600 hover:text-green-600 focus:outline-none"
          >
            <FaTasks className="mr-2" />
            <span>Project</span>
          </button>
          {isProjectOpen && (
            <div className="ml-8 mt-2 space-y-2 text-gray-500">
              <a href="#add-project" className="flex items-center hover:text-green-600">
                <FaPlusCircle className="mr-2" />
                Add Project
              </a>
              <a href="#track-progress" className="flex items-center hover:text-green-600">
                Track Progress
              </a>
            </div>
          )}
        </div>

        {/* Course Catalog Section */}
        <div>
          <button
            onClick={() => setIsCatalogOpen(!isCatalogOpen)}
            className="flex items-center w-full text-gray-600 hover:text-green-600 focus:outline-none"
          >
            <FaListAlt className="mr-2" />
            <span>Course Catalog</span>
          </button>
          {isCatalogOpen && (
            <div className="ml-8 mt-2 space-y-2 text-gray-500">
              <a href="#category1" className="hover:text-green-600">Category 1</a>
              <a href="#category2" className="hover:text-green-600">Category 2</a>
              <a href="#category3" className="hover:text-green-600">Category 3</a>
            </div>
          )}
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
