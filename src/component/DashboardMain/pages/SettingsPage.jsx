import React, { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";

const AccountSettingsPage = () => {
  const { user, setUser } = useContext(UserContext);

  const [formData, setFormData] = useState({
    firstName: user.firstName || "",
    email: user.email || "user@example.com",
    profilePicture: user.profilePicture || "",
    password: "",
    theme: "light",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setFormData((prev) => ({ ...prev, profilePicture: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser((prev) => ({ ...prev, ...formData }));
    alert("Profile updated successfully!");
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-green-700">Account Settings</h1>
      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-lg shadow-md">
        {/* Profile Information */}
        <div className="space-y-2">
          <h2 className="text-lg font-semibold text-gray-800">Profile Information</h2>
          <div className="flex items-center space-x-4">
            <img
              src={formData.profilePicture || "https://via.placeholder.com/150"}
              alt="Profile"
              className="h-16 w-16 rounded-full object-cover border-2 border-green-600"
            />
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="block w-full text-sm text-gray-600 bg-gray-100 rounded-md border border-gray-300 cursor-pointer focus:outline-none"
            />
          </div>
          <div className="mt-4">
            <label className="block text-sm text-gray-600">First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="block w-full px-4 py-2 mt-2 text-gray-800 bg-gray-100 rounded-md border border-gray-300 focus:ring-2 focus:ring-green-600 focus:outline-none"
            />
          </div>
          <div className="mt-4">
            <label className="block text-sm text-gray-600">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="block w-full px-4 py-2 mt-2 text-gray-800 bg-gray-100 rounded-md border border-gray-300 focus:ring-2 focus:ring-green-600 focus:outline-none"
            />
          </div>
        </div>

        {/* Password Management */}
        <div className="space-y-2 mt-6">
          <h2 className="text-lg font-semibold text-gray-800">Password Management</h2>
          <div className="mt-4">
            <label className="block text-sm text-gray-600">New Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="block w-full px-4 py-2 mt-2 text-gray-800 bg-gray-100 rounded-md border border-gray-300 focus:ring-2 focus:ring-green-600 focus:outline-none"
            />
          </div>
        </div>

        {/* Preferences */}
        <div className="space-y-2 mt-6">
          <h2 className="text-lg font-semibold text-gray-800">Preferences</h2>
          <div className="mt-4">
            <label className="block text-sm text-gray-600">Theme</label>
            <select
              name="theme"
              value={formData.theme}
              onChange={handleChange}
              className="block w-full px-4 py-2 mt-2 text-gray-800 bg-gray-100 rounded-md border border-gray-300 focus:ring-2 focus:ring-green-600 focus:outline-none"
            >
              <option value="light">Light</option>
              <option value="dark">Dark</option>
            </select>
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-6">
          <button
            type="submit"
            className="bg-green-600 text-white px-6 py-2 rounded-md shadow-md hover:bg-green-700 focus:ring-2 focus:ring-green-600 focus:outline-none"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default AccountSettingsPage;
