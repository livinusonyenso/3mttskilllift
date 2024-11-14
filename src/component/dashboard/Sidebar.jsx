import { useState } from 'react';
import {
  FaBook, FaTasks, FaListAlt, FaPlusCircle, FaSyncAlt, FaCloudDownloadAlt, FaGlobe, FaBars
} from 'react-icons/fa';
import { Switch } from '@headlessui/react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Sidebar = () => {
  const [isProjectOpen, setIsProjectOpen] = useState(false);
  const [isCatalogOpen, setIsCatalogOpen] = useState(false);
  const [isOfflineMode, setIsOfflineMode] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true); // Toggle sidebar state

  const handleLanguageChange = (e) => setSelectedLanguage(e.target.value);

  const handleSyncNow = () => {
    toast.info("Syncing new content...", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const handleDownloadAll = () => {
    toast.success("Downloading all content...", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <aside
      className={`h-screen ${isSidebarExpanded ? 'w-64' : 'w-20'} bg-white shadow-lg flex flex-col p-4 transition-all duration-300`}
    >
      <ToastContainer /> {/* Toast container for displaying notifications */}

      {/* Toggle Button */}
      <button
        onClick={() => setIsSidebarExpanded(!isSidebarExpanded)}
        className="text-gray-600 hover:text-green-600 mb-4 self-end"
      >
        <FaBars size={24} />
      </button>

      {/* Logo */}
      {isSidebarExpanded && (
        <div className="text-center text-2xl font-bold text-green-600 mb-8">
          Dashboard
        </div>
      )}

      {/* Language Selector */}
      <div className="mb-6">
        {isSidebarExpanded ? (
          <>
            <label className="flex items-center space-x-2 text-gray-700">
              <FaGlobe className="text-green-600" />
              <span className="font-medium">Language</span>
            </label>
            <select
              value={selectedLanguage}
              onChange={handleLanguageChange}
              className="w-full mt-2 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-600 transition-colors"
            >
              <option>English</option>
              <option>Hausa</option>
              <option>Igbo</option>
              <option>Yoruba</option>
              <option>Efik</option>
              <option>Calabar</option>
            </select>
          </>
        ) : (
          <FaGlobe className="text-gray-600 mx-auto" size={24} />
        )}
      </div>

      {/* Navigation */}
      <nav className="space-y-4">
        {/* Courses */}
        <a href="#courses" className="flex items-center text-gray-600 hover:text-green-600 transition-colors">
          <FaBook className="mr-2" />
          {isSidebarExpanded && <span>Courses</span>}
        </a>

        {/* Project Section */}
        <div>
          <button
            onClick={() => setIsProjectOpen(!isProjectOpen)}
            className="flex items-center w-full text-gray-600 hover:text-green-600 focus:outline-none transition-colors"
          >
            <FaTasks className="mr-2" />
            {isSidebarExpanded && <span>Project</span>}
          </button>
          {isProjectOpen && isSidebarExpanded && (
            <div className="ml-8 mt-2 space-y-2 text-gray-500">
              <a href="#add-project" className="flex items-center hover:text-green-600 transition-colors">
                <FaPlusCircle className="mr-2" />
                Add Project
              </a>
              <a href="#track-progress" className="flex items-center hover:text-green-600 transition-colors">
                Track Progress
              </a>
            </div>
          )}
        </div>

        {/* Course Catalog Section */}
        <div>
          <button
            onClick={() => setIsCatalogOpen(!isCatalogOpen)}
            className="flex items-center w-full text-gray-600 hover:text-green-600 focus:outline-none transition-colors"
          >
            <FaListAlt className="mr-2" />
            {isSidebarExpanded && <span>Course Catalog</span>}
          </button>
          {isCatalogOpen && isSidebarExpanded && (
          <div className="ml-8 mt-2 space-y-2 text-gray-500 ">
          <a href="#category1" className="block hover:text-green-600 transition-colors">Category 1</a>
          <a href="#category2" className="block hover:text-green-600 transition-colors">Category 2</a>
          <a href="#category3" className="block hover:text-green-600 transition-colors">Category 3</a>
        </div>
        
          )}
        </div>
      </nav>

      {/* Divider */}
      {isSidebarExpanded && <div className="border-t border-gray-200 my-6"></div>}

      {/* Offline Mode */}
      <div className="flex items-center justify-between mb-6">
        {isSidebarExpanded ? (
          <>
            <span className="text-sm font-medium text-gray-700">Offline Mode</span>
            <Switch
              checked={isOfflineMode}
              onChange={() => setIsOfflineMode(!isOfflineMode)}
              className={`${isOfflineMode ? "bg-green-600" : "bg-gray-300"} relative inline-flex items-center h-6 rounded-full w-11 transition-colors`}
            >
              <span className="sr-only">Toggle Offline Mode</span>
              <span
                className={`${isOfflineMode ? "translate-x-6" : "translate-x-1"} inline-block w-4 h-4 transform bg-white rounded-full transition-transform`}
              />
            </Switch>
          </>
        ) : (
          <FaSyncAlt className="text-gray-600 mx-auto" size={24} />
        )}
      </div>

      {/* New Content Sync Notification */}
      {isSidebarExpanded ? (
        <div className="flex items-center p-3 bg-yellow-100 text-yellow-700 rounded-md mb-6">
          <FaCloudDownloadAlt className="mr-2" />
          <span className="text-sm">New content available for download.</span>
          <button className="ml-auto text-green-600 hover:underline text-sm" onClick={handleSyncNow}>
            Sync Now
          </button>
        </div>
      ) : (
        <FaCloudDownloadAlt className="text-gray-600 mx-auto" size={24} onClick={handleSyncNow} />
      )}

      {/* Footer */}
      {isSidebarExpanded && (
        <footer className="mt-auto">
          <button
            className="w-full py-2 mt-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            onClick={handleDownloadAll}
          >
            Download All Content
          </button>
        </footer>
      )}
    </aside>
  );
};

export default Sidebar;
