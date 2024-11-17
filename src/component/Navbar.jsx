import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import useAuth from "../hooks/useAuth";

const ResponsiveNavbar = () => {
  const { auth, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => setIsOpen(!isOpen);

  // Function to close the menu when a link is clicked
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="text-green-600 font-bold text-2xl">
          <Link to="/" onClick={closeMenu}>
            SkillLift
          </Link>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div
          className="md:hidden text-green-600 text-2xl cursor-pointer z-30"
          onClick={toggleMenu}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Navigation Links */}
        <ul
          className={`md:flex md:items-center md:space-x-8 text-green-600 font-semibold transition-all duration-300 ease-in-out ${
            isOpen ? "block" : "hidden"
          } absolute md:relative top-0 left-0 md:top-auto md:left-auto bg-white md:bg-transparent w-full md:w-auto p-6 md:p-0 z-20`}
        >
        
          {!auth.token ? (
            <li className="py-2 md:py-0 hover:text-green-800">
              <Link to="/" onClick={closeMenu}>
              Home
              </Link>
            </li>
          ) : (
            <li className="py-2 md:py-0 hover:text-green-800">
              <Link to="/dashboard" onClick={closeMenu}>
              Dashboard
              </Link>
            </li>
          )}
          <li className="py-2 md:py-0 hover:text-green-800">
            <Link to="/mentor" onClick={closeMenu}>
              Mentor
            </Link>
          </li>
          <li className="py-2 md:py-0 hover:text-green-800">
            <Link to="/peergroup" onClick={closeMenu}>
              Peer Group
            </Link>
          </li>
          <li className="py-2 md:py-0 hover:text-green-800">
            <Link to="/courses" onClick={closeMenu}>
              Courses
            </Link>
          </li>
          {!auth.token ? (
            <li className="py-2 md:py-0 hover:text-green-800">
              <Link to="/register" onClick={closeMenu}>
                Register
              </Link>
            </li>
          ) : (
            <li className="py-2 md:py-0 hover:text-green-800">
              <Link to="/projects" onClick={closeMenu}>
                Projects
              </Link>
            </li>
          )}
          {!auth.token ? (
            <li className="py-2 md:py-0 hover:text-green-800">
              <Link to="/signin" onClick={closeMenu}>
                Sign In
              </Link>
            </li>
          ) : (
            <li className="py-2 md:py-0 hover:text-green-800">
              <button
                onClick={() => {
                  logout(); // Call logout from AuthContext
                  closeMenu(); // Close the menu on logout
                }}
                className="bg-transparent border-none cursor-pointer text-green-600 hover:text-green-800"
              >
                Logout
              </button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default ResponsiveNavbar;
