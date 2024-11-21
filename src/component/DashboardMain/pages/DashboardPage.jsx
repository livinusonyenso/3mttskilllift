import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { UserProvider } from "../context/UserContext";
import Header from "../../dashboard/Header";
import Sidebar from "../Sidebar";

const DashboardMain = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <UserProvider>
      {/* Root container */}
      <div className={`${isDarkMode ? "dark" : ""} flex flex-col min-h-screen`}>
        {/* Header */}
        <Header toggleTheme={() => setIsDarkMode(!isDarkMode)} className="bg-green-600 shadow-md" />
        
        {/* Main content with sidebar */}
        <div className="flex flex-1">
          {/* Sidebar */}
          <Sidebar className="w-64 bg-green-500" />
          
          {/* Content area */}
          <main className="flex-1 bg-gray-100 dark:bg-gray-800 p-6 overflow-auto">
            <Outlet />
          </main>
        </div>
        
        {/* Footer */}
        <footer className="bg-gray-200 dark:bg-gray-900 text-center py-4">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            &copy; 2024 SkillLift. All rights reserved.
          </p>
        </footer>
      </div>
    </UserProvider>
  );
};

export default DashboardMain;
