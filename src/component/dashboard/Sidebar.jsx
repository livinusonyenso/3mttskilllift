import { useState } from 'react';
import {
  FaBook, FaTasks, FaListAlt, FaPlusCircle, FaSyncAlt, FaCloudDownloadAlt,
  FaGlobe, FaBars, FaUserFriends, FaCalendarAlt, FaChalkboardTeacher,
} from 'react-icons/fa';
import { Switch } from '@headlessui/react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Sidebar = () => {
  const [isProjectOpen, setIsProjectOpen] = useState(false);
  const [isCatalogOpen, setIsCatalogOpen] = useState(false);
  const [isCommunityOpen, setIsCommunityOpen] = useState(false);
  const [isOfflineMode, setIsOfflineMode] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);

  const handleLanguageChange = (e) => setSelectedLanguage(e.target.value);

  const handleSyncNow = () => {
    toast.info('Syncing new content...', { position: 'top-right', autoClose: 2000 });
  };

  const handleDownloadAll = () => {
    toast.success('Downloading all content...', { position: 'top-right', autoClose: 3000 });
  };

  return (
    <aside
      className={`h-screen fixed top-0 left-0 transition-all duration-300 ${
        isSidebarExpanded ? 'w-64' : 'w-20'
      } bg-white shadow-lg flex flex-col p-4 relative`}
    >
      <ToastContainer />

      {/* Toggle Sidebar */}
      <div className="flex items-center justify-between mb-8">
        <button
          onClick={() => setIsSidebarExpanded(!isSidebarExpanded)}
          className="text-gray-600 hover:text-green-600"
        >
          <FaBars size={24} />
        </button>
        {isSidebarExpanded && (
          <div className="text-center text-2xl font-bold text-green-600">
            Dashboard
          </div>
        )}
      </div>

      {/* Language Selector */}
      <div className="mb-6 text-center">
        {isSidebarExpanded ? (
          <>
            <label className="flex items-center space-x-2 text-gray-700">
              <FaGlobe className="text-green-600" />
              <span className="font-medium">Language</span>
            </label>
            <select
              value={selectedLanguage}
              onChange={handleLanguageChange}
              className="w-full mt-2 p-2 border rounded-md"
            >
              <option>English</option>
              <option>Hausa</option>
              <option>Igbo</option>
              <option>Yoruba</option>
            </select>
          </>
        ) : (
          <FaGlobe className="text-gray-600 mx-auto" size={24} />
        )}
      </div>

      {/* Navigation */}
      <nav className="space-y-4">
        <a
          href="#courses"
          className="flex items-center text-gray-600 hover:text-green-600 transition-colors"
        >
          <FaBook className="absolute left-4 top-[calc(100%+16px)]" />
          {isSidebarExpanded && <span className="ml-8">Courses</span>}
        </a>

        {/* Project Section */}
        <div>
          <button
            onClick={() => setIsProjectOpen(!isProjectOpen)}
            className="flex items-center w-full text-gray-600 hover:text-green-600"
          >
            <FaTasks className="absolute left-4 top-[calc(100%+24px)]" />
            {isSidebarExpanded && <span className="ml-8">Project</span>}
          </button>
          {isProjectOpen && isSidebarExpanded && (
            <div className="ml-8 mt-2 space-y-2 text-gray-500">
              <a
                href="#add-project"
                className="flex items-center hover:text-green-600"
              >
                <FaPlusCircle className="mr-2" />
                Add Project
              </a>
              <a
                href="#track-progress"
                className="flex items-center hover:text-green-600"
              >
                Track Progress
              </a>
            </div>
          )}
        </div>

        {/* Course Catalog Section */}
        <div>
          <button
            onClick={() => setIsCatalogOpen(!isCatalogOpen)}
            className="flex items-center w-full text-gray-600 hover:text-green-600"
          >
            <FaListAlt className="absolute left-4 top-[calc(100%+32px)]" />
            {isSidebarExpanded && <span className="ml-8">Course Catalog</span>}
          </button>
          {isCatalogOpen && isSidebarExpanded && (
            <div className="ml-8 mt-2 space-y-2 text-gray-500">
              <a href="#category1" className="hover:text-green-600">
                Category 1
              </a>
              <a href="#category2" className="hover:text-green-600">
                Category 2
              </a>
              <a href="#category3" className="hover:text-green-600">
                Category 3
              </a>
            </div>
          )}
        </div>

        {/* Community Section */}
        <div>
          <button
            onClick={() => setIsCommunityOpen(!isCommunityOpen)}
            className="flex items-center w-full text-gray-600 hover:text-green-600"
          >
            <FaUserFriends className="absolute left-4 top-[calc(100%+40px)]" />
            {isSidebarExpanded && <span className="ml-8">Community</span>}
          </button>
          {isCommunityOpen && isSidebarExpanded && (
            <div className="ml-8 mt-2 space-y-2 text-gray-500">
              <a
                href="#forum"
                className="flex items-center hover:text-green-600"
              >
                <FaChalkboardTeacher className="mr-2" />
                Forum Discussions
              </a>
              <a
                href="#event-calendar"
                className="flex items-center hover:text-green-600"
              >
                <FaCalendarAlt className="mr-2" />
                Event Calendar
              </a>
              <a
                href="#mentorship-programs"
                className="flex items-center hover:text-green-600"
              >
                <FaChalkboardTeacher className="mr-2" />
                Mentorship Programs
              </a>
            </div>
          )}
        </div>
      </nav>

      {/* Offline Mode */}
      <div className="flex items-center justify-between mb-6">
        {isSidebarExpanded ? (
          <>
            <span className="text-sm font-medium text-gray-700">Offline Mode</span>
            <Switch
              checked={isOfflineMode}
              onChange={() => setIsOfflineMode(!isOfflineMode)}
              className={`${
                isOfflineMode ? 'bg-green-600' : 'bg-gray-300'
              } relative inline-flex items-center h-6 rounded-full w-11`}
            >
              <span
                className={`${
                  isOfflineMode ? 'translate-x-6' : 'translate-x-1'
                } inline-block w-4 h-4 transform bg-white rounded-full`}
              />
            </Switch>
          </>
        ) : (
          <FaSyncAlt className="text-gray-600 mx-auto" size={24} />
        )}
      </div>

      {/* Sync Notification */}
      {isSidebarExpanded ? (
        <div className="flex items-center p-3 bg-yellow-100 text-yellow-700 rounded-md mb-6">
          <FaCloudDownloadAlt className="mr-2" />
          <span className="text-sm">New content available for download.</span>
          <button
            className="ml-auto text-green-600 hover:underline text-sm"
            onClick={handleSyncNow}
          >
            Sync Now
          </button>
        </div>
      ) : (
        <FaCloudDownloadAlt
          className="text-gray-600 mx-auto"
          size={24}
          onClick={handleSyncNow}
        />
      )}

      {/* Footer */}
      {isSidebarExpanded && (
        <footer className="mt-auto">
          <button
            className="w-full py-2 mt-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
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
