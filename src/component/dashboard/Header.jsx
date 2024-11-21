// Header.js
import { useState, useEffect } from "react";
import { FaBell, FaCog } from "react-icons/fa";
import NotificationsModal from "./NotificationsModal";
import useAuth from "../../hooks/useAuth";
import axios from "axios";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [unreadNotifications, setUnreadNotifications] = useState(3);
  const [profileImage, setProfileImage] = useState(null);
  const [showAccountSettings, setShowAccountSettings] = useState(false);
  const [userName, setUserName] = useState("");
  const [userSkill, setUserSkill] = useState(0);
  const { logout, auth } = useAuth();

  // Fetch user profile data from API on component mount
  useEffect(() => {
    const fetchUserData = async () => {
      // Log the token before making the request
      console.log("Auth Token:", auth.token);
  
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
        
        // console.log('Response:', response);
        // console.log('Response Data:', response.data);
    
        // Check token received from response data (optional)
        console.log('Token in Response Data:', response.data.token);
    
        const {data }= response.data;
        setUserName(data.firstName || "");
        setUserSkill(data.skill || 0);
      } catch (error) {
        console.error("Error fetching user data:", error);
  
        // Check for specific unauthorized error
        if (error.response && error.response.status === 401) {
          console.error("Unauthorized: Invalid or expired token");
        }
      }
    };
  
    // Only attempt to fetch if a token exists
    if (auth.token) {
      fetchUserData();
    } else {
      console.error("No token found, unable to fetch user data");
    }
  }, [auth.token]);
  

  // Load the profile image from local storage on component mount
  useEffect(() => {
    const savedProfileImage = localStorage.getItem("profileImage");
    if (savedProfileImage) {
      setProfileImage(savedProfileImage);
    }
  }, []);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const toggleModal = () => setIsModalOpen(!isModalOpen);

  // Convert image file to Base64
  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  // Handle image upload, convert to Base64, and save to local storage
  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const base64Image = await convertToBase64(file);
      setProfileImage(base64Image);
      localStorage.setItem("profileImage", base64Image);
    }
  };

  const notifications = [
    "New message from John Doe",
    "Your account settings have been updated",
    "Meeting scheduled for tomorrow at 3 PM",
  ];

  return (
    <header className="flex items-center justify-between px-4 py-2 sm:px-8 sm:py-4 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 shadow-lg rounded-lg">
      {/* Logo/Profile Image */}
      <div className="relative group flex items-center space-x-2 sm:space-x-4">
        <label className="cursor-pointer">
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageUpload}
          />
          {profileImage ? (
            <img
              src={profileImage}
              alt="Profile"
              className="h-8 w-8 sm:h-10 sm:w-10 rounded-full object-cover border-2 border-white shadow-md group-hover:ring-2 group-hover:ring-offset-2 group-hover:ring-blue-500 transition duration-300"
            />
          ) : (
            <img
              src={"/path/to/default-logo.png"} // Use a default logo path here
              alt="Upload profile"
              className="h-8 w-8 sm:h-10 sm:w-10 rounded-full object-cover border-2 border-white shadow-md group-hover:ring-2 group-hover:ring-offset-2 group-hover:ring-blue-500 transition duration-300"
            />
          )}
        </label>
      </div>

      {/* Title and Progress Bar */}
      <div className="flex flex-col items-center space-y-1 text-center">
        <h1 className="text-lg sm:text-2xl font-bold text-white tracking-wide">
          {`Welome ${userName} ` || ""}
        </h1>
        
        {/* Progress Bar, hidden on very small screens */}
        <div className="hidden sm:flex items-center justify-center space-x-2 mt-1">
          <div className="relative w-32 sm:w-48 h-3 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-green-500 to-blue-600 rounded-full transition-all duration-500"
              style={{ width: `${userSkill}%` }}
            ></div>
          </div>
          <span className="text-xs sm:text-sm text-gray-100 font-semibold">
            {userSkill}% Completed
          </span>
        </div>
      </div>

      {/* Notifications and Settings Icons */}
      <div className="flex items-center space-x-4 sm:space-x-6">
        {/* Notifications Icon */}
        <div className="relative cursor-pointer" onClick={toggleModal}>
          <FaBell className="text-white text-lg sm:text-xl hover:text-yellow-300 transition duration-300" />
          {unreadNotifications > 0 && (
            <span className="absolute -top-2 -right-2 inline-flex items-center justify-center w-4 h-4 sm:w-5 sm:h-5 text-xs font-bold text-white bg-red-500 rounded-full">
              {unreadNotifications}
            </span>
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