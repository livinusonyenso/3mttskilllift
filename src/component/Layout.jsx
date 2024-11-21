// Layout.js
import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from './Navbar'
import Footer from "./homepage/Footer";

function Layout() {
  const location = useLocation();

  // Check if the current route starts with "/dashboard"
  const hideFooter = location.pathname.startsWith("/dashboard");

  return (
    <div>
      <Navbar />
      <Outlet />
      {/* Conditionally render Footer */}
      {!hideFooter && <Footer />}
    </div>
  );
}

export default Layout;
