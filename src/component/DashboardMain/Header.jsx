// src/component/Header.jsx
import React, { useState, useEffect, useContext } from "react";
import { FaBell, FaSignOutAlt, FaCog } from "react-icons/fa";
import NotificationsModalDrawerWhiteGreen from "../dashboard/NotificationsModal";
import AccountSettings from "../dashboard/AccountSettings";
import { UserContext } from "./context/UserContext";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import 'react-toastify/dist/ReactToastify.css';

const Header = ({ toggleTheme }) => {
  const { user } = useContext(UserContext);
  const { logout, auth } = useAuth();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [profileImage, setProfileImage] = useState(user?.profilePicture || "/path/to/default-logo.png");
  const [unreadNotifications, setUnreadNotifications] = useState(3);
  const [userName, setUserName] = useState(user?.firstName || "");
  const [userSkill, setUserSkill] = useState(user?.primarySkill || 0);
  const [showAccountSettings, setShowAccountSettings] = useState(false);

  // Fetch user profile data from API on component mount
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          "https://threemttskilllift-backend.onrender.com/api/v1/auth/current-user",
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${auth.token}`,
            },
          }
        );
        const { data } = response.data;
        setUserName(data.firstName || "");
        setUserSkill(data.skill || 0);
      } catch (error) {
        console.error("Error fetching user data:", error);
        if (error.response && error.response.status === 401) {
          console.error("Unauthorized: Invalid or expired token");
        }
      }
    };

    if (auth.token) {
      fetchUserData();
    } else {
      console.error("No token found, unable to fetch user data");
    }
  }, [auth.token]);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const notifications = [
    "New message from John Doe",
    "Your account settings have been updated",
    "Meeting scheduled for tomorrow at 3 PM",
  ];

  return (
    <header className="bg-green-600 text-white flex items-center justify-between p-4 shadow-md z-10y0 sticky top-0">
      {/* User Info */}
      <div className="flex items-center space-x-4">
        <img
          src={profileImage}
          alt="Profile"
          className="h-10 w-10 rounded-full object-cover border-2 border-white"
        />
        <div className="ml-4">
          <h2 className="text-lg font-semibold">Hello  {userName}, Welcome to your SkillLift Dashboard</h2>
          <div className="flex items-center mt-1">
            <div className="relative w-24 h-3 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="absolute top-0 left-0 h-full bg-blue-500 rounded-full transition-all duration-500"
                style={{ width: `${userSkill}%` }}
              ></div>
            </div>
            <span className="ml-2 text-sm text-gray-200 font-semibold">
              {userSkill}% Completed
            </span>
          </div>
        </div>
      </div>

      {/* Actions: Notifications, Theme Toggle, Logout */}
      <div className="flex items-center space-x-4">
        {/* Notifications Icon */}
        <div className="relative cursor-pointer" onClick={toggleModal}>
          <FaBell className="text-2xl hover:text-yellow-300 transition duration-300" />
          {unreadNotifications > 0 && (
            <span className="absolute -top-2 -right-2 inline-flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-red-500 rounded-full">
              {unreadNotifications}
            </span>
          )}
        </div>

  

      </div>

      {/* Notifications Modal */}
      <NotificationsModalDrawerWhiteGreen
        isOpen={isModalOpen}
        onClose={toggleModal}
        notifications={notifications}
      />
    </header>
  );
};

export default Header;
