import { useState } from 'react';
import { FaSearch, FaBell, FaUserCircle } from 'react-icons/fa';
import logo from '../../assets/logo.png'; // replace with your logo

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [unreadNotifications, setUnreadNotifications] = useState(0);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
      {/* Logo */}
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-8" />
      </div>

      {/* Search Bar */}
      {/* <div className="relative w-1/3 max-w-md">
        <input
          type="text"
          placeholder="Search..."
          className="w-full px-4 py-2 pl-10 text-gray-700 bg-gray-100 rounded-full focus:outline-none shadow-sm"
        />
        <FaSearch className="absolute left-3 top-2.5 text-gray-400" />
      </div> */}

      {/* Icons: Notifications & Profile */}
      <div className="flex items-center space-x-4">
        {/* Notifications Icon with Badge */}
        <div className="relative cursor-pointer">
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
    </header>
  );
};

export default Header;
