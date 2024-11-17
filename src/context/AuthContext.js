import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(() => {
    // Initialize auth state from localStorage
    const token = localStorage.getItem('authToken');
    return token ? { token } : {};
  });
  const [isLoggedIn, setIsLoggedIn] = useState(!!auth.token); // Set initial login state

  // Persist the token in localStorage on login
  const login = (token) => {
    setAuth({ token });
    localStorage.setItem('authToken', token); // Save token to localStorage
    setIsLoggedIn(true);
  };

  // Clear the token from localStorage on logout
  const logout = () => {
    setAuth({});
    localStorage.removeItem('authToken'); // Remove token from localStorage
    setIsLoggedIn(false);
  };

  // Synchronize the login state with localStorage on mount
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      setAuth({ token });
      setIsLoggedIn(true);
    }
  }, []); // Run once on mount

  return (
    <AuthContext.Provider value={{ auth, isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
