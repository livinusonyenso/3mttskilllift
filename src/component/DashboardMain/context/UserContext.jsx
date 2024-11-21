import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    firstName: "John",
    primarySkill: "Frontend Development",
    profilePicture: "https://via.placeholder.com/150",
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
