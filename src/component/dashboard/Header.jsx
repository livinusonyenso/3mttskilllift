// Header.js
import { useState } from 'react';
import { FaBell, FaUserCircle } from 'react-icons/fa';
import logo from '../../assets/logo.png';
import NotificationsModal from './NotificationsModal';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [unreadNotifications, setUnreadNotifications] = useState(3);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const toggleModal = () => setIsModalOpen(!isModalOpen);

  // Sample notifications
  const notifications = [
    "New message from John Doe",
    "Your account settings have been updated",
    "Meeting scheduled for tomorrow at 3 PM"
  ];

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
      {/* Logo */}
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-8" />
      </div>

      {/* Icons: Notifications & Profile */}
      <div className="flex items-center space-x-4">
        {/* Notifications Icon with Badge */}
        <div className="relative cursor-pointer" onClick={toggleModal}>
          <FaBell className="text-gray-600 hover:text-green-600" />
          {unreadNotifications > 0 && (
            <span className="absolute top-0 right-0 inline-flex items-center justify-center w-4 h-4 text-xs text-white bg-green-600 rounded-full">
              {unreadNotifications}
            </span>
          )}
        </div>

        {/* User Profile Icon */}
        <div className="relative">
          <FaUserCircle
            className="text-gray-600 hover:text-green-600 cursor-pointer"
            onClick={toggleDropdown}
          />
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 text-gray-700">
              <a href="#account" className="block px-4 py-2 hover:bg-gray-100">Account Settings</a>
              <a href="#logout" className="block px-4 py-2 hover:bg-gray-100">Logout</a>
            </div>
          )}
        </div>
      </div>

      {/* Notifications Modal */}
      <NotificationsModal
        isOpen={isModalOpen}
        onClose={toggleModal}
        notifications={notifications}
      />
    </header>
  );
};

export default Header;
