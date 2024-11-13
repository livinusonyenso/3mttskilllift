import { useState } from 'react';
import { FaDownload, FaSyncAlt } from 'react-icons/fa';
import { Switch } from '@headlessui/react'; // Install "@headlessui/react" for accessible UI elements

const LocalTranslatorPanel = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [isOffline, setIsOffline] = useState(false);
  const [downloadProgress, setDownloadProgress] = useState(0);
  const [isSyncNotification, setIsSyncNotification] = useState(true);

  const handleLanguageChange = (e) => setSelectedLanguage(e.target.value);
  const toggleOfflineMode = () => setIsOffline(!isOffline);

  return (
    <div className="w-full max-w-md p-6 bg-white shadow-lg rounded-lg">
      {/* Language Selector */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">Select Language</label>
        <select
          value={selectedLanguage}
          onChange={handleLanguageChange}
          className="w-full p-2 border border-gray-300 rounded-md focus:border-green-600 focus:outline-none"
        >
          <option>English</option>
          <option>Spanish</option>
          <option>French</option>
          <option>German</option>
          <option>Japanese</option>
        </select>
      </div>

      {/* Offline Mode Toggle */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm font-medium text-gray-700">Offline Mode</span>
        <Switch
          checked={isOffline}
          onChange={toggleOfflineMode}
          className={`${isOffline ? "bg-green-600" : "bg-gray-300"} relative inline-flex items-center h-6 rounded-full w-11 transition-colors focus:outline-none`}
        >
          <span className="sr-only">Enable Offline Mode</span>
          <span
            className={`${isOffline ? "translate-x-6" : "translate-x-1"} inline-block w-4 h-4 transform bg-white rounded-full transition-transform`}
          />
        </Switch>
      </div>

      {/* Downloadable Content */}
      <div className="space-y-4 mb-4">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-gray-700">Download Courses</span>
          <button
            onClick={() => setDownloadProgress(50)} // Mock download action
            className="text-green-600 hover:text-green-700"
          >
            <FaDownload className="inline mr-1" /> Download
          </button>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-gray-700">Download Projects</span>
          <button
            onClick={() => setDownloadProgress(80)} // Mock download action
            className="text-green-600 hover:text-green-700"
          >
            <FaDownload className="inline mr-1" /> Download
          </button>
        </div>
        {downloadProgress > 0 && downloadProgress < 100 && (
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className="bg-green-600 h-2.5 rounded-full"
              style={{ width: `${downloadProgress}%` }}
            ></div>
            <p className="text-xs text-gray-500 mt-1">{downloadProgress}% downloaded</p>
          </div>
        )}
      </div>

      {/* Sync Notifications */}
      {isSyncNotification && (
        <div className="flex items-center p-3 bg-yellow-100 text-yellow-700 rounded-md mb-4">
          <FaSyncAlt className="mr-2" />
          <span className="text-sm">New content available for download. </span>
          <button
            onClick={() => {
              setDownloadProgress(100); // Mock update action
              setIsSyncNotification(false);
            }}
            className="ml-auto text-green-600 hover:underline"
          >
            Sync Now
          </button>
        </div>
      )}

      {/* Space-saving Alert */}
      {downloadProgress >= 80 && (
        <div className="flex items-center p-3 bg-red-100 text-red-700 rounded-md">
          <span className="text-sm">Warning: Low storage space. Consider clearing some downloads.</span>
        </div>
      )}
    </div>
  );
};

export default LocalTranslatorPanel;
