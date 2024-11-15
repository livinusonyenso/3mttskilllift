


import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext'; // make sure the import path is correct

const ProtectedRoute = ({ children }) => {
  const { isLoggedIn } = useContext(AuthContext); // get the authentication status
  
  // If not logged in, navigate to /signin
  if (!isLoggedIn) {
    return <Navigate to="/signin" replace />;
    console.log(isLoggedIn)
  }

  // If logged in, render the component
  return children;
};

export default ProtectedRoute;
