// src/component/Sidebar.jsx
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { 
  MdDashboard, MdSchool, MdWork, MdOfflineBolt, MdSettings, MdLanguage, 
  MdSync, MdDownload, MdMenu, MdClose 
} from "react-icons/md";
import { FaSyncAlt, FaCloudDownloadAlt } from "react-icons/fa";
import { Switch } from "@headlessui/react";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import useAuth from "../../hooks/useAuth";

const Sidebar = () => {
  const { logout } = useAuth();

  const [isOfflineMode, setIsOfflineMode] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const [isExpanded, setIsExpanded] = useState(false); // State to control sidebar expand/collapse
  
  const navLinks = [
    { name: "Dashboard", icon: <MdDashboard />, path: "/dashboardmain" },
    { name: "Courses", icon: <MdSchool />, path: "/dashboardmain/dashboardcourses" },
    { name: "Progress", icon: <MdWork />, path: "/dashboardmain/dashboardprojects" },
    { name: "Offline Mode", icon: <MdOfflineBolt />, path: "/dashboardmain/dashboardoffline" },
    { name: "Settings", icon: <MdSettings />, path: "/dashboardmain/dashboardsettings" },
  ];

  const handleLanguageChange = (e) => setSelectedLanguage(e.target.value);

  const handleSyncNow = () => {
    toast.info('Syncing new content...', { position: 'top-right', autoClose: 2000 });
  };

  const handleDownloadAll = () => {
    toast.success('Downloading all content...', { position: 'top-right', autoClose: 3000 });
  };

  return (
    <aside className={`bg-green-700 text-white ${isExpanded ? "w-64" : "w-20"} h-full shadow-lg flex flex-col transition-width duration-300`}>
      <ToastContainer />

      {/* Toggle Button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="p-4 focus:outline-none"
        aria-label="Toggle Sidebar"
      >
        {isExpanded ? <MdClose size={24} /> : <MdMenu size={24} />}
      </button>

      {/* Dashboard Title */}
      {isExpanded && <h1 className="text-2xl font-bold p-4">Dashboard</h1>}

      {/* Navigation Links */}
      <nav className="flex flex-col space-y-2">
        {navLinks.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            className={({ isActive }) =>
              `flex items-center p-4 hover:bg-green-600 ${isActive ? "bg-green-800" : ""}`
            }
          >
            {link.icon}
            {isExpanded && <span className="ml-4">{link.name}</span>}
          </NavLink>
        ))}
      </nav>

      {/* Offline Mode Toggle */}
      <div className="p-4 flex items-center justify-between">
        <span className={`text-sm font-medium ${isExpanded ? "block" : "hidden"}`}>Offline Mode</span>
        <Switch
          checked={isOfflineMode}
          onChange={() => setIsOfflineMode(!isOfflineMode)}
          className={`${
            isOfflineMode ? "bg-green-600" : "bg-gray-300"
          } relative inline-flex items-center h-6 rounded-full w-11`}
        >
          <span
            className={`${
              isOfflineMode ? "translate-x-6" : "translate-x-1"
            } inline-block w-4 h-4 transform bg-white rounded-full`}
          />
        </Switch>
      </div>

      {/* Sync Notification */}
      {isExpanded && (
        <div className="p-4">
          <div className="flex items-center bg-yellow-100 text-yellow-700 p-2 rounded-md">
            <FaCloudDownloadAlt className="mr-2" />
            <span className="text-sm">New content available for download.</span>
            <button
              className="ml-auto text-white bg-green-600 px-2 py-1 rounded hover:bg-green-700 text-sm"
              onClick={handleSyncNow}
            >
              Sync Now
            </button>
          </div>
        </div>
      )}

      {/* Language Selector */}
      {isExpanded && (
        <div className="p-4">
          <label className="flex items-center space-x-2">
            <MdLanguage className="text-white" />
            <span className="font-medium">Language</span>
          </label>
          <select
            value={selectedLanguage}
            onChange={handleLanguageChange}
            className="w-full mt-2 p-2 bg-white text-gray-800 rounded-md"
          >
            <option>English</option>
            <option>Hausa</option>
            <option>Igbo</option>
            <option>Yoruba</option>
          </select>
        </div>
      )}

      {/* Footer - Download All Content */}
      <div className="mt-auto p-4">
        <button
          className="w-full py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg"
          onClick={handleDownloadAll}
        >
          <MdDownload className="inline mr-2" />
          {isExpanded && "Download All Content"}
        </button>
        <a href="#logout" className="block mt-2 text-center hover:bg-gray-100 py-2" onClick={logout}>
          {isExpanded ? "Logout" : <MdDownload />}
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
