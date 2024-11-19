import React, { useState, useEffect } from "react";
import { FaUserCircle } from "react-icons/fa";

// Toast Notification Component
const Toast = ({ message, onClose }) => (
  <div className="fixed top-5 right-5 bg-green-600 text-white p-4 rounded-lg shadow-lg z-50">
    {message}
    <button onClick={onClose} className="ml-4 font-bold">X</button>
  </div>
);

const AccountSettings = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [notifications, setNotifications] = useState(false);
  const [showToast, setShowToast] = useState(false);

  // Load user details from local storage when component mounts
  useEffect(() => {
    const savedUsername = localStorage.getItem("username");
    const savedEmail = localStorage.getItem("email");
    const savedNotifications =
      localStorage.getItem("notifications") === "true";
    if (savedUsername) setUsername(savedUsername);
    if (savedEmail) setEmail(savedEmail);
    setNotifications(savedNotifications);
  }, []);

  const handleSave = () => {
    // Save details to localStorage
    if (activeTab === "profile") {
      localStorage.setItem("username", username);
      localStorage.setItem("email", email);
    } else if (activeTab === "security") {
      localStorage.setItem("password", password);
    } else if (activeTab === "notifications") {
      localStorage.setItem("notifications", notifications);
    }

    // Display toast notification
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000); // Hide toast after 3 seconds
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white w-full max-w-2xl p-8 rounded-lg shadow-lg relative">
      <h2 className="text-2xl sm:text-3xl font-bold text-center sm:text-left text-gray-800 mb-8">
  Account Settings
</h2>


        {/* User Icon */}
        <div className="flex items-center justify-center mb-6">
          <FaUserCircle className="text-gray-500 text-7xl" />
        </div>

        {/* Tabs for Forms */}
        <div className="flex flex-wrap justify-around mb-10 border-b-2 pb-2">
          <button
            className={`flex-1 sm:flex-initial text-center py-2 ${
              activeTab === "profile"
                ? "text-blue-600 font-bold border-b-4 border-blue-600"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("profile")}
          >
            Profile
          </button>
          <button
            className={`flex-1 sm:flex-initial text-center py-2 ${
              activeTab === "security"
                ? "text-blue-600 font-bold border-b-4 border-blue-600"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("security")}
          >
            Security
          </button>
          <button
            className={`flex-1 sm:flex-initial text-center py-2 ${
              activeTab === "notifications"
                ? "text-blue-600 font-bold border-b-4 border-blue-600"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("notifications")}
          >
            Notifications
          </button>
        </div>

        {/* Forms */}
        <div className="space-y-6">
          {activeTab === "profile" && (
            <form>
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  Username
                </label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your username"
                />
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your email"
                />
              </div>
            </form>
          )}

          {activeTab === "security" && (
            <form>
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter a new password"
                />
              </div>
            </form>
          )}

          {activeTab === "notifications" && (
            <form>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={notifications}
                  onChange={(e) => setNotifications(e.target.checked)}
                  className="mr-3 h-5 w-5 focus:ring-blue-500"
                />
                <label className="text-gray-700 text-sm">
                  Enable Email Notifications
                </label>
              </div>
            </form>
          )}
        </div>

        {/* Save Button */}
        <button
          type="button"
          onClick={handleSave}
          className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition duration-300 mt-6"
        >
          Save 
        </button>

        {/* Toast Notification */}
        {showToast && (
          <Toast
            message="Account details updated successfully!"
            onClose={() => setShowToast(false)}
          />
        )}
      </div>
    </div>
  );
};

export default AccountSettings;
