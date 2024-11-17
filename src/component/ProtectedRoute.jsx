// components/ProtectedRoute.js
import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { isLoggedIn } = useContext(AuthContext);
  const token = localStorage.getItem('authToken');

  // Redirect to login if not authenticated
  if (!isLoggedIn && !token) {
    return <Navigate to="/signin" />;
  }

  return children;
};

export default ProtectedRoute;
