import React, { useState } from "react";
import { UserProvider } from "./context/UserContext";
import Header from "./Header";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";


const Dashboard = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <UserProvider>
      <div className={`${isDarkMode ? "dark" : ""} min-h-screen flex`}>
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Header toggleTheme={() => setIsDarkMode(!isDarkMode)} />
          <MainContent />
     
        </div>
      </div>
    </UserProvider>
  );
};

export default Dashboard;
